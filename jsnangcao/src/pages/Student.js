import { getStudents, getStudent, deleteStudent } from '../api/student';
import reRender from '../helpers/reRender';


const Student = {
        render: async() => { // đã đóng ngoặc nhọn phải có return ở trong
                // 1. fetch là phương thức dùng để lấy dữ liệu từ phía BE
                // 2. fetch trả về 1 Promise => sẽ có await ở trước fetch để chờ kq
                // 3. fetch nhận vào đường dẫn API endpoint của BE
                // const response1 = await fetch('https://6291d460cd0c91932b68a2f1.mockapi.io/students');
                // 3.2 sử dụng axios đã đc khởi tạo và snh ra hàm getStudent

                const response = await getStudents();
                const { data } = response;
                // 4. lần đợi fetch đầu tiên sẽ trả về obj Response
                console.log('response', response);
                // 5. lần đợi tiếp theo là response trả dữ liệu về dạng json
                // const students = await response.json();
                // console.log('students', students);

                return `<div>
            ${
                data.map((student) => (
                    `<div>
                        <div>ID: ${student.id}</div>
                        <div>Name: ${student.name}</div>
                        <div>MSV: ${student.msv}</div>
                        <div>
                            <a href="/students/${student.id}">
                                 <button> chi tiet</button>
                            </a>
                            <button class='btn btn-danger' data-id="${student.id}" data-name="${student.name}"> xoa </button>
                        </div>
                    </div>`
                )).join('')
            }
        </div>`
    },
    afterRender:()=>{ 
        // day la noi thuc thi
        const deleteBtns = document.querySelectorAll('.btn-danger');
        deleteBtns.forEach((btn)=>{
            // btn.sytle.color = 'red';

            // const data= btn.dataset;
            btn.addEventListener('click',async()=>{
                
                // btn.style.color = 'red'; // day la khi bam vao se thanh mau do
                const btnId=btn.dataset.id;
                console.log(btnId);
                await deleteStudent(btnId);
                // window.location.reload(); lam nhu nay se bi tai lai het tat ca
                await reRender('#content', Student);
            });
        });
    }
};

export default Student;