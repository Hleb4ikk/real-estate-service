const getSessionUser = () => {
  const storedUser = localStorage.getItem('user');

  try {
    return storedUser ? JSON.parse(storedUser) : null;
  } catch (error) {
    return null;
  }
};

export default getSessionUser;
