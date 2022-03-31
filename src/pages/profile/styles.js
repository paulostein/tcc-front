import styled from 'styled-components';
import bgzin from '../../assets/bgzin.jpg';

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: calc(100vh - var(--toolbar-height));

  .contents {
    background-image: url(${bgzin});
    background-size: cover;
    border: 2px solid var(--color-secondary);
    width: 500px;
    padding: 50px;
    margin-top: 120px;
    border-radius: 8px;
  }
`;

export const Content = styled.div`
  margin: 10px;
  display: flex;
  flex-direction: column;
  color: white;

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
