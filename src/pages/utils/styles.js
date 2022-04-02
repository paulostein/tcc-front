import styled from 'styled-components';
import bgzin from '../../assets/bgzin.jpg';

export const UtilsContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const UtilsList = styled.div`
  background-image: url(${bgzin});
  background-size: contain;
  height: 95%;
  width: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  box-shadow: 0px 1px 7px 0px var(--color-dark);

  ul {
    padding: 40px;
    list-style: none;

    li {
      font-size: 22px;
      color: var(--color-white);
      padding: 20px;
      margin: 50px 0;
      border-bottom: 2px solid var(--color-secondary);

      span {
        padding-right: 30px;
      }

      a {
        color: var(--color-white);
        text-decoration: underline;
        padding: 10px 20px;
        border-radius: 4px;
        background-color: rgba(0, 0, 0, 0.3);
      }

      a:hover {
        background-color: rgba(0, 0, 0, 0.1);
        color: var(--color-secondary);
      }
    }
  }
`;
