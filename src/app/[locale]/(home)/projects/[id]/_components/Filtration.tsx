"use client";
import {useSyncExternalStore} from "react";

import {AppHelper} from "@/helpers/appHelper";

const subscribe = (callback: () => void) => {
  window.addEventListener("hashchange", callback);
  return () => {
    window.removeEventListener("hashchange", callback);
  };
};

// Client-side snapshot
const getClientSnapshot = () => window.location.hash || "#developer";

// Server-side snapshot (default value for SSR)
const getServerSnapshot = () => "#developer";

const links = [
  {
    title: "Developer",
    href: "#developer",
  },
  {
    title: "About",
    href: "#about",
  },
  {
    title: "Office",
    href: "#about-office",
  },
  {
    title: "Positions",
    href: "#project-key-pos",
  },
  {
    title: "Statement",
    href: "#project-statement",
  },
  {
    title: "View",
    href: "#view",
  },

  {
    title: "Structure",
    href: "#structure",
  },
  {
    title: "Layout",
    href: "#unit-layout",
  },
  {
    title: "Area",
    href: "#total-area",
  },
  {
    title: "Service Charge",
    href: "#service-charge",
  },
  {
    title: "Providers",
    href: "#service-providers",
  },
  {
    title: "Discount",
    href: "#discount-policy",
  },
  {
    title: "Purchasing",
    href: "#purchasing-procedures",
  },
  {
    title: "Location",
    href: "#location",
  },
];

const Filtration = () => {
  const tab = useSyncExternalStore(subscribe, getClientSnapshot, getServerSnapshot);

  return (
    <nav className='sticky top-2rem z-40 flex items-center justify-between gap-0.75rem overflow-x-auto rounded-full bg-white'>
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className={AppHelper.className(
            "rounded-inherit flex h-4.5rem items-center justify-center whitespace-nowrap px-1rem text-center font-medium text-colors-grey-colors-1000 transition-all duration-200 font-18",
            {
              "bg-colors-primary-colors-400 !px-3rem font-bold text-colors-grey-colors-100":
                link.href === tab,
            }
          )}
        >
          {link.title}
        </a>
      ))}
    </nav>
  );
};

export default Filtration;
