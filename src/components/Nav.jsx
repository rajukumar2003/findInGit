import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import useTheme from '../context/theme';

function Nav() {
    const { themeMode, lightTheme, darkTheme } = useTheme();

    const toggleTheme = (e) => {
        const darkModeStatus = e.target.checked;
        if (darkModeStatus) {
            darkTheme();
        } else {
            lightTheme();
        }
    };

    return (
        <section className="mt-6 px-10 flex justify-between">
            <h1 className='text-3xl font-bold'>devfinder</h1>
            <div className='flex items-center space-x-2'>
                {themeMode === 'dark' ? <div>Light</div> : <div>Dark </div>} 
                <input
                    type="checkbox"
                    className="w-14 h-7 rounded-full p-1 absolute cursor-pointer opacity-0"
                    checked={themeMode === 'dark'}
                    onChange={toggleTheme}
                />
                {themeMode === 'dark' ? <FaSun className='text-white' /> : <FaMoon className='text-gray-700' />}
            </div>
        </section>
    );
}

export default Nav;
