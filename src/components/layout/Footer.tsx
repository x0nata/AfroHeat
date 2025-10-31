import {
  IconBrandInstagram,
  IconBrandTiktok,
  IconBrandLinkedin,
  IconPhone,
  IconMapPin,
} from '@tabler/icons-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full bg-background dark:bg-[hsla(300, 94%, 6%, 1.00)] text-neutral-800 dark:text-neutral-400 py-2 px-4 sm:py-3 sm:px-12 lg:px-12">
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 mb-2 sm:mb-2 text-left">
          {/* Brand Section */}
          <div>
            <div className="flex items-center justify-start mb-2">
              <img
                src="/images/logos/navtitle.webp"
                alt="AfroHeat Fitness Title"
                className="h-10 sm:h-14 w-auto max-w-full max-h-full"
              />
            </div>
            <p className="font-poppins font-semibold mb-1.5 text-xs sm:text-sm text-neutral-700 dark:text-neutral-400 max-w-md ml-0 md:ml-0 md:max-w-none">
              Powered by women, built on community, fueled by connection.
            </p>
            <div className="space-y-0.5 sm:space-y-1 font-poppins ml-0 md:ml-0 max-w-xs md:max-w-none">
              <div className="flex items-center justify-start space-x-1.5 sm:space-x-2 text-xs sm:text-sm text-neutral-700 dark:text-neutral-400 ">
                <IconMapPin className="h-2.5 w-2.5 sm:h-3.5 sm:w-3.5 " />
                <span>Wello sefer, Ethio China St, Addis Ababa</span>
              </div>
              <div className="flex items-center justify-start space-x-1.5 sm:space-x-2 text-xs sm:text-sm text-neutral-700 dark:text-neutral-400 ">
                <IconPhone className="h-2.5 w-2.5 sm:h-3.5 sm:w-3.5 " />
                <span>+251 90 424 2222</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="flex flex-col md:items-end justify-center">
            <div className="flex space-x-2 sm:space-x-3 items-center md:justify-end">
              <p className="font-poppins text-xs sm:text-sm text-neutral-700 dark:text-neutral-400 mb-4 mt-3 font-semibold text-left md:text-right">
              stay connected 
            </p>
              <a href="https://www.instagram.com/afroheatfitness?igsh=NGpsc3F0YnpydjJu" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity" aria-label="Instagram">
                <IconBrandInstagram className="h-5 w-5 sm:h-8 sm:w-8 text-[#f2a8c3]" />
              </a>
              <a href="https://vm.tiktok.com/ZMHnKdc5qF2eT-RqFic/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity" aria-label="TikTok">
                <IconBrandTiktok className="h-5 w-5 sm:h-8 sm:w-8 text-[#ff87a7]" />
              </a>
              <a href="https://www.linkedin.com/company/afroheat/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity" aria-label="LinkedIn">
                <IconBrandLinkedin className="h-5 w-5 sm:h-8 sm:w-8 text-[#8ec8ec]" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-0.5 sm:pt-1 pb-0 sm:pb-0.5 text-center">
          <p className="text-[0.6rem] sm:text-xs font-poppins text-neutral-700 dark:text-neutral-400">
            Copyright © {currentYear} AfroHeat Fitness. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
