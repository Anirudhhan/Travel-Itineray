import React from 'react';

const CalendarCard = ({ activitiesCount, currentDate = new Date() }) => {
  // Generate week days starting from Monday of the current week
  const generateWeekDays = (date) => {
    const current = new Date(date);
    const dayOfWeek = current.getDay(); // 0 is Sunday, 1 is Monday, etc.
    
    // Calculate Monday date (adjust for JavaScript's Sunday=0 indexing)
    const mondayDiff = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;
    const monday = new Date(current);
    monday.setDate(current.getDate() + mondayDiff);
    
    // Generate an array for the week
    const weekDays = [];
    for (let i = 0; i < 7; i++) {
      const day = new Date(monday);
      day.setDate(monday.getDate() + i);
      
      const isToday = day.toDateString() === new Date().toDateString();
      
      weekDays.push({
        weekday: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'][day.getDay()],
        date: day.getDate(),
        isToday
      });
    }
    
    return weekDays;
  };
  
  const weekDays = generateWeekDays(currentDate);

  return (
    <div className="w-full max-w-2xl p-4 bg-base-100 rounded-xl shadow-md">
      {/* Top row with buttons */}
      <div className="flex items-center space-x-3 mb-5">
        <div className="bg-blue-600 text-white font-medium py-2 px-4 rounded-lg">
          Day Plan
        </div>
        <div className="border border-blue-600 text-blue-600 font-medium py-2 px-4 rounded-lg">
          {activitiesCount} Activities
        </div>
      </div>
      
      {/* Calendar row */}
      <div className="flex justify-between">
        {weekDays.map((day, index) => (
          <div 
            key={index}
            className={`flex flex-col items-center justify-center w-14 h-14 rounded-lg p-1 mx-1
              ${day.isToday ? 'bg-blue-600 text-white' : 
                index === 6 ? 'bg-ab-500 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            <span className="text-xs font-medium">{day.weekday}</span>
            <span className="text-base font-bold">{day.date}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarCard;
