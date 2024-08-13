"use client";

import { useRouter } from "next/navigation";
import React from "react";

type Props = {};

export default function AddBookmarkForm({}: Props) {
  const router = useRouter();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    let clienturl = process.env.NEXT_PUBLIC_DEV_BASE_URL;

    if (process.env.NODE_ENV === "production") {
      clienturl = process.env.NEXT_PUBLIC_PROD_BASE_URL;
    }

    // Add bookmark
    fetch(`${clienturl}/api/bookmarks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: data.title,
        url: data.url,
        description: data.description,
      }),
    }).then(() => {
      router.push("/");
      router.refresh();
    });
  };
  return (
    <div className="mt-8 flex flex-col p-4 lg:px-80">
      <form onSubmit={handleSubmit} className="form bg-blue-100 p-4 rounded-xl">
        <div className="mb-3">
          <label className="block mb-2 text-md font-medium text-gray-900">
            Title
          </label>
          <input
            name="title"
            id="title"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Title"
            required
          />
        </div>

        <div className="mb-3">
          <label className="block mb-2 text-md font-medium text-gray-900">
            Url
          </label>
          <input
            name="url"
            id="url"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Url"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-md font-medium text-gray-900">
            Description
          </label>
          <textarea
            name="description"
            id="description"
            cols={30}
            rows={5}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Description"
          />
        </div>

        <div className="flex flex-row justify-center">
          <button
            type="submit"
            className="font-bold bg-blue-600 text-white p-2 rounded-xl w-2/5 lg:w-1/5"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
