import { Link } from 'react-router-dom';
import styles from './AdvertisementCard.module.css';
import HouseImg from './white-modern-house-curved-patio-archway-c0a4a3b3-aa51b24d14d0464ea15d36e05aa85ac9.jpg';

const AdvertisementCard = () => {
  return (
    <Link
      className="link"
      to="/advertisement"
    >
      <article className={styles.advertisementCard}>
        <img
          className={styles.advertisementCardImage}
          src={HouseImg}
          alt="advertisement image"
        />
        <h2>Title</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium, et.</p>
        <time datetime="2023-01-02">Jan 2, 2023</time>
      </article>
    </Link>
  );
};

export default AdvertisementCard;
