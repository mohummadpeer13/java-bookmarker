"use client";

import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="https://storage.canalblog.com/14/48/1145642/91330992_o.png"
            className="h-8"
            alt="Flowbite Logo"
          ></img>
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Bookmarker
          </span>
        </Link>

        <div
          className="items-center justify-between w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                className="block py-2 px-3 text-gray-900 rounded hover:text-blue-700"
                href="/"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                className="block py-2 px-3 text-gray-900 rounded hover:text-blue-700"
                href="/bookmarks/add"
              >
                Add Bookmarks
              </Link>
            </li>

            <li>
              <Link
                className="block py-2 px-3 text-gray-900 rounded hover:text-blue-700"
                href="/bookmarks/list"
              >
                List Bookmarks
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
