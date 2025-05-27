import { Link } from 'react-router-dom';
import styles from './AdvertisementCard.module.css';
import HouseImg from './white-modern-house-curved-patio-archway-c0a4a3b3-aa51b24d14d0464ea15d36e05aa85ac9.jpg';
import { Heart } from 'lucide-react';
import Button from '../../shared/components/Button/Button';

const AdvertisementCard = ({ id, title, description, createdAt, image, price }) => {
  return (
    <Link
      className="link"
      to={`/advertisement/${id}`}
    >
      <article className={styles.advertisementCard}>
        <img
          className={styles.advertisementCardImage}
          src={image || HouseImg}
          alt="advertisement image"
        />
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
        <div className={styles.bottomContentContainer}>
          <time dateTime="2023-01-02">{new Date(createdAt).toLocaleDateString()}</time>
          <span>{price} $</span>
        </div>
      </article>
    </Link>
  );
};

export default AdvertisementCard;
