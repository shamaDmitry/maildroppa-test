import Headline from "@/Components/Headline";
import Link from "next/link";

export default function Page() {
  return (
    <section className="container py-10">
      <Headline>Academy page</Headline>

      <Link href="/academy/1">Post 1</Link>
    </section>
  );
}
