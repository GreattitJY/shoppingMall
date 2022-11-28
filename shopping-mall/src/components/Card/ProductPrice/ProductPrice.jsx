import { ProducPriceStrongStyle } from "./ProductPriceStyle"
import { ProdcutPriceSpanStyle } from "./ProductPriceStyle"

export const ProductPrice = ({price}) => {
    return (
        <>
            <ProducPriceStrongStyle>{price}<ProdcutPriceSpanStyle>원</ProdcutPriceSpanStyle></ProducPriceStrongStyle>
        </>
    )
}