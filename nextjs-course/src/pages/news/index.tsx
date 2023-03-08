import Link from 'next/link';
import { Fragment } from 'react';

const NewsPage = () => {
  return (
    <Fragment>
      <h1>The news page</h1>
      <ul>
        <li>
          <Link href='/news/nextjs-is-a-great'>Nextjs is great framework</Link>
        </li>
        <li>something else</li>
      </ul>
    </Fragment>
  );
};

export default NewsPage;
