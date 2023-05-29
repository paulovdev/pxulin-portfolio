import React, { useState } from 'react';
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';
import { ButtonTheme } from '../Global/Button'


function ThemeChange() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    function changeTheme() {
        setIsDarkMode(!isDarkMode);
        document.documentElement.classList.toggle('dark');
        document.documentElement.classList.toggle('light');
    }

    return (
        <>
        <ButtonTheme onClick={changeTheme}>
            {isDarkMode ? (
                <BsFillMoonFill size={20}
                    title="Alternar para tema claro"
                    aria-label="Alternar para tema claro"
                />
            ) : (
                <BsFillSunFill size={20}
                    title="Alternar para tema escuro"
                    aria-label="Alternar para tema escuro"
                />
            )}
    
        </ButtonTheme >
   
    </>
    );
}

export default ThemeChange;
