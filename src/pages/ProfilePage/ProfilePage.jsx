import styles from './ProfilePage.module.css';

import useTitleDivision from '../../shared/hooks/useTitleDivision';
import Input from '../../shared/components/Input/Input';
import SubmitBitton from '../../shared/components/SubmitButton/SubmitButton';
import AdvertisementCard from '../../features/AdvertisementCard/AdvertisementCard';
export default function ProfilePage() {
  useTitleDivision('Profile');
  return (
    <div className={styles.profilePageContainer}>
      <section className={styles.editProfileSection}>
        <h1 className={styles.sectionName}>Edit Profile</h1>
        <div className={styles.editProfileFormContainer}>
          <form className={styles.editProfileForm}>
            <Input
              type="email"
              placeholder="Email"
            />
            <Input
              type="password"
              placeholder="Password"
            />
            <div className={styles.submitEditButtonContainer}>
              <SubmitBitton>Save</SubmitBitton>
            </div>
          </form>
        </div>
      </section>
      <section className={styles.listOfFavoriteAdvertisements}>
        <h1 className={styles.sectionName}>Favorite Advertisements</h1>
        <div className={styles.favoriteListContainer}>
          <AdvertisementCard />
          <AdvertisementCard />
          <AdvertisementCard />
          <AdvertisementCard />
          <AdvertisementCard />
          <AdvertisementCard />
          <AdvertisementCard />
          <AdvertisementCard />
        </div>
      </section>
    </div>
  );
}
