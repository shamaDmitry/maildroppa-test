import Link from "next/link";
import React from "react";

const AcademyHeader = () => {
  return (
    <header className="py-4 border-b">
      <div className="container">
        <div className="flex items-center justify-between">
          <Link href="/academy" className="border py-2 px-4">
            Logo
          </Link>

          <nav className="flex justify-center items-center ml-auto gap-4">
            <Link href="/" className="border py-2 px-4 uppercase">
              Learn more about Maildroppa
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default AcademyHeader;
