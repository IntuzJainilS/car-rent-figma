"use client";

import Link from "next/link";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
}

export default function NavLink({
  href,
  children,
  isActive,
  onClick,
}: NavLinkProps) {
  return (
    <Link
      href={href}
      onClick={(e) => {
        e.preventDefault(); 
        onClick();
      }}
      className={`
        relative flex items-center w-25
        font-Montserrat text-base leading-[215%]
        transition-all duration-300
        ${
          isActive
            ? "text-[#F55757] translate-x-2"
            : "text-[#A6A6A6] hover:text-[#F55757]"
        }
      `}
    >
      {isActive && (
        <span className="mr-2 text-[#F55757] text-xl leading-none">·</span>
      )}
      {children}
    </Link>
  );
}
