import { useRef } from "react"
import { ModalBackgroundSectionStyle } from "./ModalStyle"


export const Modal = (props) => {

    const url = `https://test.api.weniv.co.kr/${props.thumbnailImg}`
    const modalRef = useRef()

    const handleModal = (e) => {
        if (e.target === modalRef.current) {
            props.setIsModal(false)
        }
    }

    return (
            <ModalBackgroundSectionStyle ref={modalRef} onClick={handleModal}>
                <section>
                    <img src={url} alt="" />
                    <div>
                        <p>${props.productName}</p>
                        <p>${props.price}</p>
                    </div>
                </section>
            
            </ModalBackgroundSectionStyle>
    )
}