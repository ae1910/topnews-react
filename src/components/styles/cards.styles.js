import styled from 'styled-components';

export const StyledCards = styled.div`
    display: flex;
    flex-wrap: wrap;
    
    .main-card {
        width:100%;
        display: flex;
        flex-direction: column-reverse;
        text-decoration: none;
        padding: 20px 0 10px 0;
    }
    .card-top-row {
        display: flex;
        justify-content: space-between;
        font-weight: 800;
        align-items: center;
        padding-bottom: 5px;
    }
    .card-top-row p {
        margin: 0;
        color: #000;
        font-size: 0.7em;
    }
    .card-metadata h1 {
        margin: 0;
        padding-bottom: 5px;
        color: #000;
        font-family: "Recoleta", serif;
        font-size: 2em;
        line-height: 1.15;
    }
    .card-description {
        margin: 0;
        padding-bottom: 5px;
        color: #000;
        font-size: 1em;
        line-height: 1.1;
    }
    .card-date {
        color: #000;
        margin: 0;
        font-size: 0.75em;
        font-family: 'Courier New', Courier, monospace;
        text-align: end;
    }
    .main-card .card-image {
        grid-column: span 9;
        width: 100%;
        margin: auto 0;
        padding-bottom: 5px;
    }

    .preview-card {
        width: 100%;
        text-decoration: none;
        padding: 10px 0;
    }
    .preview-card .card-image {
        width: 100%;
        padding-bottom: 5px;
    }
    .preview-card .card-metadata h1 {
        margin: 0;
        padding-bottom: 5px;
        color: #000;
        font-family: "Recoleta", serif;
        font-size: 1.5em;
        line-height: 1.15;
    }
    .preview-card .card-top-row p {
        font-size: 0.7em;
    }

    @media (min-width: 600px) {
        justify-content: space-between;

        .main-card {
            padding: 20px 0 60px;
        }
        .preview-card {
            width: 31%;
            padding: 0 0 40px;
        }
        .preview-card .card-top-row p {
            font-size: 0.6em;
        }
    }

    @media (min-width: 740px)  {
        .main-card {
            display: grid;
            grid-column-gap: calc(1rem * 2 + 1px);
            grid-template-columns: repeat(14,1fr);
        }
        .main-card .card-metadata {
            grid-column: span 5;
        }
        .main-card .card-image {
            grid-column: span 9;
            padding: 0;
        }
}
`