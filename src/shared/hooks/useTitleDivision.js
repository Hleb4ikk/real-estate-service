'use client';

import { metadata } from '../metadata';
import { useEffect } from 'react';

const useTitle = (pageTitle) => {
  useEffect(() => {
    document.title = `${metadata.title} | ${pageTitle}`;
  }, [pageTitle]);
  return () => {
    document.title = metadata.title;
  };
};

export default useTitle;
