import styled from 'styled-components';
import bgzin from '../../assets/bgzin.jpg';

export const UsersContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const UsersContent = styled.div`
  background-image: url(${bgzin});
  background-size: cover;
  height: 95%;
  width: 75%;
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
    border-radius: 12px;
    width: 70px;
    border: 2px solid var(--color-white);
    padding: 10px 0;
    font-size: 18px;
  }

  button:hover {
    opacity: 0.6;
    transition: 0.8s;
  }
`;
