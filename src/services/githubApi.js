import axios from 'axios';

const githubApi = axios.create({
  baseURL: 'https://api.github.com',
  timeout: 5000,
  headers: {
    Accept: 'application/vnd.github.v3+json',
    'Content-Type': 'application/json',
  },
});

export const getUserRepos = async (username) => {
  try {
    return (await githubApi.get(`/users/${username}/repos`)).data;
  } catch (error) {
    console.log(error); // eslint-disable-line no-console
    switch (error.response?.status) {
      default:
        throw new Error(`Error getting user repos: ${error.message}`);
    }
  }
};

export const getUser = async (username) => {
  try {
    return (await githubApi.get(`/users/${username}`)).data;
  } catch (error) {
    console.log(error.response.data); // eslint-disable-line no-console
    switch (error.response?.status) {
      case 404:
        throw new Error('User not found');
      default:
        throw new Error(`Something went wrong: ${error.message}`);
    }
  }
};

export const getAuthUser = async () => {
  try {
    return (await githubApi.get('/user')).data;
  } catch (error) {
    console.log(error.response.data); // eslint-disable-line no-console
    switch (error.response?.status) {
      case 401: throw new Error('Unauthorized, please login with your github account');
      default: throw new Error(`Something went wrong: ${error.message}`);
    }
  }
};
