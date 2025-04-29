// app/product/[id]/page.jsx
async function getProduct(id) {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    if (!res.ok) throw new Error("Failed to fetch product");
    return res.json();
  }
  
  export default async function ProductPage({ params }) {
    const product = await getProduct(params.id);
  
    return (
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
        <p className="text-gray-700">{product.description}</p>
        <p className="mt-2 font-semibold">Price: ${product.price}</p>
      </div>
    );
  }
  