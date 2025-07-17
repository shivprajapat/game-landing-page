import { IconAppStore, IconGooglePlay } from "@/assets/images";
import { footerLinks, socialLinks } from "@/constants";
import React, { useEffect, useRef, useState } from "react";
import { DownloadButton, MobileFooter } from ".";
import { useIsMobile } from "@/hooks/useIsMobile";

const Footer = () => {
  const isMobile = useIsMobile(680);
  const footerRef = useRef(null);
  const [showDownloadButton, setShowDownloadButton] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowDownloadButton(entry.isIntersecting);
      },
      {
        threshold: 0.1, // Trigger when 10% of footer is visible
      }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) observer.unobserve(footerRef.current);
    };
  }, []);
  return (
    <footer className="my-4 md:my-9" ref={footerRef}>
      <div className="container">
        {!isMobile && (
          <div className="mb-5">
            {footerLinks.map((section, index) => (
              <div
                key={section.heading}
                className={index < footerLinks.length - 1 && "mb-3 md:mb-5"}
              >
                <h3 className="text-xl md:text-2xl font-semibold text-[#ffca37] mb-2">
                  {section.heading}
                </h3>
                <ul className="flex items-start flex-wrap gap-x-5 gap-y-2">
                  {section.links.map((link, index) => (
                    <li key={link.id}>
                      <a
                        className="hover:text-[#ffca37] transition-all duration-150"
                        href={link.href}
                        target={link.target || "_self"}
                      >
                        {link.title}{" "}
                        {index < section.links.length - 1 && (
                          <span className="hidden sm:inline-block ml-2 !text-white">
                            |
                          </span>
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
        <div className="mb-6 md:mb-8 flex-between flex-wrap">
          <div className="max-w-md w-full mb-4 lg:mb-0">
            <h5 className="text-xl md:text-2xl font-semibold text-[#ffca37] mb-2 md:mb-6">
              Contact us
            </h5>
            <div>
              <p class="text-white stol-b text-medium-gray text-15 line-height-30">
                #15A, 4th Floor, City Vista, Tower A, Fountain Road, Kharadi,
                Pune, MH - 411014.
                <br />
                <span className="mr-1.5">Mail:</span>
                <a href="mailto:support@example.com" class="text-[#929292]">
                  support@example.com
                </a>
                <br /> <span className="mr-1.5">Call:</span>
                <a href="tel:123456789" class="text-[#929292]">
                  +91 12345-67890
                </a>
              </p>
            </div>
          </div>
          {isMobile && <MobileFooter />}
          <div>
            <h5 className="text-xl md:text-2xl font-semibold text-[#ffca37] mb-2 md:mb-6">
              Follow Us
            </h5>
            <div className="flex items-start gap-3.5 md:gap-5 flex-wrap">
              {socialLinks.map((social, index) => (
                <a
                  href={social.href}
                  key={index}
                  target="_blank"
                  style={{ backgroundColor: social.bgColor }}
                  className="size-10 p-2.5 rounded transition-all duration-500 hover:rounded-[50%]"
                >
                  <img
                    src={social.icon}
                    alt={social.href}
                    width={40}
                    height={40}
                  />
                </a>
              ))}
              {/* <div className="gap-4 flex items-center mt-2 sm:mt-0">
                <a href="#" target="_blank" className="hover:animate-pulse">
                  <img
                    src={IconGooglePlay}
                    alt="google-play"
                    width={130}
                    height={40}
                    className="bg-white w-36 p-1 rounded"
                  />
                </a>
                <a href="#" target="_blank" className="hover:animate-pulse">
                  <img
                    src={IconAppStore}
                    alt="app-store"
                    width={130}
                    height={40}
                    className="bg-white w-36 p-1 rounded"
                  />
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <div className="mb-2 md:mb-4 border-t border-gray-600 pt-2">
        <marquee
          scrollamount="10"
          behavior="scroll"
          loop=""
          scrolldelay="0"
          width="100%"
          direction="left"
        >
          <span className="text-sm">
            This game involves an element of financial risk and may be
            addictive. Please play responsibly and at your risk. For Ages 18+
            Only.
          </span>
        </marquee>
      </div>
      <div className="container">
        <div className="flex items-center gap-2 sm:justify-between justify-center text-center flex-wrap text-base text-[#929292] font-urbanist font-normal">
          <p className="sm:text-center">
            © {new Date().getFullYear()},
            <a
              href="https://ludoplayers.com"
              target="_blank"
              className="text-[#ffca37] px-1"
            >
              Ludo Technologies Private Limited{" "}
            </a>
            | All Rights Reserved.
          </p>
          <p className="sm:text-center">Privacy Policy | Terms </p>
        </div>
      </div>
      {showDownloadButton && <DownloadButton />}
    </footer>
  );
};

export default Footer;
