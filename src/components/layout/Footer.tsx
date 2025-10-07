import {
  IconBrandInstagram,
  IconBrandTiktok,
  IconBrandLinkedin,
  IconPhone,
  IconMapPin,
  IconHome,
  IconBarbell,
  IconCalendar,
  IconUser,
} from '@tabler/icons-react';

const Footer: React.FC = () => {
  const navItems = [
    { name: "Home", link: "/", icon: <IconHome className="h-3 w-3 sm:h-5 sm:w-5" /> },
    { name: "Services", link: "/services", icon: <IconBarbell className="h-3 w-3 sm:h-5 sm:w-5" /> },
    { name: "Events", link: "/events", icon: <IconCalendar className="h-3 w-3 sm:h-5 sm:w-5" /> },
    { name: "About", link: "/about", icon: <IconUser className="h-3 w-3 sm:h-5 sm:w-5" /> },
    { name: "Contact", link: "/contact", icon: <IconPhone className="h-3 w-3 sm:h-5 sm:w-5" /> },
  ];

  return (
    <footer className="relative w-full bg-background dark:bg-[hsla(300, 94%, 6%, 1.00)] text-black-800 py-6 px-6 sm:py-10 sm:px-20 lg:px-20">
      {/* Mobile Background Pattern */}
      <div
        style={{
          backgroundImage: "url('/images/footer pattern.webp')",
          backgroundSize: '70%',
          backgroundRepeat: 'repeat'
        }}
        className="absolute inset-0 w-full h-full opacity-10 dark:opacity-5 pointer-events-none block md:hidden"
        aria-hidden="true"
      />
      {/* Desktop Background Pattern */}
      <div
        style={{
          backgroundImage: "url('/images/footer pattern.webp')",
          backgroundSize: '40%',
          backgroundRepeat: 'repeat'
        }}
        className="absolute inset-0 w-full h-full opacity-10 dark:opacity-5 pointer-events-none hidden md:block"
        aria-hidden="true"
      />

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-8 mb-8 sm:mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center  mb-6">
              <img
                src="/images/logos/navtitle.webp"
                alt="AfroHeat Fitness Title"
                className="h-14 sm:h-23 w-auto max-w-full max-h-full"
              />
            </div>
            <p className="font-poppins font-bold mb-6 text-sm sm:text-base text-black-600 max-w-md">
              Powered by women, built on community, fueled by connection.
            </p>
            <div className="space-y-2 sm:space-y-3 font-poppins">
              <div className="flex items-center space-x-2 sm:space-x-3 text-sm sm:text-base text-black-1000 ">
                <IconMapPin className="h-3 w-3 sm:h-5 sm:w-5 " />
                <span>Wello sefer, Ethio China St, Addis Ababa</span>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3 text-sm sm:text-base text-black-1000 ">
                <IconPhone className="h-3 w-3 sm:h-5 sm:w-5 " />
                <span>+251 90 424 2222</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-industry text-lg sm:text-xl uppercase mb-6 mt-5 text-black-1000 font-bold">Quick Links</h3>
            <ul className="space-y-2 sm:space-y-3 font-poppins">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.link}
                    className="flex items-center space-x-1.5 sm:space-x-2 text-sm sm:text-base text-black-700 hover:text-[#fab313] transition-colors "
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <p className="font-poppins text-sm sm:text-base text-black-600 mb-2 mt-5 font-bold">
              Stay connected with our fitness community
            </p>
            <div className="flex space-x-3 sm:space-x-4 mt-5 ml-13">
              <a href="https://www.instagram.com/afroheatfitness?igsh=NGpsc3F0YnpydjJu" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity" aria-label="Instagram">
                <IconBrandInstagram className="h-7 w-7 sm:h-12 sm:w-12 text-[#E1306C]" />
              </a>
              <a href="https://vm.tiktok.com/ZMHnKdc5qF2eT-RqFic/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity" aria-label="TikTok">
                <IconBrandTiktok className="h-7 w-7 sm:h-12 sm:w-12 text-[#FF0050]" />
              </a>
              <a href="https://www.linkedin.com/company/afroheat/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity" aria-label="LinkedIn">
                <IconBrandLinkedin className="h-7 w-7 sm:h-12 sm:w-12 text-[#0077B5]" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-1.5 sm:pt-2 pb-0.5 sm:pb-1 text-center">
          <p className="text-xs sm:text-sm font-poppins text-black-600">
            Copyright © 2025 AfroHeat Fitness. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
