import styled from 'styled-components';
import bgzin from '../../assets/bgzin.jpg';

export const ProfileContainer = styled.div`
  height: calc(100vh - var(--toolbar-height));
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    color: var(--color-white);
    border-bottom: 3px solid var(--color-secondary);
    display: inline;
    margin: 30px;
  }

  .container {
    background-image: url(${bgzin});
    background-size: cover;
    width: 500px;
    border-radius: 5px;
    box-shadow: 0px 1px 7px 0px var(--color-dark);
    padding-top: 30px;

    .contents {
      padding: 15px 50px 50px 50px;
    }
  }
`;

export const Content = styled.div`
  margin: 10px;
  display: flex;
  flex-direction: column;
  color: white;
  border-bottom: 1px solid var(--color-white);

  .user-label {
    padding: 5px 0;
    margin: 5px;
    font-size: 14px;
    font-weight: 300;
  }

  .user-info {
    padding: 5px 20px;
    font-size: 20px;
  }
`;
