'use client'
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Kbd } from "@nextui-org/kbd";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";

// import { link as linkStyles } from "@nextui-org/theme";

// import { siteConfig } from "@/config/site";
import NextLink from "next/link";

import { ThemeSwitch } from "@/components/theme-switch";
import {
  SearchIcon,
} from "@/components/icons";


export const Navbar = () => {
  const searchInput = (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: "bg-default-100",
        input: "text-sm",
      }}
      endContent={
        <Kbd className="hidden lg:inline-block" keys={["command"]}>
          K
        </Kbd>
      }
      labelPlacement="outside"
      placeholder="Search..."
      startContent={
        <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
      }
      type="search"
    />
  );

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <NextUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            {/* <Logo /> */}
            <p className="font-bold text-primary">CHARYSE MONET</p>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <ul className="hidden lg:flex gap-4 justify-start ml-2">
          <li className="text-white">
            <button onClick={scrollToTop}>Home</button>
          </li>
          <li>
            <Link href="#aboutMe" className='text-white'>
              <button>About Me</button>
            </Link>
          </li>
          <li>
            <Link href="#portfolio" className='text-white'>
              <button>Portfolio</button>
            </Link>
          </li>
          <li>
            <Link href="#credits" className='text-white'>
              <button>Credits</button>
            </Link>
          </li>
          <li>
            <Link href="#contact" className='text-white'>
              <button>Contact</button>
            </Link>
          </li>
        </ul>
      </NavbarContent>
    </NextUINavbar>
  );
};
