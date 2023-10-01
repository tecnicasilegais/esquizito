export const extractAuth0Id = (auth0Sub) =>
  auth0Sub.match(/[^auth0|[](.*)[^\]]/)[0];

export const apiUrl = () => `${process.env.REACT_APP_API_SERVER_URL}`;
