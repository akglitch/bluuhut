"use client";
import React from "react";
import { usePathname } from "next/navigation";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";

const menuItems: { label: string; href: string }[] = [
  { label: "About", href: "/about" },
  { label: "Capabilities", href: "/#services" },
  { label: "Industries", href: "/#industries" },
  { label: "Process", href: "/#process" },
  { label: "Pricing", href: "/pricing" },
];

function isActive(pathname: string, href: string) {
  if (href.startsWith("/#")) return false;
  return pathname === href;
}

function Wordmark() {
  return (
    <Link href="/" className="flex items-center" aria-label="BlueHut Solutions — home">
      <span className="flex items-center gap-2.5">
        <span className="flex flex-col leading-none">
          <span className="display text-[1.1rem] font-semibold tracking-tight text-ink">
            BlueHut
          </span>
          <span className="mono mt-0.5 text-[0.5625rem] font-medium uppercase tracking-[0.22em] text-muted">
            Solutions
          </span>
        </span>
      </span>
    </Link>
  );
}

export default function MainNav() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      isMenuOpen={isMenuOpen}
      maxWidth="xl"
      height="4rem"
      isBlurred={false}
      className="fixed top-0 bg-transparent pt-3 sm:pt-4"
      classNames={{
        wrapper: `rounded-full border border-line px-4 transition-all duration-300 sm:px-6 ${
          scrolled
            ? "glass-nav shadow-card"
            : "bg-paper/50 backdrop-blur-md"
        }`,
      }}
    >
      <NavbarContent justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="text-ink sm:hidden"
        />
        <NavbarBrand>
          <Wordmark />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden gap-8 sm:flex" justify="center">
        {menuItems.map((item) => {
          const active = isActive(pathname, item.href);
          return (
            <NavbarItem key={item.href} isActive={active}>
              <Link
                href={item.href}
                className={`mono text-[0.7rem] font-medium uppercase tracking-[0.1em] transition-colors ${
                  active
                    ? "text-accent-bright"
                    : "text-ink-soft hover:text-ink"
                }`}
              >
                {item.label}
              </Link>
            </NavbarItem>
          );
        })}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link
            href="tel:+14346025401"
            className="mono text-[0.7rem] font-medium tracking-tight text-ink-soft transition-colors hover:text-ink"
          >
            +1 434 602 5401
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-accent-ink"
          >
            Request a quote
            <span aria-hidden>→</span>
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="bg-paper/95 pt-10 backdrop-blur-xl">
        {menuItems.map((item) => (
          <NavbarMenuItem key={item.href} className="border-b border-line py-1">
            <Link
              href={item.href}
              size="lg"
              className={`w-full py-3 display text-2xl ${
                isActive(pathname, item.href) ? "text-accent-bright" : "text-ink"
              }`}
              onPress={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
        <NavbarMenuItem className="mt-6">
          <Link
            href="/#contact"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-5 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-white"
            onPress={() => setIsMenuOpen(false)}
          >
            Request a quote <span aria-hidden>→</span>
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
