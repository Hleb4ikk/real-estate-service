export async function fetchAllAdvertisements() {
  return await fetch('http://localhost:8080/api/advertisements', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
export async function submitAdvertisement({ email, advertisement }) {
  return await fetch('http://localhost:8080/api/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, advertisement }),
  });
}
export async function fetchAdvertisementsByEmail({ email }) {
  return await fetch('http://localhost:8080/api/advertisements_email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email }),
  });
}

export async function fetchLikedAdvertisementsByEmail({ email }) {
  return await fetch('http://localhost:8080/api/advertisement/likes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email }),
  });
}

export async function likeAdvertisement({ email, advertisementId }) {
  return await fetch('http://localhost:8080/api/advertisement/like', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, advertisementId }),
  });
}
export async function unlikeAdvertisement({ email, advertisementId }) {
  return await fetch('http://localhost:8080/api/advertisement/unlike', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, advertisementId }),
  });
}
