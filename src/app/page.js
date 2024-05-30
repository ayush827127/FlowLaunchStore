import Image from "next/image";
import Products from "./_components/Products";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-24 mt-[130px] md:mt-20">
    <Products/>
    </main>
  );
}
