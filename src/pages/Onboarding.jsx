import { MapPin, Calendar, User, Users, Moon, Sun } from "lucide-react";
import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function Onboarding() {
  const [travelType, setTravelType] = useState("solo");
  const [destination, setDestination] = useState("");
  const [duration, setDuration] = useState("");
  const { fillDetails } = useAuthStore();
  const navigate = useNavigate();
  const { user } = useAuthStore();
  const { setDarkMode, darkmode } = useAuthStore();

  const changeDarkMode = () => {
    setDarkMode(!darkmode);
  };

  const handleSubmit = () => {
    if (!destination || !duration || !travelType) {
      toast.error("Please fill all the fields!");
      return;
    }

    const data = {
      destination,
      duration,
      travelType,
    };

    fillDetails(data);
    navigate("/dashboard");
  };

  return (
    <div className="flex h-full justify-center sm:items-center min-h-screen bg-base-100 text-base">
      <div className="w-full h-full max-w-2xl px-4 py-6 md:px-6 md:py-2 bg-base-100 rounded-lg">
        <div className="flex justify-end">
          <button
            onClick={changeDarkMode}
            className="p-2 rounded-full bg-base-300 flex"
          >
            <p className="mr-2">DarkMode</p>
            {darkmode ? (
              <Sun size={20} className="text-yellow-400" />
            ) : (
              <Moon size={20} className="text-gray-800" />
            )}
          </button>
        </div>
        {/* Header */}
        <h1 className="text-2xl font-bold mb-1">
          Plan Your Journey, Your Way!
        </h1>
        <p className="text-sm text-base-400 mb-6">
          Let's create your personalised travel experience
        </p>

        {/* Destinatiosn Input */}
        <div className="mb-5">
          <label className="block mb-2">Where would you like to go?</label>
          <div className="relative">
            <MapPin
              size={18}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-base-400"
            />
            <input
              type="text"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              placeholder="Enter Destination"
              className="w-full py-3 pl-10 pr-3 bg-base-800 border border-solid border-gray-400 rounded-md text-base placeholder:text-gray-400"
            />
          </div>
        </div>

        {/* Duration Selection */}
        <div className="mb-5">
          <label className="block mb-2">How long will you stay?</label>
          <div className="relative">
            <Calendar
              size={18}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-base-400"
            />
            <select
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              className="w-full py-3 pl-10 pr-8 bg-base-800 border border-solid border-gray-400 rounded-md appearance-none text-base"
            >
              <option value="">Select Duration</option>
              <option>1-3 days</option>
              <option>4-7 days</option>
              <option>1-2 weeks</option>
              <option>More than 2 weeks</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <svg
                className="h-4 w-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Travel Type Selection */}
        <div className="mb-6">
          <label className="block mb-3">Who are you traveling with?</label>
          <div className="grid grid-cols-2 gap-3">
            <button
              className={`flex items-center justify-center py-3 px-4 border border-solid border-gray-400 cursor-pointer rounded-md ${
                travelType === "solo" ? "bg-black/40" : "bg-base-800"
              }`}
              onClick={() => setTravelType("solo")}
            >
              <User size={18} className="mr-2" />
              <span>Solo</span>
            </button>

            <button
              className={`flex items-center justify-center py-3 px-4 border border-solid border-gray-400 cursor-pointer rounded-md ${
                travelType === "couple" ? "bg-black/40" : "bg-base-800"
              }`}
              onClick={() => setTravelType("couple")}
            >
              <Users size={18} className="mr-2" />
              <span>Couple</span>
            </button>

            <button
              className={`flex items-center justify-center py-3 px-4 border border-solid border-gray-400 cursor-pointer rounded-md ${
                travelType === "family" ? "bg-black/40" : "bg-base-800"
              }`}
              onClick={() => setTravelType("family")}
            >
              <div className="flex mr-2">
                <Users size={16} />
                <User size={12} className="-ml-1 mt-1" />
              </div>
              <span>Family</span>
            </button>

            <button
              className={`flex items-center justify-center py-3 px-4 border border-solid border-gray-400 cursor-pointer rounded-md ${
                travelType === "friends" ? "bg-black/40" : "bg-base-800"
              }`}
              onClick={() => setTravelType("friends")}
            >
              <Users size={18} className="mr-2" />
              <span>Friends</span>
            </button>
          </div>
        </div>

        {/* Continue Button */}
        <button
          onClick={handleSubmit}
          style={{ backgroundColor: "#3643fb" }}
          className="w-full py-3 text-white rounded-md cursor-pointer font-medium mt-20"
        >
          Continue
        </button>
      </div>
    </div>
  );
}
