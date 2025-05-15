'use client';

import { metadata } from '../metadata';
import { useEffect } from 'react';

const useTitleDivision = (pageTitle) => {
  useEffect(() => {
    document.title = `${metadata.title} | ${pageTitle}`;
    return () => {
      document.title = metadata.title;
    };
  }, [pageTitle]);
};

export default useTitleDivision;
