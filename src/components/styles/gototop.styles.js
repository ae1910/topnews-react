import styled from "styled-components";

export const StyledBtn = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;

    .top-btn {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 3.25rem;
        height: 3.25rem;
        position: fixed;
        bottom: 1.5rem;
        right: 1.5rem;
        font-size: 2.4rem;
        color: #fff;
        background-color: #000;
        box-shadow: none;
        border-radius: 50%;
        z-index: 999;
        cursor: pointer;
    }

    .icon {
        width: 30px;
    }
`