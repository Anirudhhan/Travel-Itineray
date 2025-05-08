import React from 'react';
import { useAuthStore } from '../store/useAuthStore';
import { BookMarked, Clock, MoveUpRight, Users } from 'lucide-react';
import tokyoImg from '../assets/tokyo.png';

export default function Dashboard() {
    const { user } = useAuthStore();

    return (
        <div className='w-full h-full flex justify-center min-h-screen bg-amber-300 p-2'>
            <div className="w-full h-full max-w-7xl px-6 py-8 md:px-10 md:py-8 bg-base-100 rounded-lg">
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
                        <div className="flex items-center backdrop-blur-md justify-between">
                            <div className='flex items-center justify-between'>
                                <Clock className='text-lime-300' size={24} />
                                <div className='ml-2'>
                                    <p className='text-white font-bold'>8 days</p>
                                    <p className='text-white mt-0'>Durations</p>
                                </div>
                            </div>

                            <div className='flex items-center justify-between'>
                                <Users className='text-lime-300' size={24} />
                                <div className='ml-2'>
                                    <p className='text-white font-bold'>4 (2M,2F)</p>
                                    <p className='text-white mt-0'>Group Size</p>
                                </div>
                            </div>

                            <div className='flex items-center justify-between'>
                                <BookMarked className='text-lime-300' size={24} />
                                <div className='ml-2'>
                                    <p className='text-white font-bold'>14</p>
                                    <p className='text-white mt-0'>Activities</p>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>

                    <div className='flex justify-between items-center px-5 mt-8'>
                        <h1 className='text-2xl font-semibold '>Accomodation</h1>
                        <p className='underline text-blue-600 text-sm font-bold'>See all</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
