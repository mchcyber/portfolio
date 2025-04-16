import { MdOutlineArrowOutward } from "react-icons/md";

const footerLinks = [
  {
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/in/mohammed-charef-2a1b00224/', // Correct LinkedIn URL
  },
  {
    title: 'GitHub',
    href: 'https://github.com/mchcyber', // Correct GitHub URL
  },
]

export const Footer = () => {
  return (
    <footer className="relative overflow-x-clip">
      {/* Background Gradient */}
      <div
        className="absolute h-[400px] w-[16000px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 -z-10"
        style={{
          maskImage: "radial-gradient(50% 50% at bottom center, black, transparent)",
          pointerEvents: 'none', // Ensure the background doesn't block clicks
        }}
      ></div>
      <div className="container">
        {/* Footer content */}
        <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
          <div className="text-white/40">
            &copy; 2025. All rights reserved.
          </div>
          <nav className="flex flex-col md:flex-row items-center gap-8">
            {footerLinks.map((link) => (
              <a
                href={link.href} // Use the actual href
                key={link.title}
                target="_blank" // Ensure it opens in a new tab
                rel="noopener noreferrer" // For security purposes
                className="inline-flex items-center gap-1.5"
                style={{
                  position: 'relative', // Ensures proper stacking order
                  zIndex: 10, // Ensure links are on top
                  pointerEvents: 'auto', // Make sure the links are clickable
                }}
              >
                <span className="font-semibold">{link.title}</span>
                <MdOutlineArrowOutward className="size-4" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
