export const extractAuth0Id = (auth0Sub) =>
  auth0Sub.match(/[^auth0|[](.*)[^\]]/)[0];

export const sortByType = (type) => {
  if (type === 'string') {
    return function (ord) {
      return ord === 'asc'
        ? (a, b) => a.localeCompare(b)
        : (a, b) => b.localeCompare(a);
    };
  }
  return function (ord) {
    return ord === 'asc' ? (a, b) => a - b : (a, b) => b - a;
  };
};
