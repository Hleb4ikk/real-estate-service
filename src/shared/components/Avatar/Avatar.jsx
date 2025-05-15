import styles from './Avatar.module.css';

import Image from '../Image/Image';

const Avatar = ({ src = '', alt = 'avatar', username = '' }) => {
  return (
    <label className={styles.container}>
      {src ? (
        <Image
          id="Image"
          src={src}
          alt={alt}
          className={styles.avatarImg}
        />
      ) : (
        <>
          <h2 className={styles.shortedUsername}>{`${username[0]}${username[username.length - 1]}`}</h2>
          <div className={styles.avatarReplacer} />
        </>
      )}
    </label>
  );
};

export default Avatar;
