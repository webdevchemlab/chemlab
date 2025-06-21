# 🧪 Product Management Guide

This guide explains all the different ways to add and manage products in your ChemLab Synthesis chemical supply ecommerce application.

## 📋 Table of Contents

1. [Overview](#overview)
2. [Method 1: Admin Interface (Recommended)](#method-1-admin-interface-recommended)
3. [Method 2: Direct Code Editing](#method-2-direct-code-editing)
4. [Method 3: Payload CMS (Advanced)](#method-3-payload-cms-advanced)
5. [Product Data Structure](#product-data-structure)
6. [Best Practices](#best-practices)
7. [Troubleshooting](#troubleshooting)

## 🎯 Overview

Your application supports **three different approaches** for product management:

1. **Admin Interface** - User-friendly web interface (Recommended for non-technical users)
2. **Direct Code Editing** - Edit TypeScript files directly (For developers)
3. **Payload CMS** - Full-featured CMS with database (Advanced setup)

## 🖥️ Method 1: Admin Interface (Recommended)

### Access the Admin Panel
1. Navigate to `/admin` in your application
2. Click on "Products" section
3. Use the "Add Product" button to create new products

### Features Available
- ✅ **Visual Form Interface** - No coding required
- ✅ **Real-time Validation** - Immediate feedback on errors
- ✅ **Bulk Import/Export** - JSON file support
- ✅ **Search & Filter** - Find products quickly
- ✅ **Grid/List Views** - Multiple viewing options
- ✅ **Edit & Delete** - Full CRUD operations

### Adding a New Product
1. Click "Add Product" button
2. Fill in the required fields:
   - **Product Name** (e.g., "Sodium Chloride")
   - **CAS Number** (e.g., "7647-14-5")
   - **Manufacturer** (select from dropdown)
   - **Category** (select from dropdown)
   - **Description** (detailed product description)
3. Add optional fields:
   - **Purity** (e.g., "≥99.5%")
   - **Grade** (e.g., "ACS Reagent")
   - **Packaging Sizes** (multiple sizes with SKUs)
   - **Specifications** (technical specifications)
   - **Applications** (use cases)
   - **MSDS URL** (safety document link)
   - **Image URL** (product image)
4. Set flags:
   - **In Stock** (availability)
   - **Featured** (highlight on homepage)
5. Click "Add Product" to save

### Bulk Import/Export
- **Export**: Download current products as JSON file
- **Import**: Upload JSON file to add multiple products at once

## 💻 Method 2: Direct Code Editing

### File Location
Products are stored in: `data/products.ts`

### Adding a Product Manually
```typescript
{
  id: "unique-product-id",
  name: "Product Name",
  casNumber: "CAS-NUMBER",
  manufacturer: "Manufacturer Name",
  description: "Product description...",
  category: "organic-chemicals", // or other category
  purity: "≥99.5%",
  grade: "ACS Reagent",
  packagingSizes: [
    {
      id: "unique-size-id",
      size: "500",
      unit: "g",
      sku: "PRODUCT-500G"
    }
  ],
  specifications: [
    "Assay: ≥99.5%",
    "Heavy Metals: ≤5 ppm"
  ],
  applications: [
    "Buffer preparation",
    "General laboratory use"
  ],
  msdsUrl: "/msds/product-name.pdf",
  imageUrl: "/images/products/product.svg",
  inStock: true,
  featured: false
}
```

### Available Categories
- `organic-chemicals`
- `inorganic-chemicals`
- `solvents`
- `reagents`
- `analytical-standards`
- `laboratory-glassware`
- `lab-equipment`
- `consumables`

### Steps to Add Product
1. Open `data/products.ts`
2. Add new product object to the `products` array
3. Save the file
4. The application will automatically reload

## 🗄️ Method 3: Payload CMS (Advanced)

### Setup Required
1. **Database**: MongoDB connection required
2. **Environment Variables**: Set `MONGODB_URI` and `NEXT_PUBLIC_SERVER_URL`
3. **Admin Access**: Navigate to `/admin` for Payload CMS interface

### Features
- ✅ **Rich Text Editor** - Advanced content editing
- ✅ **Media Management** - Upload and manage images
- ✅ **User Management** - Multiple admin users
- ✅ **Database Storage** - Persistent data storage
- ✅ **API Endpoints** - RESTful API for products
- ✅ **Advanced Fields** - Custom field types

### Access Payload Admin
1. Navigate to `/admin`
2. Login with admin credentials
3. Use the Products collection to manage products

## 📊 Product Data Structure

### Required Fields
```typescript
interface Product {
  id: string;              // Unique identifier
  name: string;            // Product name
  casNumber: string;       // CAS registry number
  manufacturer: string;    // Manufacturer name
  description: string;     // Product description
  category: ProductCategory; // Product category
  packagingSizes: PackagingSize[]; // Available sizes
  msdsUrl: string;         // Safety document URL
  inStock: boolean;        // Availability status
}
```

### Optional Fields
```typescript
{
  subCategory?: string;    // Sub-category
  purity?: string;         // Purity specification
  grade?: string;          // Grade specification
  specifications?: string[]; // Technical specs
  applications?: string[];   // Use cases
  imageUrl?: string;       // Product image
  featured?: boolean;      // Featured product flag
}
```

### Packaging Size Structure
```typescript
interface PackagingSize {
  id: string;      // Unique size ID
  size: string;    // Size value (e.g., "500")
  unit: string;    // Unit (g, kg, mL, L, etc.)
  sku: string;     // Stock keeping unit
  price?: number;  // Optional price
}
```

## 🎯 Best Practices

### Product Naming
- Use standard chemical names (IUPAC preferred)
- Include common names in description
- Be consistent with naming conventions

### CAS Numbers
- Always include CAS registry numbers
- Verify CAS numbers for accuracy
- Use standard format (XXX-XX-X)

### Descriptions
- Include key applications
- Mention purity and grade
- Add safety considerations
- Include storage requirements

### Images
- Use SVG format for chemical structures
- Maintain consistent aspect ratios
- Include placeholder images for missing products

### Categories
- Choose the most specific category
- Use subcategories when available
- Keep categorization consistent

### SKUs
- Use consistent SKU format
- Include manufacturer codes
- Make SKUs searchable and sortable

## 🔧 Troubleshooting

### Common Issues

#### Product Not Appearing
- Check if `inStock` is set to `true`
- Verify category matches existing categories
- Ensure all required fields are filled

#### Import Errors
- Check JSON file format
- Verify all required fields are present
- Ensure category values match existing categories

#### Image Not Loading
- Check image URL path
- Verify image file exists in `public/images/products/`
- Use correct file format (SVG recommended)

#### Form Validation Errors
- Fill all required fields (marked with *)
- Use valid email format for contact information
- Ensure CAS number follows XXX-XX-X format

### Performance Tips
- Use appropriate image sizes
- Optimize product descriptions
- Regular cleanup of unused products
- Monitor database performance (if using Payload CMS)

## 🚀 Quick Start Guide

### For Non-Technical Users
1. Go to `/admin`
2. Click "Products"
3. Click "Add Product"
4. Fill in the form
5. Save and repeat

### For Developers
1. Open `data/products.ts`
2. Add product object to array
3. Save file
4. Test on frontend

### For Advanced Users
1. Set up MongoDB connection
2. Configure environment variables
3. Access Payload CMS at `/admin`
4. Use rich admin interface

## 📞 Support

If you encounter issues:
1. Check the browser console for errors
2. Verify all required fields are completed
3. Ensure proper file permissions
4. Contact technical support if needed

---

**Note**: The admin interface (Method 1) is recommended for most users as it provides the best balance of ease of use and functionality without requiring technical knowledge. 