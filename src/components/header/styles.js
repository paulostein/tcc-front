import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  height: var(--toolbar-height);
  background-color: var(--color-primary);
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 1px 7px 0px var(--color-dark);
  position: fixed;
  z-index: 1;

  .logo {
    color: var(--color-white);
    text-decoration: none;
    margin: 0 30px;
    font-size: 36px;
    text-shadow: 5px 5px 15px var(--color-secondary);
    font-weight: bold;
  }
`;

export const Dropdown = styled.div`
  margin: 0 5px;
  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    box-shadow: 0px 1px 7px 0px var(--color-dark);
    z-index: 1;
    border-radius: 8px;
    padding: 5px;
    margin-left: -100px;
    width: 200px;
  }

  .dropdown-content .button {
    float: none;
    padding: 12px 16px 12px 6px;
    text-decoration: none;
    text-align: left;
    cursor: pointer;
    font-size: 18px;
    margin: 2px 0;
    display: flex;
    font-weight: 300;
    align-items: center;

    .icon {
      margin: 0 10px;
      color: #555;
    }

    a {
      text-decoration: none;
      color: inherit;
    }
  }

  .dropdown-content .button:hover {
    background-color: #ddd;
    border-radius: 8px;
  }

  :hover .dropdown-content {
    display: inline-block;
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
  margin: 0 30px;
  font-weight: bold;
`;
