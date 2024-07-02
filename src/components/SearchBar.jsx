import axios from "axios";
import { useState } from "react";
import InfoDisplay from './InfoDisplay';
import { FaSearch } from 'react-icons/fa';
import useTheme from "../context/theme";
import {  useQuery } from '@tanstack/react-query'


function SearchBar() {
    const [username, setUsername] = useState('')
    const { themeMode } = useTheme();


    // Tnanstack/react-query--------------------------------------
    const { isLoading, isError, data, refetch, error} = useQuery({
        queryKey: ['profile', username],
        queryFn: async () => {
            const response = await axios(`https://api.github.com/users/${username}`)
            return response.data
        },
        enabled: false,
    });

    const handleSearch = () => {
        setUsername(username); 
        refetch(); 
    };

    console.log('re-render')

    return (
        <section className="p-8">
            <div className="relative w-full">
                <FaSearch className="absolute left-3 top-5 text-[rgb(14,83,210)]" />
                <input
                    type="text"
                    placeholder="Search GitHub username..."
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className={`p-4 pl-10 rounded-md focus:outline-none focus:ring-2 focus:ring-opacity-50 w-full shadow-lg
                             ${themeMode === 'dark' ? 'bg-[#1d2a4a] text-white focus:ring-[#0876f9]' : 'bg-white text-black focus:ring-blue-500'}`}
                />
                <button
                    className="absolute right-2 top-2 bottom-2 bg-[#0876f9] text-white rounded-md px-4 focus:outline-none focus:ring-2 focus:ring-inherit focus:ring-opacity-50"
                    onClick={handleSearch}
                >
                    Search
                </button>
            </div>

            {isLoading && <span className={`block text-center mt-4 p-4 rounded-md ${themeMode === 'dark' ? 'bg-[#1d2a4a] text-white' : 'bg-white text-black'}`}> Loading...</span>}
            {isError && <span className={`block text-center mt-4 p-4 rounded-md ${themeMode === 'dark' ? 'bg-[#1d2a4a] text-white' : 'bg-white text-black'}`}> Error: {error.message} </span>}

            {data && <InfoDisplay profileData={data} />}
        </section>
    );
}

export default SearchBar;