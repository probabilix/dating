// src/components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  // Using simple initials for social media placeholders
  const socialLinks = [
    { name: 'Instagram', icon: 'i' },
    { name: 'TikTok', icon: 't' },
    { name: 'YouTube', icon: 'y' },
    { name: 'Facebook', icon: 'f' },
  ];

  const linkColumns = [
    {
      title: 'Legal',
      links: ['Privacy Policy', 'Terms of Use', 'Cookie Policy', 'Accessibility'],
    },
    {
      title: 'Company',
      links: ['About Us', 'Careers', 'Contact Us', 'Press Room'],
    },
    {
      title: 'Resources',
      links: ['FAQ', 'Blog', 'Success Stories', 'Affiliates'],
    },
  ];

  return (
    <footer className="bg-dark-surface dark:bg-dark-background py-16 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid: Links and Social */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 border-b pb-10 border-gray-700">
          
          {/* Logo/Brand */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="font-serif text-2xl font-extrabold text-white">
              DatingAdvice.<span className="text-cta-vibrant">io</span>
            </h3>
            <p className="font-sans text-sm text-gray-400 mt-2">
              Your AI-Powered Dating Edge.
            </p>
          </div>

          {/* Link Columns */}
          {linkColumns.map((col) => (
            <div key={col.title}>
              <h4 className="font-sans text-lg font-bold text-white mb-4">{col.title}</h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <a 
                      href="#" 
                      className="font-sans text-sm text-gray-400 hover:text-cta-vibrant transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Social Icons (Placeholder) */}
          <div>
            <h4 className="font-sans text-lg font-bold text-white mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a 
                  key={link.name}
                  href="#" 
                  aria-label={link.name}
                  className="w-8 h-8 flex items-center justify-center bg-gray-700 rounded-full text-white hover:bg-cta-vibrant transition-colors font-bold"
                >
                  {link.icon.toUpperCase()}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright and Bottom Links */}
        <div className="mt-8 text-center md:text-left">
          <p className="font-sans text-xs text-gray-500">
            &copy; {new Date().getFullYear()} DatingAdvice.io. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;