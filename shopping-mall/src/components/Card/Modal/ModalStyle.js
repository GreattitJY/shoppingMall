import styled from "styled-components";

export const ModalBackgroundSectionStyle = styled.section`
    z-index: 10;
    position: fixed;
    inset: 0;
    display: flex;
    justify-content: center;
    background-color: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(2px);
`;
