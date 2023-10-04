import { SignedIn, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex-between background-light900_dark200 fixed z-50 w-full gap-5 p-6 shadow-light-300 dark:shadow-none sm:px-12">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/assets/images/site-logo.svg"
          height={23}
          width={23}
          alt="devflow logo"
        />
        <p className="h2-bold font-spaceGrotesk text-light-900 dark:text-dark-100">
          Dev<span className="text-primary-500">Overflow</span>
        </p>
      </Link>
      <SignedIn>
        <UserButton afterSignOutUrl="/" />
      </SignedIn>
    </nav>
  );
};

export default Navbar;
