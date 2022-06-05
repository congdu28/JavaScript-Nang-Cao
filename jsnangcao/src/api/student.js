import api from "./axios";

const prefix = '/students';

export const getStudents=()=>api.get(prefix);
export const getStudent=(id)=>api.get(`${prefix}/${id}`);
export const deleteStudent = (id) => api.delete(`${prefix}/${id}`);
// phuong thuc post cua axios nhan 2 tham so endpoint va du lieu
export const createStudent =(data) => api.post(prefix,data);