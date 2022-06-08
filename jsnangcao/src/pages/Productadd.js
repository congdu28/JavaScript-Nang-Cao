import { createProduct } from "../api/product";

const ProductAdd = {
    render: () => {
        return (
            `<div>
                <form>
                    <div>
                        <label>Tên</label>
                        <input class='form-control' id='name'/>
                    </div>
                    <div>
                        <label>Avatar</label>
                        <input class='form-control' id='avatar'/>
                    </div>
                    <div>
                        <label>Mô tả</label>
                        <input class='form-control' id='des'/>
                    </div>
                    <div>
                    <label>Giá</label>
                        <input class='form-control' id='price'/>
                    </div>
                    <div class='form-group'>
                        <label>Status</label>
                        <select name="status" id="status">
                            <option value="true">Hiện</option>
                            <option value="false">Ẩn</option>
                        </select>
                    </div>
                    <div>
                        <button type='button' class='btn btn-success'>Tạo mới</button>
                    </div>
                </form>
            </div>`

        )


    },
    afterRender: () => {
        const submitBtn = document.querySelector('.btn');
        submitBtn.addEventListener('click', async() => {
            const name = document.querySelector('#name').value;
            const avatar = document.querySelector('#avatar').value;
            const des = document.querySelector('#des').value;
            const price = document.querySelector('#price').value;
            const status = document.querySelector('#status').value;


            // const submitData={
            //     name:name,
            //     msv:msv,
            //     avatar:avatar,
            // };
            const submitData = { name, avatar, des, price, status };
            console.log(submitData);
            await createProduct(submitData);
            window.location.replace('/products');
        });
    }
};
export default ProductAdd;