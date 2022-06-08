import { getProducts, getProduct, deleteProduct } from '../api/product';
import reRender from '../helpers/reRender';


const Product = {
        render: async() => { // đã đóng ngoặc nhọn phải có return ở trong
                // 1. fetch là phương thức dùng để lấy dữ liệu từ phía BE
                // 2. fetch trả về 1 Promise => sẽ có await ở trước fetch để chờ kq
                // 3. fetch nhận vào đường dẫn API endpoint của BE
                //  const response1 = await fetch('https://6291d401cd0c91932b689dbb.mockapi.io/Products');
                // 3.2 sử dụng axios đã đc khởi tạo và snh ra hàm getProduct

                const response = await getProducts();
                const { data } = response;
                // 4. lần đợi fetch đầu tiên sẽ trả về obj Response
                console.log('response', response);
                // 5. lần đợi tiếp theo là response trả dữ liệu về dạng json
                // const Products = await response.json();
                // console.log('Products', Products);

                return `<div>   
            ${
                data.map((product) => (
                    `<div>
                        <div>ID: ${product.id}</div>
                        <div>Name: ${product.name}</div>
                        <div>Avatar: ${product.avatar}</div>
                        <div>Description: ${product.des}</div>
                        <div>Price: ${product.price}</div>
                        <div>Status: ${product.status}</div>
                        <div>
                            <a href="/products/detail/${product.id}">
                                 <button class="btn btn-primary"> Chi tiết</button>
                            </a>
                            <button class="btn btn-danger" data-id="${product.id}" data-name="${product.name}">Xóa </button>
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
                await deleteProduct(btnId);
                // window.location.reload(); lam nhu nay se bi tai lai het tat ca
                await reRender('#content', Product);
            });
        });
    }
};

export default Product;