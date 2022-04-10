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
  min-height: 23rem;
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
  min-height: 170px;
  border: 2px solid rgba(0, 0, 0, 0.2);

  textarea {
    width: 100%;
    height: 130px;
    border: none;
    font-size: 20px;
    background-color: var(--color-primary);
    color: var(--color-white);
    resize: none;
    border-radius: 4px;
  }

  .image-attachment {
    width: 100%;
    display: flex;
    justify-content: center;

    img {
      max-width: 100%;
      padding: 10px;
    }
  }

  .attachment {
    width: 100%;
    display: flex;
    text-align: center;
    justify-content: flex-end;
    padding-right: 10px;

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
  height: 60px;
  padding: 0 15px;
  display: flex;
  align-items: flex-end;
  margin-bottom: 15px;

  button {
    width: 100%;
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

export const PostContent = styled.div`
  background-color: var(--color-primary);
  width: 100%;
  margin-top: 10px;
  border-radius: 4px;
  padding: 15px;
  display: flex;
  flex-direction: column;

  .profile {
    display: flex;
    border-bottom: 2px solid rgba(0, 0, 0, 0.2);
    padding: 10px 0;

    .info {
      width: 90%;
      display: flex;
      justify-content: space-between;
      color: var(--color-white);

      .post-info {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: space-between;
      }

      .post-delete {
        cursor: pointer;
        font-size: 18px;
      }
    }
  }

  .post-text {
    padding: 10px 15px 0 15px;
    color: var(--color-white);
    word-break: break-all;
  }

  .img-div {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      padding: 10px 15px 0 15px;
      height: auto;
      width: auto;
      max-height: 400px;
    }
  }
`;

export const WaitingPost = styled.div`
  background-color: var(--color-primary);
  width: 100%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  color: var(--color-white);
  border-radius: 8px;
`;
