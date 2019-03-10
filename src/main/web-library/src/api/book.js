import {javaApiUrl} from "./apiUrl";
import axios from 'axios';

export const bookApi = {};


bookApi.getBooks = (inPrivateCatalogue) => {
    return axios.get(javaApiUrl + `/book/`, {params: {inPrivateCatalogue: inPrivateCatalogue}});
};
