import { getProducts, getProduct} from "../api/product";

const ProductDetail ={
    render: async (id)=>{
        const response = await getProduct(id);
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

export default ProductDetail;