import {client} from './client';

export const getAllMovies = async query => {
  const params = {
    s: query,
  };
  try {
    const {data} = await client.get('/', {params});
    if (data.Response === 'True') {
      return data.Search;
    }
  } catch (error) {
    return [];
  }
};
