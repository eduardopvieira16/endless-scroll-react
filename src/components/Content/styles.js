import styled from 'styled-components';

export const Container = styled.div`
    grid-area: CT;
    color: #333;
    background-color: #f4f4f4;

    padding: 20px;
    height: calc(100vh - 70px);
    overflow-y: auto;

    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

    ::-webkit-scrollbar {
        width: 10px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: red;
        border-radius: 10px;
    }

    ::-webkit-scrollbar-track {
        background-color: blue;
    }
`;
