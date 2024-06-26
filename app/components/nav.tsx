import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Switch,
} from "@nextui-org/react";
import { useColorMode } from "../utils/theme";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [activeLink, setActiveLink] = React.useState(0);
  const colorMdCtx = useColorMode();

  type MenuType = {
    [key: string]: string;
  };
  const menuItems: MenuType = {
    Home: "/#",
    About: "/#about",
    Services: "/#services",
    Pricing: "/#pricing",
    Contact: "/#contact",
  };

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} isMenuOpen={isMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          {/* Logo goes here */}
          <p className="font-bold text-xl">BlueHut</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {Object.keys(menuItems).map((item, index) => (
          <NavbarItem key={`${item}-${index}`}>
            <Link
              color={index + 1 === activeLink ? "primary" : "foreground"}
              className="w-full"
              href={menuItems[item]}
              size="lg"
              onPress={() => setActiveLink(index + 1)}
            >
              {item}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} color="secondary" href="/#pricing" variant="flat">
            Get started
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Switch
            defaultSelected
            size="sm"
            color="secondary"
            thumbIcon={({ isSelected, className }) =>
              isSelected ? (
                <SunIcon className={className} />
              ) : (
                <MoonIcon className={className} />
              )
            }
            onClick={() => colorMdCtx.colorMode.toggleColorMode()}
          ></Switch>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="flex items-center">
        {Object.keys(menuItems).map((item, index) => (
          <NavbarMenuItem className="my-3 text-xl" key={`${item}-${index}`}>
            <Link
              color={index + 1 === activeLink ? "primary" : "foreground"}
              className="w-full"
              href={menuItems[item]}
              size="lg"
              onClick={() => {
                setActiveLink(index + 1);
                setIsMenuOpen(false);
              }}
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

function MoonIcon(props: any) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      height="1em"
      role="presentation"
      viewBox="0 0 24 24"
      width="1em"
      {...props}
    >
      <path
        d="M21.53 15.93c-.16-.27-.61-.69-1.73-.49a8.46 8.46 0 01-1.88.13 8.409 8.409 0 01-5.91-2.82 8.068 8.068 0 01-1.44-8.66c.44-1.01.13-1.54-.09-1.76s-.77-.55-1.83-.11a10.318 10.318 0 00-6.32 10.21 10.475 10.475 0 007.04 8.99 10 10 0 002.89.55c.16.01.32.02.48.02a10.5 10.5 0 008.47-4.27c.67-.93.49-1.519.32-1.79z"
        fill="currentColor"
      />
    </svg>
  );
}

function SunIcon(props: any) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      height="1em"
      role="presentation"
      viewBox="0 0 24 24"
      width="1em"
      {...props}
    >
      <g fill="currentColor">
        <path d="M19 12a7 7 0 11-7-7 7 7 0 017 7z" />
        <path d="M12 22.96a.969.969 0 01-1-.96v-.08a1 1 0 012 0 1.038 1.038 0 01-1 1.04zm7.14-2.82a1.024 1.024 0 01-.71-.29l-.13-.13a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.984.984 0 01-.7.29zm-14.28 0a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a1 1 0 01-.7.29zM22 13h-.08a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zM2.08 13H2a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zm16.93-7.01a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a.984.984 0 01-.7.29zm-14.02 0a1.024 1.024 0 01-.71-.29l-.13-.14a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.97.97 0 01-.7.3zM12 3.04a.969.969 0 01-1-.96V2a1 1 0 012 0 1.038 1.038 0 01-1 1.04z" />
      </g>
    </svg>
  );
}
