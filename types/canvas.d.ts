declare module 'canvas' {
  export interface Canvas {
    width: number;
    height: number;
    getContext(contextId: '2d'): CanvasRenderingContext2D;
    toBuffer(): Buffer;
  }

  export interface CanvasRenderingContext2D {
    fillStyle: string;
    font: string;
    textAlign: 'left' | 'right' | 'center' | 'start' | 'end';
    textBaseline: 'top' | 'hanging' | 'middle' | 'alphabetic' | 'ideographic' | 'bottom';
    fillRect(x: number, y: number, width: number, height: number): void;
    fillText(text: string, x: number, y: number, maxWidth?: number): void;
    measureText(text: string): { width: number };
  }

  export function createCanvas(width: number, height: number): Canvas;
  export function loadImage(src: string): Promise<any>;
} 