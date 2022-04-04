import styled from 'styled-components';
import Modal from 'styled-react-modal';
import bgzin from '../../assets/bgzin.jpg';

export const UsersContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  .testeModal {
    background-color: red;
  }
`;

export const UsersContent = styled.div`
  background-image: url(${bgzin});
  background-size: cover;
  height: 850px;
  width: 900px;
  border-radius: 8px;
  box-shadow: 0px 1px 7px 0px var(--color-dark);

  .title {
    width: 100%;
    padding-top: 30px;
    h1 {
      display: inline;
      color: var(--color-white);
      border-bottom: 3px solid var(--color-secondary);
      margin-left: 30px;
    }
  }
`;

export const UsersListHeader = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 20px;

  button {
    margin-right: 20px;
    border: none;
    color: var(--color-white);
    background-color: var(--color-secondary);
    border-radius: 8px;
    width: 60px;
    border: 1px solid var(--color-white);
    padding: 5px 0;
    font-weight: bold;
  }

  button:hover {
    opacity: 0.6;
    transition: 0.8s;
  }
`;

export const UsersListBody = styled.div`
  height: 670px;
  margin: 30px;
  padding: 20px;
  display: flex;
  align-items: flex-start;
  justify-content: center;

  table {
    width: 90%;
    color: var(--color-white);

    tbody {
      background-color: rgba(0, 0, 0, 0.1);
      text-align: center;

      .delete {
        cursor: pointer;
      }
    }
  }
`;

export const StyledModal = Modal.styled`
  width: 20rem;
  height: 20rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: blue;
`;
