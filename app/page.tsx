import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link
        className="px-8 py-2 bg-teal-600 rounded-full text-white hover:text-yellow-400"
        href="/ban"
      >
        Voir la BAN
      </Link>
    </main>
  );
}
