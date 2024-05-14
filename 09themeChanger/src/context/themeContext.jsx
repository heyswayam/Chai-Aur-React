import { createContext,useContext,useState } from "react";

export const ThemeContext = createContext();


export const ThemeProvider = ({children})=>{
    const [theme, setTheme] = useState("light")
    const darkMode=()=>{}
    const lightMode=()=>{}
    return(
        <ThemeContext.Provider value={{theme,setTheme,darkMode,lightMode}}>
            {children}
        </ThemeContext.Provider>
    )
}
export default function useTheme(){
    return useContext(ThemeContext)
}