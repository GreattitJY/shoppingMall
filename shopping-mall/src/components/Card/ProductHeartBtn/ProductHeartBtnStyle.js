import styled from "styled-components";
const heartOff = `${process.env.PUBLIC_URL}/assets/images/icon-heart.svg`;
const heartOn = `${process.env.PUBLIC_URL}/assets/images/icon-heart-on.svg`;
export const ProductHeartBtnStyle = styled.button`
    width: 22px;
    height: 22px;
    border: none;
    background: ${(props) => (props.heart ? `url(${heartOff}) no-repeat center / contain` : `url(${heartOn}) no-repeat center / contain`)};
    position: absolute;
    right: 0;
    bottom: 40px;
`;
