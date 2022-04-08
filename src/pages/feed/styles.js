import styled from 'styled-components';
import Modal from 'styled-react-modal';

export const FeedContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const FeedContent = styled.div`
  background-size: cover;
  height: 100%;
  width: 900px;
`;

export const CreatePost = styled.div`
  height: 90px;
  padding: 25px;
  display: flex;
  background-color: var(--color-primary);
  margin-top: 30px;
  border-radius: 8px;

  .create-post {
    width: 90%;
    height: 48px;
    padding: 15px;
    text-align: left;
    border-radius: 12px;
    border: none;
    background-color: rgba(0, 0, 0, 0.2);
    color: var(--color-white);
  }
`;

export const Profile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--color-white);
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: var(--color-secondary);
  font-size: 18px;
  margin: 0 15px;
  font-weight: bold;
`;

export const StyledModal = Modal.styled`
  width: 34rem;
  height: 24rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: var(--color-primary);
  border-radius: 4px;
  margin-left: 220px;
`;

export const ModalHeader = styled.div`
  width: 100%;
  border-bottom: 2px solid rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  .title {
    color: var(--color-white);
    font-size: 28px;
    padding: 10px;
  }

  .cancel {
    color: rgba(0, 0, 0, 0.4);
    position: absolute;
    right: 0;
    margin-right: 15px;
    font-size: 32px;
    cursor: pointer;
  }
`;

export const ModalProfile = styled.div`
  display: flex;
  width: 100%;
  padding: 10px 0;

  .options {
    display: flex;
    flex-direction: column;

    span {
      color: white;
    }

    select {
      background-color: rgba(0, 0, 0, 0.3);
      border: none;
      color: var(--color-white);
      padding: 5px 0;
      border-radius: 4px;
    }
  }
`;

export const ModalContent = styled.div`
  width: 93%;
  height: 200px;
  border: 2px solid rgba(0, 0, 0, 0.2);

  textarea {
    width: 100%;
    height: 85%;
    border: none;
    font-size: 20px;
    background-color: var(--color-primary);
    color: var(--color-white);
    resize: none;
    border-radius: 4px;
  }

  div {
    width: 100%;
    display: flex;
    text-align: center;
    justify-content: flex-end;
    padding: 0 10px 10px 0;

    input[type='file'] {
      display: none;
    }

    label {
      cursor: pointer;

      .input-image {
        font-size: 20px;
      }
    }
  }
`;

export const ImageName = styled.div`
  color: white;
  font-size: 14px;
  overflow: hidden;
`;

export const ModalFooter = styled.div`
  width: 100%;
  height: 40px;
  padding: 0 15px;

  button {
    width: 100%;
    margin: 10px 0;
    padding: 10px 0;
    background-color: rgba(0, 0, 0, 0.3);
    border: none;
    color: var(--color-white);
    border-radius: 8px;

    &:disabled {
      background-color: rgba(0, 0, 0, 0.1);
      cursor: auto;
    }
  }
`;
