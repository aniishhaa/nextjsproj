"use client"; 
import { useState, useEffect } from 'react';
import fetchFlowerss from './api_file/fetchItem';
import FlowersCard from '../components/Card';

export interface Flowers {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
  careInstructions?: string; 
  origin?: string; 
  size?: string; 
  summary: string
}

export default function HomePage() {
  const [Flowerss, setFlowerss] = useState<Flowers[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => {
    async function getFlowerss() {
      const data = await fetchFlowerss();
      setFlowerss(data);
    }
    getFlowerss();
  }, []);

  // Filters the flowers based on the search term
  const filteredFlowerss = Flowerss.filter(Flowers =>
    Flowers.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4 bg-[#EEDECF]">
      <div className="heading-container">
        <img 
          src="https://static.vecteezy.com/system/resources/previews/013/522/879/original/minimalist-flower-doodle-png.png" 
          alt="Flower Doodle" 
          className="flower-doodle" 
        />
        <h1 className="heading">Flower Shop</h1>
      </div>
      <input
        type="text"
        placeholder="Search Flowers..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border rounded-md p-2 mb-6 w-full mx-auto transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray" 
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredFlowerss.map((Flowers) => (
          <div key={Flowers.id} className="bg-[#BB9878] p-5 rounded-lg shadow-md">
            <FlowersCard flower={Flowers} />
          </div>
        ))}
      </div>
    </div>
  );
}
