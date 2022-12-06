import { ProductImg } from "./ProductImg/ProductImg"
import { ProductName } from "./ProductName/ProductName"
import { ProductPrice } from "./ProductPrice/ProductPrice"
import { ProductHeartBtn } from "./ProductHeartBtn/ProductHeartBtn"
import { CardLiStyle } from "./CardStyle"
import { useState } from "react"
import { Modal } from "./Modal/Modal"

export const Card = (props) => {

    const [isModal, setIsModal] = useState(false)
    const handleModal = (e) => {
        setIsModal(!isModal)
    }

    return (
        <>
            <CardLiStyle onClick={handleModal}>
                <ProductImg 
                    productName={props.productName}
                    thumbnailImg={props.thumbnailImg}
                />
                <ProductName 
                    productName={props.productName}
                />
                <ProductHeartBtn />
                <ProductPrice
                    price={props.price}
                />
            </CardLiStyle>
            { isModal ?<Modal {...props} {...{setIsModal}} /> :<></>}
                
        </>
    )
}