import { useRouter } from 'next/router';
const DetailPage = () => {
  const { query } = useRouter();
  const newsId = query.newsId;
  console.log(newsId);
  return <div>DetailPage</div>;
};

export default DetailPage;
