import { assets } from "@/assets/assets"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"

const Navbar = () => {
  const sideMenuRef = useRef()
  const [isScroll, setIsScroll] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)

  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(100%)"
  }

  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(0%)"
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScroll(true)
      } else {
        setIsScroll(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleTheme = () => {
    setIsDarkMode(prev => {
      const newMode = !prev
      if (newMode) {
        document.documentElement.classList.add('dark')
        localStorage.theme = 'dark'
      } else {
        document.documentElement.classList.remove('dark')
        localStorage.theme = 'light'
      }
      return newMode
    })
  }

  return (
    <>
      <div className={`fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] transition-transform duration-500 ${isScroll ? 'translate-y-0 bg-white shadow-sm dark:bg-darkTheme dark:shadow-white/20' : ''}`}>
        <div className="w-full px-4 sm:px-6 lg:px-[12%] py-4 flex items-center justify-between text-lg">
          <Image 
            src={assets.logo} 
            alt="Logo" 
            className="w-20 sm:w-28 cursor-pointer mr-14 dark:hidden"
          />
          <Image 
            src={assets.logo_dark} 
            alt="Logo" 
            className="w-20 sm:w-28 cursor-pointer mr-14 hidden dark:block"
          />
          
          <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-6 lg:px-12 py-3 bg-white shadow-sm dark:border dark:border-white/50 dark:bg-transparent">
            <li><a className="font-Ovo hover:text-blue-500 transition-colors duration-300" href="#top">Home</a></li>
            <li><a className="font-Ovo hover:text-blue-500 transition-colors duration-300" href="#about">About me</a></li>
            <li><a className="font-Ovo hover:text-blue-500 transition-colors duration-300" href="#services">Services</a></li>
            <li><a className="font-Ovo hover:text-blue-500 transition-colors duration-300" href="#work">My Work</a></li>
            <li><a className="font-Ovo hover:text-blue-500 transition-colors duration-300" href="#contact">Contact me</a></li>
          </ul>
          
          <div className="flex items-center gap-4">
            <button onClick={toggleTheme} className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform">
              {isDarkMode ? (
                <Image src={assets.sun_icon} alt="Light mode" className="w-6 h-6" />
              ) : (
                <Image src={assets.moon_icon} alt="Dark mode" className="w-6 h-6" />
              )}
            </button>
            
            <button 
              className="block md:hidden ml-3"
              onClick={openMenu}
            >
              <Image 
                src={assets.menu_black} 
                alt="Menu" 
                className="w-6 h-6 cursor-pointer dark:hidden"
              />
              <Image 
                src={assets.menu_white} 
                alt="Menu" 
                className="w-6 h-6 cursor-pointer hidden dark:block"
              />
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div 
        ref={sideMenuRef}
        className="fixed top-0 right-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transform translate-x-full transition-transform duration-500 dark:bg-darkHover md:hidden"
      >
        <div className="flex justify-end p-6">
          <Image 
            src={assets.close_black} 
            alt="Close" 
            className="w-5 cursor-pointer dark:hidden"
            onClick={closeMenu}
          />
          <Image 
            src={assets.close_white} 
            alt="Close" 
            className="w-5 cursor-pointer hidden dark:block"
            onClick={closeMenu}
          />
        </div>
        
        <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-Ovo">
          <a onClick={closeMenu} className="px-4 py-2 rounded-lg inline-block hover:bg-white dark:hover:bg-darkTheme transition-colors duration-300 w-full text-center" href="#top">Home</a>
          <a onClick={closeMenu} className="px-4 py-2 rounded-lg inline-block hover:bg-white dark:hover:bg-darkTheme transition-colors duration-300 w-full text-center" href="#about">About me</a>
          <a onClick={closeMenu} className="px-4 py-2 rounded-lg inline-block hover:bg-white dark:hover:bg-darkTheme transition-colors duration-300 w-full text-center" href="#services">Services</a>
          <a onClick={closeMenu} className="px-4 py-2 rounded-lg inline-block hover:bg-white dark:hover:bg-darkTheme transition-colors duration-300 w-full text-center" href="#work">My Work</a>
          <a onClick={closeMenu} className="px-4 py-2 rounded-lg inline-block hover:bg-white dark:hover:bg-darkTheme transition-colors duration-300 w-full text-center" href="#contact">Contact me</a>
        </ul>
      </div>
    </>
  )
}

export default Navbar
