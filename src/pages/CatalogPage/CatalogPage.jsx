import styles from './CatalogPage.module.css';
import { useEffect, useState } from 'react';
import useTitleDivision from '../../shared/hooks/useTitleDivision';
import AdvertisementCard from '../../features/AdvertisementCard/AdvertisementCard';
import { fetchAllAdvertisements } from '../../entities/advertisement/api';
import Search from '../../features/Search/Search';

export default function CatalogPage() {
  useTitleDivision('Catalog');

  const [advertisements, setAdvertisements] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredAds, setFilteredAds] = useState([]);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get('query') || '';
    setSearchQuery(query);
  }, []);

  useEffect(() => {
    async function fetchAdvertisements() {
      try {
        const response = await fetchAllAdvertisements();
        if (!response.ok) throw new Error('Error');

        const data = await response.json();
        setAdvertisements(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchAdvertisements();
  }, []);

  useEffect(() => {
    // console.log(searchQuery);
    setFilteredAds(advertisements.filter((ad) => ad.title.toLowerCase().includes(searchQuery.toLowerCase())));
  }, [advertisements, searchQuery]);

  return (
    <div className={styles.catalogPageContainer}>
      <Search setSearchQuery={setSearchQuery} />
      <div className={styles.catalogContainer}>
        {filteredAds.length > 0 ? (
          filteredAds.map((ad) => (
            <AdvertisementCard
              key={ad.id}
              {...ad}
            />
          ))
        ) : (
          <p>Объявлений пока нет</p>
        )}
      </div>
    </div>
  );
}
