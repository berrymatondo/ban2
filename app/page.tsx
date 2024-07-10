import Image from "next/image";
import Link from "next/link";
import { BiBuildingHouse } from "react-icons/bi";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  p-24">
      <Link
        className="px-8 py-2 bg-teal-600 rounded-full text-white hover:text-yellow-400"
        href="/ban"
      >
        Voir la BAN
      </Link>

      <Link
        href="https://cellules.vercel.app/benelux"
        className="mt-8 underline hover:text-yellow-400 max-md:text-xs"
      >
        <div className="flex flex-col justify-center items-center">
          <BiBuildingHouse className="" size={30} />

          <p>Nos campus du Benelux</p>
        </div>
      </Link>
    </main>
  );
}
