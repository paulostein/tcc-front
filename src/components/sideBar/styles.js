import styled from 'styled-components';
import bg from '../../assets/bg.jpg';

export const Container = styled.div`
  background-color: var(--color-primary);
  width: 220px;
  height: calc(100% - var(--toolbar-height));
  position: fixed;
  overflow-x: hidden;
  padding: 20px 10px 0 10px;
  display: flex;
  flex-direction: column;
  z-index: -1;
  justify-content: space-between;
  background-image: url(${bg});

  a {
    text-decoration: none;
    color: var(--color-white);
    width: 100%;
  }

  .icon {
    color: var(--color-white);
    font-size: 22px;
    margin: 0 10px;
  }

  .option {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px 0;
    margin: 2px 0;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    border-left: solid 4px var(--color-secondary);

    &.selected {
      background-color: rgba(255, 255, 255, 0.05);
    }
  }

  .option:hover {
    color: var(--color-primary);
    background-color: rgba(0, 0, 0, 0.1);
  }

  .socials {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border-top: solid 1px var(--color-white);
    padding: 20px 0px 10px;
  }
`;
