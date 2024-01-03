import styled from 'styled-components';

export const StyledSlider = styled.div`
    width: 100%;
    height: 100vh;
    max-width: 1200px;
    position: relative;
    top: 0;

    .react-multi-carousel-dot-list {
        transform: translateY(-30px);
    }
    .react-multi-carousel-dot--active button {
        background-color: rgba(224,224,224,0.90);
    }
    .react-multiple-carousel__arrow {
        z-index: auto;
    }
    .slides {
        width: 100%;
        height: 100%;
        display: flex;
        background-color: #000;
    }
    .slides input {
        display: none;
    }
    .slides ul {
        height: 100%;
        justify-content: center;
    }
    .slider {
        color: #fff;
    }
    .slider-item {
        display: block;
        width: 100%;
        height: 100%;
        position: relative;
    }
    .slide-image {
        width: auto;
        height: 100%;
        background-image: url(${({bg}) => bg});
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
    }
    .metadata {
        position: absolute;
        bottom: 0;
        padding: 10px 20px 60px 20px;
        margin: 15px 20px;
        background-color: rgba(0,0,0,0.5);
    }
    .metadata div {
        display: flex;
        margin: 0;
        align-items: center;
        padding: 5px;
    }
    .slider-item h1 {
        margin: 0;
        padding-bottom: 5px;
        font-family: "Recoleta", serif;
        font-size: 2em;
        line-height: 1.15;
        color: #fff;
    }
    .slider-source {
        background-color: #ffd700;
        color: #000;
        font-size: 0.75em;
        font-weight: 800;
        padding: 5px;
        margin: 0;
    }
    .slider-author-date {
        padding: 5px 0 5px 10px;
        margin: 0;
        color: #efefef;
        font-size: 0.75em;
        font-family: "Courier New", monospace;
    }
    .slider-description {
        margin: 0;
        font-size: 1em;
        color: #fff;
    }
    button {
        border: none;
        padding: 7px;
        background-color: rgba(224,224,224,0.5);
        margin-right: 15px;
    }

    @media (min-width: 600px) {
        flex-grow : 1;
        padding: 0 40px;
        margin: 10px auto 20px;
        height: calc(100vh - 175px);
    }
`