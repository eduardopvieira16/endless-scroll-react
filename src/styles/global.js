import styled, { createGlobalStyle } from "styled-components";
import normalize from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: "Roboto Mono", monospace, "Inter", sans-serif;
    font-optical-sizing: auto;
    font-weight: weight;
    font-style: normal;

    line-height: 1.6;
    background-color: #f4f4f4;
    color: #333;
  }

  h1, h2, h3, h4, h5, h6 {
    margin-bottom: 1rem;
    color: #2c3e50;
  }

  a {
    color: #3498db;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Button = styled.button`
  background-color: #3498db;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #2980b9;
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -0.5rem;
`;

export const Col = styled.div`
  flex: 1;
  padding: 0.5rem;
  min-width: 200px;

  @media (max-width: 1200px) {
    flex: 50%;
  }

  @media (max-width: 768px) {
    flex: 100%;
  }
`;

export const Paragraph = styled.p`
  margin-bottom: 1rem;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 1rem;
`;

export const Textarea = styled.textarea`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 1rem;
`;

export const MobileStyles = createGlobalStyle`
  @media (max-width: 480px) {
    body {
      padding: 1rem;
    }

    h1 {
      font-size: 1.5rem;
    }

    h2 {
      font-size: 1.25rem;
    }

    ${Button} {
      width: 100%;
    }
  }
`;
