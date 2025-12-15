import React from 'react';
import { NAV_LINKS, DROPDOWN_PRODUCTS } from '../data/HeaderData';


const allLinks = [
...DROPDOWN_PRODUCTS.map(item => ({ name: item.title, href: item.href })),
...NAV_LINKS,
];


interface MobileMenuProps {
isOpen: boolean;
onClose: () => void;
}


const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
if (!isOpen) return null;


return (
<div className="fixed inset-0 z-50 bg-secondary-cream dark:bg-dark-surface">
<button
onClick={onClose}
className="absolute top-6 right-6 text-3xl font-extrabold text-cta-vibrant"
>
×
</button>


<nav className="mt-24 px-6 flex flex-col gap-6">
{allLinks.map(link => (
<a
key={link.name}
href={link.href}
onClick={onClose}
className="relative text-xl font-bold text-gray-900 dark:text-dark-text hover:text-cta-vibrant"
>
{link.name}
<span className="absolute left-0 -bottom-1 h-[2px] w-full bg-cta-vibrant scale-x-0 hover:scale-x-100 transition-transform origin-left" />
</a>
))}


<button className="mt-10 px-6 py-3 bg-cta-vibrant text-white rounded-full font-bold">
Login / Signup
</button>
</nav>
</div>
);
};


export default MobileMenu;