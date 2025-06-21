#!/usr/bin/env node

/**
 * Product Addition Script
 * 
 * This script helps you add products to your ChemLab Synthesis application
 * by reading from a JSON file and updating the products data file.
 * 
 * Usage:
 * node scripts/add-product.js [input-file.json]
 * 
 * Example:
 * node scripts/add-product.js new-products.json
 */

const fs = require('fs');
const path = require('path');

// Colors for console output
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m'
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function validateProduct(product) {
  const required = ['id', 'name', 'casNumber', 'manufacturer', 'description', 'category', 'packagingSizes', 'msdsUrl'];
  const missing = required.filter(field => !product[field]);
  
  if (missing.length > 0) {
    return { valid: false, errors: `Missing required fields: ${missing.join(', ')}` };
  }

  // Validate CAS number format (XXX-XX-X)
  const casRegex = /^\d{1,7}-\d{2}-\d$/;
  if (!casRegex.test(product.casNumber)) {
    return { valid: false, errors: 'Invalid CAS number format. Use XXX-XX-X format.' };
  }

  // Validate category
  const validCategories = [
    'organic-chemicals',
    'inorganic-chemicals', 
    'solvents',
    'reagents',
    'analytical-standards',
    'laboratory-glassware',
    'lab-equipment',
    'consumables'
  ];
  
  if (!validCategories.includes(product.category)) {
    return { valid: false, errors: `Invalid category. Must be one of: ${validCategories.join(', ')}` };
  }

  // Validate packaging sizes
  if (!Array.isArray(product.packagingSizes) || product.packagingSizes.length === 0) {
    return { valid: false, errors: 'At least one packaging size is required.' };
  }

  for (const size of product.packagingSizes) {
    if (!size.id || !size.size || !size.unit || !size.sku) {
      return { valid: false, errors: 'Each packaging size must have id, size, unit, and sku.' };
    }
  }

  return { valid: true };
}

function generateProductId(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

function addProducts(inputFile) {
  try {
    // Read input file
    log(`Reading products from ${inputFile}...`, 'blue');
    const inputData = JSON.parse(fs.readFileSync(inputFile, 'utf8'));
    
    // Handle both single product and array of products
    const productsToAdd = Array.isArray(inputData) ? inputData : [inputData];
    
    // Read existing products
    const productsPath = path.join(__dirname, '..', 'data', 'products.ts');
    const productsContent = fs.readFileSync(productsPath, 'utf8');
    
    // Extract existing products array
    const productsMatch = productsContent.match(/export const products: Product\[\] = (\[[\s\S]*?\]);/);
    if (!productsMatch) {
      throw new Error('Could not find products array in data/products.ts');
    }
    
    let existingProducts;
    try {
      // Create a safe evaluation context
      const safeEval = new Function('return ' + productsMatch[1]);
      existingProducts = safeEval();
    } catch (e) {
      throw new Error('Could not parse existing products. Check the products.ts file format.');
    }
    
    log(`Found ${existingProducts.length} existing products.`, 'cyan');
    
    // Validate and process new products
    const validProducts = [];
    const errors = [];
    
    for (let i = 0; i < productsToAdd.length; i++) {
      const product = productsToAdd[i];
      
      // Generate ID if not provided
      if (!product.id) {
        product.id = generateProductId(product.name);
        log(`Generated ID for product ${i + 1}: ${product.id}`, 'yellow');
      }
      
      // Set defaults
      product.inStock = product.inStock !== undefined ? product.inStock : true;
      product.featured = product.featured !== undefined ? product.featured : false;
      
      // Validate product
      const validation = validateProduct(product);
      if (validation.valid) {
        // Check for duplicate ID
        if (existingProducts.find(p => p.id === product.id)) {
          errors.push(`Product ${i + 1}: ID "${product.id}" already exists`);
        } else {
          validProducts.push(product);
        }
      } else {
        errors.push(`Product ${i + 1}: ${validation.errors}`);
      }
    }
    
    // Report errors
    if (errors.length > 0) {
      log('\n❌ Validation errors found:', 'red');
      errors.forEach(error => log(`  - ${error}`, 'red'));
      return false;
    }
    
    // Add new products
    const updatedProducts = [...existingProducts, ...validProducts];
    
    // Generate new products.ts content
    const newContent = `import { Product } from "@/types/product"

export const products: Product[] = ${JSON.stringify(updatedProducts, null, 2)};

export const searchProducts = (query: string): Product[] => {
  return products.filter(product =>
    product.name.toLowerCase().includes(query.toLowerCase()) ||
    product.casNumber.toLowerCase().includes(query.toLowerCase()) ||
    product.manufacturer.toLowerCase().includes(query.toLowerCase())
  );
};

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (categoryId: string): Product[] => {
  return products.filter(product => product.category === categoryId);
};

export const getProductCategories = () => [
  ...new Set(products.map(product => product.category))
];
`;
    
    // Write updated file
    fs.writeFileSync(productsPath, newContent);
    
    log(`\n✅ Successfully added ${validProducts.length} product(s)!`, 'green');
    log(`📊 Total products: ${updatedProducts.length}`, 'cyan');
    
    // Show added products
    log('\n📝 Added products:', 'cyan');
    validProducts.forEach((product, index) => {
      log(`  ${index + 1}. ${product.name} (${product.casNumber})`, 'green');
    });
    
    return true;
    
  } catch (error) {
    log(`\n❌ Error: ${error.message}`, 'red');
    return false;
  }
}

function showHelp() {
  log('\n🧪 ChemLab Product Addition Script', 'bright');
  log('=====================================\n', 'bright');
  
  log('Usage:', 'cyan');
  log('  node scripts/add-product.js [input-file.json]\n', 'yellow');
  
  log('Examples:', 'cyan');
  log('  node scripts/add-product.js new-products.json', 'yellow');
  log('  node scripts/add-product.js single-product.json\n', 'yellow');
  
  log('Input JSON Format:', 'cyan');
  log('  Single product:', 'yellow');
  log('  {', 'reset');
  log('    "name": "Product Name",', 'reset');
  log('    "casNumber": "123-45-6",', 'reset');
  log('    "manufacturer": "Sigma-Aldrich",', 'reset');
  log('    "description": "Product description...",', 'reset');
  log('    "category": "organic-chemicals",', 'reset');
  log('    "packagingSizes": [', 'reset');
  log('      {', 'reset');
  log('        "id": "size-1",', 'reset');
  log('        "size": "500",', 'reset');
  log('        "unit": "g",', 'reset');
  log('        "sku": "PROD-500G"', 'reset');
  log('      }', 'reset');
  log('    ],', 'reset');
  log('    "msdsUrl": "/msds/product.pdf"', 'reset');
  log('  }', 'reset');
  
  log('\n  Multiple products:', 'yellow');
  log('  [', 'reset');
  log('    { /* product 1 */ },', 'reset');
  log('    { /* product 2 */ }', 'reset');
  log('  ]', 'reset');
  
  log('\nRequired fields:', 'cyan');
  log('  - name: Product name', 'reset');
  log('  - casNumber: CAS registry number (XXX-XX-X format)', 'reset');
  log('  - manufacturer: Manufacturer name', 'reset');
  log('  - description: Product description', 'reset');
  log('  - category: Product category', 'reset');
  log('  - packagingSizes: Array of available sizes', 'reset');
  log('  - msdsUrl: Safety document URL', 'reset');
  
  log('\nOptional fields:', 'cyan');
  log('  - id: Unique identifier (auto-generated if not provided)', 'reset');
  log('  - purity: Purity specification', 'reset');
  log('  - grade: Grade specification', 'reset');
  log('  - specifications: Array of technical specifications', 'reset');
  log('  - applications: Array of use cases', 'reset');
  log('  - imageUrl: Product image URL', 'reset');
  log('  - inStock: Availability (default: true)', 'reset');
  log('  - featured: Featured product flag (default: false)', 'reset');
}

// Main execution
const args = process.argv.slice(2);

if (args.length === 0 || args.includes('--help') || args.includes('-h')) {
  showHelp();
  process.exit(0);
}

const inputFile = args[0];

if (!fs.existsSync(inputFile)) {
  log(`❌ Error: Input file "${inputFile}" not found.`, 'red');
  process.exit(1);
}

const success = addProducts(inputFile);
process.exit(success ? 0 : 1); 