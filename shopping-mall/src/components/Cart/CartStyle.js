import styled from "styled-components";
import { Link } from "react-router-dom";

const CartIcon = `${process.env.PUBLIC_URL}/assets/images/icon-shopping-cart-white.svg`;
export const CartLinkStyle = styled(Link)`
    display: block;
    position: sticky;
    top: 0;
    width: 80px;
    height: 80px;
    transform: translateX(60px);
    border-radius: 50%;
    background: #6327fe url(${CartIcon}) no-repeat center / 40px 40px;
`;
