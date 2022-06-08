import { getProducts, getProduct } from "../api/product";
import { formatMoney, formatStatus } from "../helpers/format";

const ProductDetail = {
    render: async(id) => {
        const response = await getProduct(id);
        const { data } = response;

        return (
            `<div>
            <div>
                <div> ID: ${data.id}</div>
                <div> Tên: ${data.name}</div>
                <div> Mô tả: ${data.des}</div>
                <div> Giá: ${formatMoney(data.price)}</div>
                <div>Trạng thái: ${formatStatus(data.status)}</div>
            </div>
        </div>`
        );
    }
}

export default ProductDetail;