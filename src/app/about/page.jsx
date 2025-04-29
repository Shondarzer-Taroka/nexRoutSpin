'use client';

import { useEffect, useState } from 'react';

export default function AboutPage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Simulate API call
    async function fetchData() {
      const res = await fetch('https://fakestoreapi.com/products/1');
      const result = await res.json();
      setData(result);
    }
    fetchData();
  }, []);

  if (!data) return <div>Loading about data...</div>;

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">About Page</h1>
      <p>{data.title}</p>
      <p>{data.description}</p>
    </div>
  );
}
