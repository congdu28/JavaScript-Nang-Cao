import { createStudent } from "../api/student";

const StudentAdd = {
    render: () => {
        return (
            `<div>
                <form>
                    <div>
                        <label>Ten</label>
                        <input class='form-control' id='name'/>
                    </div>
                    <div>
                        <label>MSV</label>
                        <input class='form-control' id='msv'/>
                    </div>

                    <div>
                        <label>Avatar</label>
                        <input class='form-control' id='avatar'/>
                    </div><div>
                        <button type='button' class='btn btn-success' id="btn">Tạo mới</button>
                        
                    </div>

                </form>
            </div>`

        )


    },
    afterRender: () => {
        const submitBtn = document.querySelector('#btn');
        submitBtn.addEventListener('click', async() => {
            const name = document.querySelector('#name').value;
            const msv = document.querySelector('#msv').value;
            const avatar = document.querySelector('#avatar').value;

            // const submitData={
            //     name:name,
            //     msv:msv,
            //     avatar:avatar,
            // };
            const submitData = { name, msv, avatar };
            console.log(submitData);
            await createStudent(submitData);
            window.location.replace('/students');
        });
    }
};
export default StudentAdd;