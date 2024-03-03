import { MENU } from "@/helpers/consts";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="py-4 border-b">
      <div className="container">
        <div className="flex items-center justify-center">
          <Link href="/" className="border py-2 px-4">
            Logo
          </Link>

          <nav className="flex justify-center items-center ml-auto gap-4">
            {MENU.map((menuItem) => {
              return (
                <Link
                  key={menuItem.id}
                  href={menuItem.href}
                  className="border py-2 px-4 uppercase"
                >
                  {menuItem.title}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
