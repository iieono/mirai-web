import Link from "next/link";
import Image from "next/image";
import { type SanityDocument } from "next-sanity";

import { client } from "@/sanity/client";

const PRODUCTS_QUERY = `*[
  _type == "product"
]|order(name asc)[0...12]{
  _id, 
  name, 
  priceEach, 
  availableCount, 
  "imageUrl": images[0].asset->url
}`;

const options = { next: { revalidate: 30 } };

export default async function ProductsPage() {
  const products = await client.fetch<SanityDocument[]>(
    PRODUCTS_QUERY,
    {},
    options
  );

  return (
    <main className="container mx-auto min-h-screen max-w-3xl p-8">
      <h1 className="text-4xl font-bold mb-8">Products</h1>
      <ul className="flex flex-col gap-y-6">
        {products.map((product) => (
          <li
            key={product._id}
            className="border p-4 rounded-lg shadow-lg hover:shadow-xl transition"
          >
            <Link
              href={`/products/${product._id}`}
              className="flex items-center gap-x-4"
            >
              {product.imageUrl && (
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  width={80}
                  height={80}
                  className="rounded-md object-cover"
                />
              )}
              <div>
                <h2 className="text-xl font-semibold">{product.name}</h2>
                <p className="text-gray-600">Each: ${product.priceEach}</p>
                <p className="text-gray-500">
                  Available: {product.availableCount}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
