import axios from 'axios';

// data api calls
export const getData = () => {
    return axios.get('http://localhost:4000/api/questions')
}