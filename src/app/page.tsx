import { Hero } from "@/components/hero";
import { TravelsList } from "@/components/travels-list";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center gap-10">
      <Hero />
      <TravelsList />
    </main>
  );
}
