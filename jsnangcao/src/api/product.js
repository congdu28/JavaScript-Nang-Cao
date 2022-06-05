import api from "./axios";

const prefix = '/products';

export const getProducts=()=>api.get(prefix);
export const getProduct=(id)=>api.get(`${prefix}/${id}`);
export const deleteProduct = (id) => api.delete(`${prefix}/${id}`);
// phuong thuc post cua axios nhan 2 tham so endpoint va du lieu
export const createProduct =(data) => api.post(prefix,data);