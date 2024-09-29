"use client";

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import fetchFlowers from '../../api_file/fetchItem';
import { Flowers } from '../../page';

export default function FlowersDetailPage() {
  const { id } = useParams();
  const [flower, setFlower] = useState<Flowers | null>(null);

  useEffect(() => {
    async function getFlowers() {
      const data = await fetchFlowers();
      if (typeof id === 'string') {
        const selectedFlower = data.find((item) => item.id === Number(id));
        if (selectedFlower) {
          setFlower(selectedFlower);
        } else {
          setFlower(null);
        }
      }
    }

    if (id) getFlowers();
  }, [id]);

  if (!flower) return <div className="text-center">Loading or item not found...</div>;

  return (
    <div className="detail-page bg-[#60675D] p-5 flex flex-col md:flex-row">
      <div className="flex-1 md:mr-6">
      <h1 className="text-5xl mb-4 font-semibold text-[#EEDECF]">{flower.title}</h1>
      
      <p className="mt-4 text-lg text-[#EEDECF]">{flower.description}</p>
      <p className="mt-4 text-lg font-bold text-[#EEDECF]">Price: Rs {flower.price.toFixed(2)}</p>
      <h2 className="text-2xl mt-6 font-semibold text-[#EEDECF]">Summary</h2>
      <p className="mt-2 text-lg text-[#EEDECF]">{flower.summary}</p>
      </div>
      <div className="flex-initial w-full md:w-1/2 flex justify-center mt-10 ">
      <img 
        src={flower.image} 
        alt={flower.title} 
        className="h-[350px] object-cover rounded-lg shadow-lg mb-4" 
      />
      </div>
    </div>
  );
}
