import styles from './ProfilePage.module.css';

import useTitleDivision from '../../shared/hooks/useTitleDivision';

import AdvertisementCard from '../../features/AdvertisementCard/AdvertisementCard';
import { useEffect, useState } from 'react';
import { useUser } from '../../app/providers/UserProvider';
import { fetchAdvertisementsByEmail, fetchLikedAdvertisementsByEmail } from '../../entities/advertisement/api';

export default function ProfilePage() {
  useTitleDivision('Profile');
  const { user } = useUser();
  const [advertisements, setAdvertisements] = useState([]);

  useEffect(() => {
    async function fetchAdvertisements() {
      try {
        const response =
          (user.role === 'client' && (await fetchLikedAdvertisementsByEmail({ email: user.email }))) ||
          (user.role === 'realtor' && (await fetchAdvertisementsByEmail({ email: user.email })));
        if (!response.ok) throw new Error('Error');

        const data = await response.json();
        console.log(data.advertisements);
        setAdvertisements(data.advertisements);
      } catch (error) {
        console.error(error);
      }
    }

    fetchAdvertisements();
  }, []);

  return (
    <div className={styles.profilePageContainer}>
      {user.role === 'realtor' && (
        <section>
          <h1 className={styles.sectionName}>My Advertisements</h1>
          <div className={styles.adsList}>
            {advertisements.length !== 0 &&
              advertisements.map((ad) => (
                <AdvertisementCard
                  key={ad.id}
                  {...ad}
                />
              ))}
          </div>
        </section>
      )}{' '}
      {user.role === 'client' && (
        <section>
          <h1 className={styles.sectionName}>Favourite Advertisements</h1>
          <div className={styles.adsList}>
            {advertisements.length !== 0 &&
              advertisements.map((ad) => (
                <AdvertisementCard
                  key={ad.id}
                  {...ad}
                />
              ))}
          </div>
        </section>
      )}
    </div>
  );
}
