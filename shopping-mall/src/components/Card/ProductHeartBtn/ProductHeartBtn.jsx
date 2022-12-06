import { ProductHeartBtnStyle } from "./ProductHeartBtnStyle"
import { useState } from "react"

export const ProductHeartBtn = () => {
    const [heart, setHeart] = useState(true)

    const handleHeart = (e) => {
        setHeart(!heart);
        e.stopPropagation();
    }

    return <ProductHeartBtnStyle onClick={handleHeart} {...{heart}} ></ProductHeartBtnStyle>
}