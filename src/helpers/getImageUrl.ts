export const getImageUrl = (imageUrl = '') =>
  `http://localhost:4444/uploads/${imageUrl.split('\\')[1]}`;
