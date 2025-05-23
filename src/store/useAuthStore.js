import { create } from "zustand";

export const useAuthStore = create((set) => ({
    destination: null,
    duration: null,
    travelType: null,
    user: 'Anirudhhan',
    darkmode: false,

    setDarkMode: (darkmode) => set({ darkmode }),

    fillDetails: (data) => {
        set({ destination: data.destination });
        set({ duration: data.duration });
        set({ travelType: data.travelType });
        console.log("data", data);
    },

}));