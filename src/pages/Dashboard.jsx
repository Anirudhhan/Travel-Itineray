import React from 'react';
import { useAuthStore } from '../store/useAuthStore';
import { BookMarked, Clock, Footprints, MoveUpRight, Users, Moon, Sun } from 'lucide-react';
import tokyoImg from '../assets/tokyo.png';
import accommodation from '../assets/Accommodation1.png';
import accommodation2 from '../assets/Accommodation2.png';
import activites1 from '../assets/activities1.png';
import activites2 from '../assets/activities2.png';
import activites3 from '../assets/activities3.png';
import AccommodationCard from '../components/AccommodationCard';
import ActivitiesCard from '../components/ActivitiesCard';
import CalendarCard from '../components/CalendarCard';
import FlightCard from '../components/FlightCard';

export default function Dashboard() {
    const { user } = useAuthStore();
    const { setDarkMode, darkmode } = useAuthStore();

    const changeDarkMode = () => {
        setDarkMode(!darkmode);
    };
    

    return (
        <div className='w-full h-full flex justify-center min-h-screen bg-base sm:bg-base-300 p-2'>
            <div className="w-full h-full max- px-6 py-8 md:px-10 md:py-8 bg-base-300 rounded-lg ">
            <div className='flex justify-end'>
                <button onClick={changeDarkMode} className="p-2 rounded-full bg-base-300 flex">
                    <p className='mr-2'>DarkMode</p>
                    {darkmode ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-gray-800" />}
                </button>
            </div>
                <div className="flex items-center justify-between h-full w-full">
                    <div>
                        <h1 className='font-bold text-2xl'>Hello, {user}</h1>
                        <p className='font-medium text-sm'>Ready for the trip?</p>
                    </div>
                    <h1 className='bg-amber-500 w-10 h-10 rounded-full text-2xl text-white flex items-center justify-center'>
                        {user.charAt(0)}
                    </h1>
                </div>

                <p className='font-bold mt-5'>Your Upcoming Trip</p>

                <div className="relative w-full h-full mx-auto mt-5">
                {/* Image container */}
                    <div className="relative h-96 sm:h-126 w-full">
                        <img
                        src={tokyoImg}
                        alt="Tokyo"
                        className="h-full w-full object-cover rounded-xl"
                        />
                        
                        {/* Text overlay container positioned absolutely on top of image */}
                        <div className="absolute inset-0 p-6 flex flex-col justify-between h-10%">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h1 className="font-bold text-6xl text-white drop-shadow-lg">Tokyo</h1>
                                    <p className="font-bold text-sm text-white drop-shadow-md pt-2">27.01.2025 - 02.02.2025</p>
                                </div>
                                <MoveUpRight className="text-white cursor-pointer" size={24} />
                            </div>
                            
                            {/* Full width bottom blur with indicators */}
                            <div className="absolute bottom-0 left-0 right-0 backdrop-blur-md bg-black/30 p-4">
                                <div className="flex items-center justify-between w-full">
                                    <div className='flex items-center'>
                                        <Clock className='text-lime-300 flex-shrink-0' size={20} />
                                        <div className='ml-2'>
                                            <p className='text-white font-medium text-xs sm:text-sm'>8 days</p>
                                            <p className='text-white text-xs'>Durations</p>
                                        </div>
                                    </div>

                                    <div className='flex items-center'>
                                        <Users className='text-lime-300 flex-shrink-0' size={20} />
                                        <div className='ml-2'>
                                            <p className='text-white font-medium text-xs sm:text-sm'>4 (2M,2F)</p>
                                            <p className='text-white text-xs'>Group Size</p>
                                        </div>
                                    </div>

                                    <div className='flex items-center'>
                                        <BookMarked className='text-lime-300 flex-shrink-0' size={20} />
                                        <div className='ml-2'>
                                            <p className='text-white font-medium text-xs sm:text-sm'>14</p>
                                            <p className='text-white text-xs'>Activities</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-between items-center px-5 mt-8'>

                     <FlightCard
                      date="26.01.2025"
                      time="10:50 am"
                      departureCode="DEL"
                      departureCity="Delhi"
                      departureCountry="India"
                      arrivalCode="NRT"
                      arrivalCity="Narita"
                      arrivalCountry="Tokyo"
                    />
                    </div>


                    <div className='flex justify-between items-center px-5 mt-8'>
                        <h1 className='text-lg sm:text-2xl font-semibold'>Accommodation</h1>
                        <p className='underline text-blue-600 text-sm font-bold cursor-pointer'>See all</p>
                    </div>

                    <div className="mt-5 overflow-x-auto">
                        <div className="flex gap-4 min-w-max sm:min-w-0">
                            <AccommodationCard 
                            name="Shinagawa Prince Hotel"
                            image={accommodation}
                            checkIn="26.01.2025, 11:15 pm"
                            checkOut="28.01.2025, 11:15 am"
                            nights="2"
                            rating="4.0"
                            isConfirmed={true}
                            />

                            <AccommodationCard 
                            name="Mercure Tokyo Hotel"
                            image={accommodation2}
                            checkIn="28.01.2025, 6:00 pm"
                            checkOut="30.01.2025, 11:15 am"
                            nights="2"
                            rating="4.1"
                            isConfirmed={false}
                            />

                            <AccommodationCard 
                            name="Shinagawa Prince Hotel"
                            image={accommodation}
                            checkIn="26.01.2025, 11:15 pm"
                            checkOut="28.01.2025, 11:15 am"
                            nights="2"
                            rating="4.0"
                            isConfirmed={true}
                            />

                            <AccommodationCard 
                            name="Shinagawa Prince Hotel"
                            image={accommodation}
                            checkIn="26.01.2025, 11:15 pm"
                            checkOut="28.01.2025, 11:15 am"
                            nights="2"
                            rating="4.0"
                            isConfirmed={true}
                            />
                            
                        </div>
                    </div>

                    <div className='flex justify-between items-center px-5 mt-8'>
                        <h1 className='text-lg sm:text-2xl font-semibold'>Activities</h1>
                        <p className='underline text-blue-600 text-sm font-bold cursor-pointer'>See all</p>
                    </div>

                    {/* //bcdcsdv */}

                    <div className='flex justify-center w-full h-full items-center px-5 mt-5'>
                        <CalendarCard activitiesCount={14} />
                    </div>

                    <div className='flex items-center px-5 mt-8'>
                        <p className='text-sm sm:text-lg font-semibold bg-blue-700 px-2 text-white rounded-lg'>Day 1  27.01.2025</p>
                        <Footprints className='ml-8 text-blue-700' />
                        <p className='text-lg font-medium cursor-pointer text-blue-700'>3 Activities</p>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-4 mt-5">
                            <ActivitiesCard
                            title="Senso-ji Temple & Nakamise Shopping Street Senso-ji"
                            image={activites1}
                            timing="8:15 am Morning"
                            duration="3 hours"
                            pickupLocation="From Hotel"
                            />

                            <ActivitiesCard
                            title="Tokyo Sky Tree"
                            image={activites2}
                            timing="1:00 pm Afternoon"
                            duration="3 hours"
                            pickupLocation="From Nakamise Street"
                            />


                            <ActivitiesCard
                            title="Kimono Wearing"
                            image={activites3}
                            timing="Anytime before 8:00pm "
                            duration="1-2 hours"
                            pickupLocation="From Hotel"
                            />

                            <ActivitiesCard
                            title="Tokyo Sky Tree"
                            image={activites2}
                            timing="1:00 pm Afternoon"
                            duration="3 hours"
                            pickupLocation="From Nakamise Street"
                            />                            
                    </div>

                </div>
            </div>
        </div>
    );
}