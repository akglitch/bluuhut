import React from "react";
import { InstagramIcon, TwitterIcon, FacebookIcon } from "./icons";

const nav = [
  { label: "About", href: "/about" },
  { label: "Capabilities", href: "/#services" },
  { label: "Industries", href: "/#industries" },
  { label: "Process", href: "/#process" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/#contact" },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-paper">
      <div className="mx-auto max-w-screen-xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-5">
            <a href="/" className="flex items-center" aria-label="BlueHut Solutions">
              <span className="display text-xl font-semibold tracking-tight text-ink">
                BlueHut Solutions
              </span>
            </a>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted">
              Electrical, telecom, and integrated engineering services for
              residential, commercial, and enterprise clients across Canada.
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { Icon: InstagramIcon, href: "https://www.instagram.com/bluehut.inc/", label: "Instagram" },
                { Icon: FacebookIcon, href: "https://web.facebook.com/profile.php?id=61557453218712", label: "Facebook" },
                { Icon: TwitterIcon, href: "#", label: "Twitter" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center border border-line text-ink-soft transition-colors hover:border-ink hover:text-accent-bright"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Sitemap */}
          <div className="lg:col-span-3 lg:col-start-7">
            <h3 className="mono text-[0.6875rem] font-medium uppercase tracking-[0.16em] text-muted">
              Navigate
            </h3>
            <ul className="mt-5 space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-ink-soft transition-colors hover:text-accent-bright"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h3 className="mono text-[0.6875rem] font-medium uppercase tracking-[0.16em] text-muted">
              Contact
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-ink-soft">
              <li>
                <a href="tel:+14346025401" className="hover:text-accent-bright">
                  +1 434 602 5401
                </a>
              </li>
              <li>
                <a href="mailto:bluehutsolutions@gmail.com" className="hover:text-accent-bright">
                  bluehutsolutions@gmail.com
                </a>
              </li>
              <li className="text-muted">Canada</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-line pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} BlueHut Solutions. All rights reserved.
          </p>
          <p className="mono text-xs uppercase tracking-[0.14em] text-muted">
            Engineering / Telecom / Infrastructure
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
