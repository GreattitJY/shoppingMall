import { ProductHeartBtnStyle } from "./ProductHeartBtnStyle"
import { useState } from "react"

export const ProductHeartBtn = () => {
    const [heart, setHeart] = useState(true)

    return <ProductHeartBtnStyle onClick={()=>{setHeart(!heart)}} {...{heart}} ></ProductHeartBtnStyle>
}