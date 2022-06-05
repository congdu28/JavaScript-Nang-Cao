import { createProduct } from "../api/product";

const ProductAdd = {
    render: () => {
        return (
            `<div>
                <form>
                    <div>
                        <label>Ten</label>
                        <input class='form-control' id='name'/>
                    </div>
                    <div>
                        <label>Avatar</label>
                        <input class='form-control' id='avatar'/>
                    </div>
                    <div>
                        <label>mo ta</label>
                        <input class='form-control' id='des'/>
                    </div>
                    <div>
                    label>Price</label>
                        <input class='form-control' id='price'/>
                    </div>
                    <div>
                        <label>mo ta</label>
                    <input class='form-control' id='des'/>
                    </div>
                    <div>
                        <label>Avatar</label>
                        <input class='form-control' id='avatar'/>
                    </div>
                    <div>
                        <button type='button' class='btn btn-success'>tao moi</button>
                    </div>

                </form>
            </div>`

        )


    },
    afterRender: () => {
        const submitBtn = document.querySelector('.btn');
        submitBtn.addEventListener('click', async () => {
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
            await createProduct(submitData);
            window.location.replace('/products');
        });
    }
};
export default ProductAdd;