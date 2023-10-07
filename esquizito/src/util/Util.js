export const extractAuth0Id = (auth0Sub) =>
  auth0Sub.match(/[^auth0|[](.*)[^\]]/)[0];
