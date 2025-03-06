export const authLocalStorage = {
  get: () => {
    const accessToken = localStorage.getItem('access');

    return { accessToken };
  },
  set: (token: string) => {
    localStorage.setItem('access', token);
  },

  remove: () => {
    localStorage.removeItem('access');
  },
};
