// app/product/[id]/page.jsx

async function getProduct(id) {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 2000)); // 2 seconds delay
  
    // Fake data (you can fetch real API too)
    return {
      id,
      name: `Product ${id}`,
      description: `This is the description for product ${id}`,
    };
  }
  
  export default async function ProductPage({ params }) {
    const { id } = params;
    const product = await getProduct(id);
  
    return (
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-4">Product Details</h1>
        <div className="border p-4 rounded shadow">
          <h2 className="text-xl font-semibold">{product.name}</h2>
          <p className="text-gray-600 mt-2">{product.description}</p>
        </div>
      </div>
    );
  }
  