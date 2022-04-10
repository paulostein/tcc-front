import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100vh;
`;

export const ImageContent = styled.div`
  flex: 2;
  height: 100%;
  filter: blur(2px);

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

  img {
    margin: 25px 0;
    width: 100%;
  }

  h1 {
    color: var(--color-primary);
    margin-bottom: 8px;
    font-size: 48px;
  }

  span {
    font-size: 12px;
    color: grey;
  }

  button {
    font-size: 17px;
    color: white;
    margin-top: 24px;
    padding: 5px;
    border-radius: 4px;
    border: none;
    font-weight: bold;
    background: linear-gradient(
      to right,
      var(--color-primary),
      var(--color-primary)
    );
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
    border-bottom: 1px solid var(--color-primary);
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
      border: 1px solid var(--color-primary);
      border-radius: 4px;
      outline: none;
      transition-duration: 0.3s;
      cursor: pointer;
      background-color: white;
    }

    input:checked {
      border: 1px solid var(--color-primary);
      background-color: var(--color-primary);
    }

    input:checked + span::before {
      content: '\\2713';
      display: block;
      text-align: center;
      color: white;
      position: absolute;
      left: 7.5px;
      bottom: 2px;
    }

    span {
      margin-left: 4px;
    }
  }

  .forgot-password {
    text-decoration: none;
    color: var(--color-primary);
    font-weight: bold;
    font-size: 12px;
    cursor: pointer;
  }
`;
