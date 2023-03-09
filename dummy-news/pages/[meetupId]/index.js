import MeetupDetail from '@/components/meetups/MeetupDetail';
import { useRouter } from 'next/router';

const MeetupDetails = () => {
  const { query } = useRouter();
  console.log(query.meetupId);
  return (
    <MeetupDetail
      image={
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg'
      }
      title={'A first meetup'}
      address={'Some Street 5, Some City'}
      description={'The meetup description'}
    />
  );
};

export default MeetupDetails;
