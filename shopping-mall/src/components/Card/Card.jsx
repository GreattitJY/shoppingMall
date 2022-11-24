import { ProductImg } from "./ProductImg/ProductImg"
import { ProductName } from "./ProductName/ProductName"
import { ProductPrice } from "./ProductPrice/ProductPrice"

export const Card = ({productName, thumbnailImg, price}) => {
    return (
        <>
            <ll>
                <ProductImg {...{productName, thumbnailImg}}/>
                <ProductName {...{productName}} />
                <ProductPrice {...{price}} />
            </ll>
        </>
    )
}