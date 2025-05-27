import styles from './AdvertisementPage.module.css';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Heart, HeartOff } from 'lucide-react';
import Button from '../../shared/components/Button/Button';
import {
  likeAdvertisement,
  unlikeAdvertisement,
  fetchLikedAdvertisementsByEmail,
} from '../../entities/advertisement/api';
import { useUser } from '../../app/providers/UserProvider';

async function checkIfLiked(userEmail, adId, setIsLiked) {
  try {
    if (!userEmail) {
      setIsLiked(false);
      return;
    }

    const response = await fetchLikedAdvertisementsByEmail({ email: userEmail });

    if (!response.ok) throw new Error('Ошибка при загрузке лайков');
    else if (response.ok) {
      const likesData = await response.json();
      const isLiked = likesData.advertisements.some((ad) => ad.id.toString() === adId);
      setIsLiked(isLiked);
    } else {
      console.log('internal server error');
    }
  } catch (error) {
    console.error('Ошибка при проверке лайков:', error);
  }
}

export default function AdvertisementPage() {
  const { id } = useParams();
  const [advertisement, setAdvertisement] = useState(null);
  const { user } = useUser();
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    async function fetchAdvertisement() {
      try {
        const response = await fetch(`http://localhost:8080/api/advertisement/${id}`);
        if (!response.ok) throw new Error('Ошибка при загрузке объявления');

        const data = await response.json();
        setAdvertisement(data);

        await checkIfLiked(user?.email, id, setIsLiked);
      } catch (error) {
        console.error('Ошибка:', error);
      }
    }

    if (id) {
      fetchAdvertisement();
    }
  }, [id, user]);

  if (!advertisement) {
    return <div>Advertisement {id} wasn't found</div>;
  }

  async function handleLikeToggle() {
    if (!user?.email) {
      console.warn('User not logged in');
      return;
    }

    try {
      const action = isLiked ? unlikeAdvertisement : likeAdvertisement;
      await action({ email: user.email, advertisementId: id });
      setIsLiked((prev) => !prev);
    } catch (error) {
      console.error('Error toggling like:', error);
    }
  }

  return (
    <div className={styles.advertisementPageContainer}>
      {[
        { title: 'Title:', content: advertisement.title },
        { title: 'Description:', content: advertisement.description },
        { title: 'Date of submit:', content: new Date(advertisement.createdAt).toLocaleDateString() },
        { title: 'Author:', content: advertisement.email },
        { title: 'Price:', content: <span>{advertisement.price} $</span> },
      ].map(({ title, content }) => (
        <div
          key={title}
          className={styles.advertisementPoint}
        >
          <h1>{title}</h1>
          <p>{content}</p>
        </div>
      ))}
      {user?.role === 'client' && (
        <div className={`${styles.advertisementPoint} ${styles.likeContainer}`}>
          <h1>Like:</h1>
          <Button onClick={handleLikeToggle}>{isLiked ? <Heart /> : <HeartOff />}</Button>
        </div>
      )}
    </div>
  );
}
