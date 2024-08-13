let clienturl = process.env.NEXT_PUBLIC_DEV_BASE_URL;

if (process.env.NODE_ENV === "production") {
  clienturl = process.env.NEXT_PUBLIC_PROD_BASE_URL;
}

export const fetchBookmarks = async () => {
  let url = `${clienturl}/api/bookmarks`;
  const res = await fetch(url, { next: { revalidate: 0 } });
  const data = await res.json();
  return data;
};
