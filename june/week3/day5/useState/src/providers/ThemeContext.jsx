import { createContext, useState } from "react";

const [theme, setTheme] = useState('light')

const ThemeConetext = createContext(theme)

export const ThemeProvider = () => {
    
}