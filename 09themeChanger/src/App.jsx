import Card from "./components/Card";
import ThemeBtn from "./components/ThemeBtn";
import useTheme, { ThemeProvider } from "./context/themeContext";
import { useState,useEffect } from "react";

function App() {
  const [theme, setTheme] = useState("light")
  const lightMode = ()=>{setTheme("light")}
  const darkMode = ()=>{setTheme("dark")}
	// console.log("hello"+theme);



	return (
		<>
    {/* <ThemeProvider value={{theme, setTheme, lightMode, darkMode}}> */}
			<div className='flex flex-wrap min-h-screen items-center'>
				<div className='md:w-2/6 sm:w-4/6 mx-auto'>
					<div className=' max-w-sm mx-auto flex justify-end mb-4'></div>
            <ThemeBtn/>
            <Card/>
					<div className='w-full max-w-sm mx-auto'></div>
				</div>
			</div>
      {/* </ThemeProvider> */}
		</>
	);
}

export default App;
