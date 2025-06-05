"use client";

import {useRouter} from "@/i18n/routing";

import {useEffect, useState} from "react";

import Spinner from "../ui/spinner";

export default function ProtectedRoute({children}: {children: React.ReactNode}) {
  const router = useRouter();
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    try {
      const userData = localStorage.getItem("userData");
      if (userData && userData.trim() !== "") {
        const user = JSON.parse(userData);
        setUser(user);
      } else {
        router.replace("/auth/login");
      }
    } catch (error) {
      router.replace("/auth/login");
    }
  }, [router]);

  if (!user) {
    return (
      <div className='flex h-screen w-full items-center justify-center'>
        <Spinner className='!loading-sm' />
      </div>
    );
  }

  return <>{children}</>;
}
