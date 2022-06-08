// Nơi cấu hình base cho axios
import axios from 'axios';

// Khởi tạo cấu hình axios cho toàn bộ project
const apiAxiosProduct = axios.create({
    baseURL: 'https://6291d460cd0c91932b68a2f1.mockapi.io/'
});

export default apiAxiosProduct;