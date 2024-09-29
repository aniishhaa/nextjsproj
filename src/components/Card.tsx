import Link from 'next/link';
import { Flowers } from '@/app/page';

interface FlowersProps {
  flower: Flowers;
}

const FlowersCard: React.FC<FlowersProps> = ({ flower }) => {
  return (
    <Link href={`/flowers/${flower.id}`}>
      <div className="bg-[#EEE8F4] rounded-lg cursor-pointer shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col" >
        <img 
          src={flower.image} 
          alt={flower.title} 
          className="rounded-t-lg" 
          style={{objectFit: 'cover' }} 
        />
        <div className="p-4 flex-grow flex flex-col justify-between">
          <h2 className="text-xl font-semibold mb-2">{flower.title}</h2>
          <p className="text-sm mb-2">{flower.description}</p>
          <p className="text-lg font-bold">Rs {flower.price.toFixed(2)}</p>
        </div>
      </div>
    </Link>
  );
};

export default FlowersCard;
