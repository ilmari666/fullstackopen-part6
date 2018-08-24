import axios from 'axios';

const apiUrl = 'http://localhost:3001/anecdotes';

const getAll = async () => {
  const response = await axios.get(apiUrl);
  return response.data;
};

const createNew = async content => {
  const response = await axios.post(apiUrl, content);
  return response.data;
};

const update = async anecdote => {
  const response = await axios.put(`${apiUrl}/${anecdote.id}`, anecdote);
  return response.data;
};

export default { getAll, createNew, update };
