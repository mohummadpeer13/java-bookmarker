import Navbar from "@/app/components/Navbar";
import React from "react";
import AddBookmarkForm from "./AddBookmarkForm";

export default function AddBookmark() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Navbar />
      <div className="container mx-auto flex flex-col item-center">
        <div className="mt-60 lg:mt-24 text-3xl font-bold item-center text-center">
          Add Bookmarkers
        </div>
        <div>
          <AddBookmarkForm />
        </div>
      </div>
    </main>
  );
}
