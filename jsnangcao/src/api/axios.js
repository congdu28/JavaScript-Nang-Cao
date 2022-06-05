//noi cau hinh base cho axios
import axios from 'axios';
const apiAxios = axios.create({
    baseURL: 'https://6291d460cd0c91932b68a2f1.mockapi.io'
});
export default apiAxios;