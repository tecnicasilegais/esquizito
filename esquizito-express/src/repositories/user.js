const get = async (id) =>
  new Promise((resolve) => {
    resolve({
      id,
      name: 'Esquizito',
      email: 'esquizito@gmail.com',
    });
  });

export default { get };
