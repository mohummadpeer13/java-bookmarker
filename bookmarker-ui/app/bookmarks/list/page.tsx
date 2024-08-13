import { fetchBookmarks } from "@/app/api/api";
import { BookmarksList } from "@/app/api/models";
import Navbar from "@/app/components/Navbar";
import React from "react";

export default async function ListBookmark() {
  const bookmarks: BookmarksList = await fetchBookmarks();

  return (
    <main className="flex min-h-screen flex-col items-center">
      <Navbar />
      <div className="container mx-auto flex flex-col item-center">
        <div className="mt-60 lg:mt-24 text-3xl font-bold item-center text-center">
          List of Bookmarkers
        </div>
        <div className="mt-8 text-center">
          {bookmarks.data.map((bookmark) => (
            <div
              className="my-4 bg-blue-100 rounded-xl mx-4 p-4"
              key={bookmark.id}
            >
              <p className="text-xl font-bold">{bookmark.title}</p>
              <h1>{bookmark.url}</h1>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
