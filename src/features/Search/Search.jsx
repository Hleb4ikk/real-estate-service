'use client';
import styles from './Search.module.css';

import { useEffect, useRef, useState } from 'react';
import Input from '../../shared/components/Input/Input';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Search({ setSearchQuery }) {
  const inputRef = useRef(null);
  const [timerId, setTimerId] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const query = params.get('query') || ''; // Если query = null, присваиваем пустую строку

    if (inputRef.current) {
      inputRef.current.value = query;
    }
    setSearchQuery(query); // Передаём query в родительский компонент
  }, [location.search, setSearchQuery]);

  useEffect(() => {
    const currentInput = inputRef.current;

    function handleInput() {
      const params = new URLSearchParams(location.search);

      if (timerId !== null) {
        clearTimeout(timerId);
      }
      setSearchQuery(params.get('query') || '');
      setTimerId(
        setTimeout(() => {
          if (currentInput?.value) {
            params.set('query', currentInput.value);
          } else {
            params.delete('query');
          }
          navigate(`${location.pathname}?${params.toString()}`, { replace: true });
        }, 800),
      );
    }

    currentInput?.addEventListener('input', handleInput);
    return () => {
      currentInput?.removeEventListener('input', handleInput);
    };
  }, [location.pathname, navigate, location.search, timerId]);

  return (
    <Input
      ref={inputRef}
      className={styles.searchInput}
      placeholder="Search"
    />
  );
}
