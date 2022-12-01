import { ProductImg } from "./ProductImg/ProductImg"
import { ProductName } from "./ProductName/ProductName"
import { ProductPrice } from "./ProductPrice/ProductPrice"
import { ProductHeartBtn } from "./ProductHeartBtn/ProductHeartBtn"
import { CardLiStyle } from "./CardStyle"

export const Card = ({productName, thumbnailImg, price}) => {
    return (
        <>
            <CardLiStyle>
                <ProductImg {...{productName, thumbnailImg}}/>
                <ProductName {...{productName}} />
                <ProductHeartBtn></ProductHeartBtn>
                <ProductPrice {...{price}} />
            </CardLiStyle>
        </>
    )
}