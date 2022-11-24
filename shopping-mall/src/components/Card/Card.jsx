import { ProductImg } from "./ProductImg/ProductImg"
import { ProductName } from "./ProductName/ProductName"
import { ProductPrice } from "./ProductPrice/ProductPrice"

export const Card = () => {
    return (
        <>
            <ll>
                <ProductImg />
                <ProductName />
                <ProductPrice />
            </ll>
        </>
    )
}