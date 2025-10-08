import {
  IconHome,
  IconBarbell,
  IconCalendar,
  IconPhone,
  IconSun,
  IconMoon,
  IconUser
} from '@tabler/icons-react';
import { Link, useLocation } from 'react-router-dom';
import { useApp } from '@/context/AppContext';
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const location = useLocation();
  const { state, toggleDarkMode, toggleNavigation } = useApp();
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    console.log('Header theme:', state.isDarkMode ? 'dark' : 'light');
    const button = document.querySelector('a[href="/services"]') as HTMLElement;
    if (button) {
      const styles = window.getComputedStyle(button);
      console.log('Become an Instructor button - bg:', styles.backgroundColor, 'text:', styles.color);
    }
  }, [state.isDarkMode]);

 const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-muted-foreground" />,
    },
    {
      name: "Services",
      link: "/services",
      icon: <IconBarbell className="h-4 w-4 text-muted-foreground" />,
    },
    {
      name: "Events",
      link: "/events",
      icon: <IconCalendar className="h-4 w-4 text-muted-foreground" />,
    },
    {
      name: "AboutUs",
      link: "/about",
      icon: <IconUser className="h-4 w-4 text-muted-foreground" />,
    },
    {
      name: "Contact",
      link: "/contact",
      icon: <IconPhone className="h-4 w-4 text-muted-foreground" />,
    },
 ];

  // Handle scroll to show/hide header when scrolling up/down
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isScrollingUp = prevScrollPos > currentScrollPos && currentScrollPos > 50;
      
      setIsVisible(isScrollingUp || currentScrollPos < 50);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'} bg-background/80 backdrop-blur-lg border-b border-border/20`}>
        <div className="w-full px-4 sm:px-6 lg:px-8">
                   <div className="relative flex items-center justify-between py-3 sm:py-4 md:py-5">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center space-x-2">
                <img
                                   src={state.isDarkMode ? "images/logos/afroheat logo black.webp" : "/images/logos/afroheat purple.webp"}
                                   alt="AfroHeat Fitness Logo"
                                   className="h-14 w-auto max-w-full max-h-full sm:h-18 md:h-20"
                                 />
                                 <img
                                   src="/images/logos/navtitle.webp"
                                   alt="AfroHeat Fitness Title"
                                   className="h-12 w-auto max-w-full max-h-full sm:h-14 md:h-16"
                                 />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center space-x-8">
                           {navItems.map((item, index) => (
                             <Link
                               key={index}
                               to={item.link}
                               className={`transition-colors duration-200 font-poppins font-medium ${
                                 location.pathname === item.link
                                   ? 'text-primary font-bold'
                                   : 'text-black dark:text-foreground hover:text-foreground'
                               }`}
                             >
                               {item.name}
                             </Link>
                           ))}
                         </nav>

            {/* Theme Toggle and CTA Button */}
            <div className="hidden md:flex flex-shrink-0 items-center space-x-4">
              <button
                               onClick={toggleDarkMode}
                               className="p-2.5 rounded-lg bg-card text-foreground hover:bg-muted transition-colors"
                               aria-label="Toggle theme"
                             >
                               {state.isDarkMode ? <IconSun className="h-6 w-6" /> : <IconMoon className="h-6 w-6" />}
                             </button>
            </div>


            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-2">
                           <button
                             onClick={toggleDarkMode}
                             className="p-2 rounded-lg bg-card text-foreground hover:bg-muted transition-colors"
                             aria-label="Toggle theme"
                           >
                             {state.isDarkMode ? <IconSun className="h-5 w-5" /> : <IconMoon className="h-5 w-5" />}
                           </button>
                           <button
                             onClick={toggleNavigation}
                             className="p-2 rounded-lg bg-card text-foreground hover:bg-muted transition-colors"
                             aria-label="Open navigation menu"
                           >
                             <svg className="w-6 h-6 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                             </svg>
                           </button>
                         </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <div className={`fixed inset-0 z-50 md:hidden transition-opacity duration-300 ${
          state.isNavigationOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}>
          {/* Backdrop overlay */}
          <div
            className="absolute inset-0 bg-black/20"
            onClick={toggleNavigation}
          />
          
          {/* Sidebar container */}
          <div className={`absolute top-0 right-0 h-screen w-96 transform transition-transform duration-300 bg-background/95 backdrop-blur-lg border-l border-border/20 shadow-2xl ${
            state.isNavigationOpen ? 'translate-x-0' : 'translate-x-full'
          }`}>
            <div className="flex flex-col h-full">
              {/* Header with close button */}
              <div className="flex justify-between items-center p-7 border-b border-border/20">
                               <h2 className="text-2xl font-poppins font-bold text-foreground">Menu</h2>
                               <button
                                 onClick={toggleNavigation}
                                 className="p-3 rounded-lg bg-card text-foreground hover:bg-muted transition-colors"
                                 aria-label="Close navigation menu"
                               >
                                 <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                 </svg>
                               </button>
              </div>

              {/* Navigation Items */}
              <nav className="flex-1 p-6">
                <div className="space-y-4">
                  {navItems.map((item, index) => (
                    <Link
                                           key={index}
                                           to={item.link}
                                           onClick={toggleNavigation}
                                           className={`flex items-center space-x-4 p-5 rounded-lg transition-all duration-200 ${
                                             location.pathname === item.link
                                               ? 'bg-primary text-primary-foreground'
                                               : 'bg-card text-foreground hover:bg-muted'
                                           }`}
                                         >
                                           {React.cloneElement(item.icon, { className: "h-5 w-5" })}
                                           <span className="font-poppins font-medium text-lg">{item.name}</span>
                                         </Link>
                  ))}
                </div>
              </nav>

              {/* Footer with theme toggle and CTA */}
              <div className="p-7 border-t border-border/20">
                               <div className="space-y-5">
                                 <button
                                   onClick={toggleDarkMode}
                                   className="w-full flex items-center justify-center p-4 rounded-lg bg-card text-foreground hover:bg-muted transition-colors"
                                 >
                                   {state.isDarkMode ? (
                                     <>
                                       <IconSun className="h-6 w-6 mr-3" />
                                       <span className="font-poppins text-lg">Light Mode</span>
                                     </>
                                   ) : (
                                     <>
                                       <IconMoon className="h-6 w-6 mr-3" />
                                       <span className="font-poppins text-lg">Dark Mode</span>
                                     </>
                                   )}
                                 </button>
                               </div>
                             </div>
            </div>
          </div>
        </div>
      </header>
      
    </>
  );
};

export default Header;