interface PageProps {
  slug: string;
}

export default function Page({ params }: { params: PageProps }) {
  return <div>My Post: {params.slug}</div>;
}
