import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  height: 60px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 1px 1px 5px #fc6767;

  .logo {
    color: #e66767;
    text-decoration: none;
    margin: 0 20px;
    font-size: 36px;
    text-shadow: 5px 5px 10px black;
    font-weight: bold;
  }
`;

export const Dropdown = styled.div`
  margin: 0 30px;

  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    box-shadow: 1px 1px 5px #fc6767;
    z-index: 1;
    border-radius: 8px;
  }

  .dropdown-content a,
  .dropdown-content div {
    float: none;
    color: #e66767;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    text-align: left;
    cursor: pointer;
    font-size: 18px;
  }

  .dropdown-content a:hover,
  .dropdown-content div:hover {
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
  color: white;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: #ea8685;
  font-size: 18px;
  margin: 0 30px;
`;
