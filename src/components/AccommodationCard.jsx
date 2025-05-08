import React from 'react';
import { Check, History, Star } from 'lucide-react';

const AccommodationCard = ({ 
  name, 
  image, 
  checkIn, 
  checkOut, 
  nights, 
  rating, 
  isConfirmed 
}) => {
  return (
    <div className="w-full max-w-sm rounded-xl overflow-hidden shadow-md bg-base-100">
      <div className="relative h-40">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover"
        />
        
        <div className="absolute bottom-2 left-2 flex items-center bg-blue-700 text-white px-2 py-1 rounded-md text-sm">
          <Star className="h-4 w-4 fill-white text-white mr-1" />
          <span className="font-medium">{rating} Very Good</span>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="font-bold text-lg text-base">{name}</h3>
        
        <div className="mt-2 text-base">
          <p className="text-sm ">Check in: {checkIn}</p>
          <p className="text-sm">Check out: {checkOut}</p>
        </div>
        
        <div className="mt-4 flex justify-between items-center">
          <span className="text-base font-medium">{nights} Nights</span>
          
          {!isConfirmed? (
                <div className="flex items-center text-orange-500">
                    <History className="h-5 w-5 mr-1" />
                    <span className="font-medium">Pending</span>
                </div>
          ) : (
            <div className="flex items-center text-green-500">
              <Check className="h-5 w-5 mr-1" />
              <span className="font-medium">Confirmed</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AccommodationCard;

