import {javaApiUrl} from './apiUrl';
import axios from 'axios';

export const bookApi = {};

bookApi.getBooks = (inPrivateCatalogue) => {
  return axios.get(javaApiUrl + `/book/`,
      {params: {inPrivateCatalogue: inPrivateCatalogue}});
};

bookApi.createBooks = (books) => {
  return axios.post(javaApiUrl + `/book/`, books);
};

bookApi.updateBooks = (books) => {
  return axios.put(javaApiUrl + `/book/`, books);
};

bookApi.deleteBooks = (books) => {
  return axios.delete(javaApiUrl + `/book/`, {data: books});
};
