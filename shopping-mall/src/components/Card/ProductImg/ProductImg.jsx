import { ProductImgStyle } from "./ProductImgStyle";

export const ProductImg = ({productName, thumbnailImg}) => {
    const url = "http://test.api.weniv.co.kr/" + thumbnailImg;
    return (
        <ProductImgStyle src={url} alt={productName} />
    )
}