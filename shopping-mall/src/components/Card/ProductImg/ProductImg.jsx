export const ProductImg = ({productName, thumbnailImg}) => {
    const url = "http://test.api.weniv.co.kr/" + thumbnailImg;
    return (
        <img src={url} alt={productName} />
    )
}