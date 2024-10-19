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
    font-family: "Inter", sans-serif, "Roboto Mono", monospace;
    font-optical-sizing: auto;
    font-weight: 400;
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
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  background-color: #3498db;
  color: #fff;
  border: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: #2980b9;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;

  @media (max-width: 768px) {
    padding: 0.5rem;
  }

  @media (max-width: 480px) {
    padding: 0.25rem;
  }
`;

export const Paragraph = styled.p`
  margin-bottom: 1rem;

  @media (max-width: 600px) {
    font-size: 0.9rem;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 1rem;

  @media (max-width: 600px) {
    padding: 0.8rem;
  }
`;
