import styled from 'styled-components';
import people from '../../assets/people.jpg';

export const Container = styled.div`
  margin-left: 220px;
  background-image: url(${people});
  background-size: cover;
  background-position: center;
  height: calc(100vh - var(--toolbar-height));

  .children {
    backdrop-filter: blur(8px) grayscale(100%) brightness(1.5);
    height: 100%;
    border: none;
  }
`;
