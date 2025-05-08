import React from 'react';
import { ArrowRight } from 'lucide-react';

const FlightCard = ({ 
  date, 
  time, 
  departureCode, 
  departureCity, 
  departureCountry,
  arrivalCode, 
  arrivalCity, 
  arrivalCountry
}) => {
  return (
    <div className="w-full bg-blue-600 rounded-lg overflow-hidden relative text-white">
      <div className="flex justify-between p-4 pb-16">
        {/* Left Content */}
        <div className="z-10">
          <h2 className="text-xl font-bold mb-1">Flight Details</h2>
          <p className="text-white/90 mb-6">{date}, {time}</p>
          
          <div className="flex items-center gap-4">
            {/* Departure */}
            <div>
              <p className="text-2xl font-bold">{departureCode}</p>
              <p className="text-sm text-white/80">{departureCity}, {departureCountry}</p>
            </div>
            
            {/* Arrow */}
            <ArrowRight size={20} className="text-white/70 mt-1" />
            
            {/* Arrival */}
            <div>
              <p className="text-2xl font-bold">{arrivalCode}</p>
              <p className="text-sm text-white/80">{arrivalCity}, {arrivalCountry}</p>
            </div>
          </div>
        </div>
        
        {/* Top Right "See all" link */}
        <div className="absolute top-4 right-4 z-10">
          <a href="#" className="underline text-sm font-medium hover:underline">See all</a>
        </div>
        
        {/* Airplane Illustration */}
        <div className="absolute right-0 bottom-0 w-1/2 h-full z-0 flex items-center justify-end">
          <svg 
            className="w-full h-auto opacity-90" 
            viewBox="0 0 200 140" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Simplified airplane SVG */}
            <path 
              d="M190 60C190 60 180 55 165 65C150 75 145 70 140 70L60 65C55 65 50 60 45 55C40 50 35 45 25 45H10C5 45 0 50 0 55C0 60 5 65 10 65H25C30 65 35 70 40 75L60 95C65 100 70 100 75 100H145C150 100 155 105 160 110L180 125C185 130 195 130 195 120V70C195 65 190 60 190 60Z" 
              fill="#1E3A8A" 
              fillOpacity="0.5"
            />
            <ellipse 
              cx="170" 
              cy="90" 
              rx="15" 
              ry="5" 
              fill="#1E3A8A" 
              fillOpacity="0.5"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default FlightCard;

// Example usage:
