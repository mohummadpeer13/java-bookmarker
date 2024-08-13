import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Navbar />
      <div className="mt-60 lg:mt-24 text-3xl font-bold">
        Welcome to Bookmarker-api
      </div>
    </main>
  );
}
