import React from 'react';
import { Clock, MapPin } from 'lucide-react';

const ActivitiesCard = ({
  title,
  subtitle,
  image,
  timing,
  duration,
  pickupLocation
}) => {
  return (
    <div className="w-full max-w-md rounded-xl overflow-hidden shadow-md bg-base-100 border  my-3">
      <div className="flex flex-row h-50">
        <div className="w-2/5">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="w-3/5 p-4">
          <div className="mb-3">
            <h3 className="font-bold text-md text-base">{title}</h3>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-start">
              <span className="font-bold text-sm text-base w-24">Timing:</span>
              <span className="text-sm text-base">{timing}</span>
            </div>
            
            <div className="flex items-start">
              <span className="font-bold text-sm text-base w-24">Duration:</span>
              <span className="text-sm text-base">{duration}</span>
            </div>
            
            <div className="flex items-start">
              <span className="font-bold text-sm text-base w-24">Pick up:</span>
              <span className="text-sm text-base">{pickupLocation}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivitiesCard;
