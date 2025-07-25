import useTheme from "../Hooks/useTheme";
import './Header.css'

const Header = () => {
  const [isDark, setIsDark] = useTheme("true");

  if(isDark){
    document.body.classList.add('dark')
  }else{
    document.body.classList.remove('dark')
  }

  return (
    <header className={`header-container ${isDark ? "dark" : ""}`}>
      <div className="header-content">
        <h2 className="title">
          <a href="/">Where in the world?</a>
        </h2>
        <p
          className="theme-changer"
          onClick={() => {
            setIsDark(!isDark);
            localStorage.setItem("isDarkMode", !isDark);
          }}
        >
          <i className={`fa-regular fa-${isDark ? "sun" : "moon"}`} />
          &nbsp;&nbsp;{isDark ? "Light" : "Dark"} Mode
        </p>
        
      </div>
    </header>
  );
};

export default Header;

// Header.jsx
// import { useEffect, useState } from "react";
// import { Link } from "react-router"; // Maan rahe hain ki aap react-router-dom use kar rahe hain

// const Header = () => {
//   // Function to get the initial theme
//   const getInitialTheme = () => {
//     // Pehle localStorage check karein (client-side par hi chalega)
//     if (typeof window !== 'undefined') {
//       const savedTheme = localStorage.getItem("theme");
//       if (savedTheme) {
//         return savedTheme; // 'dark' ya 'light'
//       }
//       // Agar localStorage mein kuch nahin hai, toh system preference check kar sakte hain (optional)
//       // if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
//       //   return "dark";
//       // }
//     }
//     // Fallback theme agar kuch na mile (ya server-side rendering par)
//     return "dark"; // Aapka default theme
//   };

//   const [theme, setTheme] = useState(getInitialTheme);

//   useEffect(() => {
//     // Yeh effect client-side par hi body className aur localStorage update karega
//     if (typeof window !== 'undefined') {
//       document.body.classList.remove("dark", "light"); // Pehle ki classes hata dein
//       document.body.classList.add(theme); // Current theme className lagayein ('dark' ya 'light')
//       localStorage.setItem("theme", theme); // Theme ko localStorage mein save karein
//     }
//   }, [theme]); // Yeh tab chalega jab 'theme' state badlegi

//   const handleTheme = () => {
//     setTheme(prevTheme => (prevTheme === "dark" ? "light" : "dark"));
//   };

//   return (
//     <header className="header-container">
//       <div className="header-content">
//         <h2 className="title">
//           {/* Link ka 'to' prop check karein, React SPA mein '/index.html' route aam taur par nahin hota */}
//           <Link to="/">Where in the world?</Link>
//         </h2>
//         {theme === "light" ? (
//           <p onClick={handleTheme} className="theme-change" style={{ cursor: 'pointer' }}>
//             <i className="fa-solid fa-sun"></i>&nbsp;&nbsp;Light Mode
//           </p>
//         ) : (
//           <p onClick={handleTheme} className="theme-change" style={{ cursor: 'pointer' }}>
//             <i className="fa-regular fa-moon"></i>&nbsp;&nbsp;Dark Mode
//           </p>
//         )}
//       </div>
//     </header>
//   );
// };

// export default Header;
