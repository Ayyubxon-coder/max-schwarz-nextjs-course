import Link from 'next/link';
function HomePage() {
  return (
    <>
      <h1>The home page</h1>
      <Link href={'/news'}>News page</Link>
    </>
  );
}
export default HomePage;
