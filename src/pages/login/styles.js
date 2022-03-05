import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100vh;
`;

export const ImageContent = styled.div`
  flex: 2;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const LoginBox = styled.div`
  flex: 1;
  background-color: white;
  padding: 36px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    color: #ff0054;
    margin-bottom: 8px;
    font-size: 48px;
  }

  span {
    font-size: 12px;
    color: #474342;
  }

  button {
    font-size: 17px;
    color: white;
    margin-top: 24px;
    padding: 5px;
    border-radius: 4px;
    border: none;
    font-weight: bold;
    background: #ec008c;
    background: -webkit-linear-gradient(to right, #fc6767, #ec008c);
    background: linear-gradient(to right, #fc6767, #ec008c);
    padding: 12px 48px;
  }

  button:hover {
    opacity: 0.6;
    transition: 0.8s;
  }
`;

export const FormInput = styled.div`
  div {
    font-size: 14px;
    margin-top: 32px;
    font-weight: bold;
  }

  input {
    width: 100%;
    font-size: 17px;
    padding: 10px 10px 10px 0px;
    border: none;
    border-bottom: 1px solid lightgray;
    font-size: 14px;
    margin-top: 8px;
  }

  input::placeholder {
    color: lightgray;
  }

  input:focus {
    border-bottom: 1px solid #ec008c;
  }
`;

export const LoginDetails = styled.div`
  margin-top: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  label {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    cursor: pointer;

    input {
      height: 16px;
      width: 16px;
      -webkit-appearance: none;
      -moz-appearance: none;
      -o-appearance: none;
      appearance: none;
      border: 1px solid #fc6767;
      border-radius: 4px;
      outline: none;
      transition-duration: 0.3s;
      cursor: pointer;
      background-color: white;
    }

    input:checked {
      border: 1px solid #fc6767;
      background-color: #ec008c;
    }

    input:checked + span::before {
      content: '\\2713';
      display: block;
      text-align: center;
      color: white;
      position: absolute;
      left: 4px;
      bottom: 1px;
    }

    span {
      margin-left: 4px;
    }
  }

  a {
    text-decoration: none;
    color: #ec008c;
    font-weight: bold;
    font-size: 12px;
  }
`;
