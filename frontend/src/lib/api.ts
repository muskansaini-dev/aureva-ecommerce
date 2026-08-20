const API_URL = 'http://localhost:3001';

export type Product = {
  id: string;
  name: string;
  description: string | null;
  price: string;
  imageUrl: string | null;
  stock: number;
  createdAt: string;
};

export async function getProducts(): Promise<Product[]> {
  const res = await fetch(`${API_URL}/products`, { cache: 'no-store' });
  if (!res.ok) throw new Error('Failed to fetch products');
  return res.json();
}

export async function getProduct(id: string): Promise<Product> {
  const res = await fetch(`${API_URL}/products/${id}`, { cache: 'no-store' });
  if (!res.ok) throw new Error('Failed to fetch product');
  return res.json();
}