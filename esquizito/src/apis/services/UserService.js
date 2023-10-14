import client from 'apis/client';

const UserService = {
  getUserByAuth0: async (auth0Id, token) =>
    client
      .get(`/user/auth0/${auth0Id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => ({
        data: response.data,
        status: response.status,
      }))
      .catch((err) => ({ data: {}, status: err.response.status })),

  getUserByEmail: async (email, token) =>
    client
      .get(`/user/email/${email}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => ({
        data: response.data,
        status: response.status,
      }))
      .catch((err) => ({ data: {}, status: err.response.status })),

  getUserById: async (id, token) =>
    client
      .get(`/user/id`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => ({
        data: response.data,
        status: response.status,
      }))
      .catch((err) => ({ data: {}, status: err.response.status })),

  register: (userInfo, token) =>
    client
      .post('/user/register', userInfo, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => ({
        data: response.data,
        status: response.status,
      }))
      .catch((err) => ({ data: {}, status: err.code })),
};
export default UserService;
