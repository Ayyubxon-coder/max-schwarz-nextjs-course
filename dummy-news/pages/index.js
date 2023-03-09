import MeetupList from '@/components/meetups/MeetupList';
import { DUMMY_MEETUPS } from '@/constants/constants';
import { useEffect, useState } from 'react';

function HomePage() {
  const [loadedMeetups, setLoadedMeetups] = useState([]);
  useEffect(() => {
    setLoadedMeetups(DUMMY_MEETUPS);
  }, []);
  return <MeetupList meetups={loadedMeetups} />;
}
export default HomePage;
