import Link from 'next/link';

const NewsPage = () => {
  return (
    <>
      <h1>The news page</h1>
      <ul>
        <li>
          <Link href='/news/nextjs-is-a-great'>Nextjs is great framework</Link>
        </li>
        <li>something else</li>
      </ul>
    </>
  );
};

export default NewsPage;
