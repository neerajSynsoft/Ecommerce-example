"use client";

import Link from "next/link";
import { DarkThemeToggle, Navbar } from "flowbite-react";
import { usePathname } from "next/navigation";
import { LuCakeSlice } from "react-icons/lu";
import type { CustomFlowbiteTheme } from "flowbite-react";

const customTheme: CustomFlowbiteTheme["navbar"] = {  
  link: {
    active: {
      on: "text-blue-700 dark:text-white bg-transparent",
      off: "text-gray-500 hover:text-blue-700 dark:text-gray-400 dark:hover:text-white",
    },
  }
};

export default function Nav() {
  const pathname = usePathname();
  return (
    <Navbar fluid className="sticky top-0 z-20" theme={customTheme}>
      <Navbar.Brand as={Link} href="/">
        <LuCakeSlice size={20} className="dark:text-white" />
        <span className="text-xl font-semibold dark:text-white">Twins</span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="mr-2">
        <Navbar.Link as={Link} href="/" active={pathname === "/"}>
          Home
        </Navbar.Link>
        <Navbar.Link as={Link} href="/about" active={pathname === "/about"}>
          About
        </Navbar.Link>
        <Navbar.Link
          as={Link}
          href="/services"
          active={pathname === "/services"}
        >
          Services
        </Navbar.Link>
        <Navbar.Link as={Link} href="/pricing" active={pathname === "/pricing"}>
          Pricing
        </Navbar.Link>
        <Navbar.Link as={Link} href="/contact" active={pathname === "/contact"}>
          Contact
        </Navbar.Link>
      </Navbar.Collapse>
      <DarkThemeToggle />
    </Navbar>
  );
}
