import { getStudents,getStudent } from "../api/student";

const StudentDetail ={
    render: async (id)=>{
        const response = await getStudent(id);
        const {data}= response;
        console.log(data);
        return (
            `<div>
            <div>
                <div> ID: ${data.id}</div>
                <div> Name: ${data.name}</div>
                <div> MSV: ${data.msv}</div>
            </div>
        </div>`
        );
    }
}

export default StudentDetail;