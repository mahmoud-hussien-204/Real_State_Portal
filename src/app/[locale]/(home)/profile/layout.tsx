"use client";

import {useTranslations} from "next-intl";
import Container from "@/components/Container";
import {AppHelper} from "@/helpers/appHelper";
import {Link, usePathname} from "@/i18n/routing";
import {User} from "lucide-react";
import {RiLockLine} from "react-icons/ri";
import {MdFavorite, MdHistory} from "react-icons/md";
import {Menu} from "lucide-react";
import {useState, useEffect} from "react";
import {Button} from "@/components/ui/button";

const ProfileLayout = ({children}: {children: React.ReactNode}) => {
  const t = useTranslations();
  const pathname = usePathname();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  const sidebarLinks = [
    {
      href: "/profile",
      label: t("profile.info"),
      icon: <User className='h-5 w-5' />,
    },
    {
      href: "/profile/security",
      label: t("profile.security"),
      icon: <RiLockLine className='h-5 w-5' />,
    },
    {
      href: "/profile/favorites",
      label: t("profile.favorites"),
      icon: <MdFavorite className='h-5 w-5' />,
    },
    {
      href: "/profile/history",
      label: t("profile.browsing_history"),
      icon: <MdHistory className='h-5 w-5' />,
    },
  ];

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const Sidebar = () => (
    <nav className='flex flex-col gap-1rem'>
      {sidebarLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          onClick={() => isMobile && setIsDrawerOpen(false)}
          className={AppHelper.className(
            "flex items-center gap-3 rounded-lg px-1rem py-0.75rem transition-colors duration-300 hover:bg-primary hover:text-white",
            {
              "!bg-primary text-white": pathname === link.href,
            }
          )}
        >
          {link.icon}
          <span className='font-medium'>{link.label}</span>
        </Link>
      ))}
    </nav>
  );

  return (
    <Container className='mt-10rem'>
      <div className='flex gap-8'>
        {/* Mobile Toggle Button */}

        {/* Sidebar for desktop */}
        <aside className='sticky top-10rem z-50 hidden min-h-[calc(100vh-10rem)] w-64 shrink-0 rounded-lg bg-colors-grey-colors-150 px-1rem py-2rem lg:block'>
          <Sidebar />
        </aside>

        {/* Drawer for mobile */}
        <div className={`fixed inset-0 z-[99999] lg:hidden ${isDrawerOpen ? "block" : "hidden"}`}>
          {/* Backdrop */}
          <div className='fixed inset-0 bg-black/50 transition-opacity' onClick={toggleDrawer} />

          {/* Drawer */}
          <aside className='fixed left-0 top-0 z-50 h-full w-64 transform bg-colors-grey-colors-150 px-1rem py-2rem transition-transform duration-300 ease-in-out'>
            <Sidebar />
          </aside>
        </div>

        {/* Main Content */}
        <main className='relative flex-1 overflow-hidden rounded-xl bg-white p-6 shadow-sm'>
          <button
            className='absolute end-6 top-6 flex items-center gap-2 lg:hidden'
            onClick={toggleDrawer}
          >
            <Menu className='h-6 w-6' />
            <span className='text-sm font-medium'>{t("profile.open_menu")}</span>
          </button>
          {children}
        </main>
      </div>
    </Container>
  );
};

export default ProfileLayout;
