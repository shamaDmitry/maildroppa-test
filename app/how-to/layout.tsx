import Header from "@/Components/Header";
import Headline from "@/Components/Headline";
import Link from "next/link";
import React from "react";
import { v4 as uuidv4 } from "uuid";

interface HowToLayoutProps extends React.PropsWithChildren {}

const menu = [
  {
    id: uuidv4(),
    title: "core features",
    href: "/core-features",
  },
  {
    id: uuidv4(),
    title: "forms",
    href: "/forms",
  },
  {
    id: uuidv4(),
    title: "email editor",
    href: "/email-editor",
  },
  {
    id: uuidv4(),
    title: "subscribers",
    href: "/subscribers",
  },
  {
    id: uuidv4(),
    title: "automations",
    href: "/automations",
  },
  {
    id: uuidv4(),
    title: "analytics",
    href: "/analytics",
  },
];

const HowToLayout = ({ children }: HowToLayoutProps) => {
  return (
    <>
      <Header />

      <section className="bg-blue-900 text-white h-72 flex-col flex justify-center items-center">
        <Headline className="text-white">How to page</Headline>
      </section>

      <section className="py-8 text-center">
        <Headline className="">
          What sets Maildroppa apart from the crowd
        </Headline>

        <p>
          Click on any of the tabs to get the fine print, or scroll down for the
          short and sweet version.
        </p>
      </section>

      <section>
        <div className="container">
          <nav className="flex gap-x-4 justify-center">
            {menu.map((menuItem) => {
              return (
                <Link
                  key={menuItem.id}
                  href={`/how-to${menuItem.href}`}
                  className="border py-2 px-4"
                >
                  {menuItem.title}
                </Link>
              );
            })}
          </nav>
        </div>
      </section>

      <section>{children}</section>
    </>
  );
};

export default HowToLayout;
