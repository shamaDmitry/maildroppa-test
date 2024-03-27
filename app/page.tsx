import Form from "@/Components/Form";
import Header from "@/Components/Header";
import Headline from "@/Components/Headline";

export default function Home() {
  return (
    <>
      <Header />

      <section className="container py-10">
        <Headline className="">Home page</Headline>

        <Form />
      </section>
    </>
  );
}
