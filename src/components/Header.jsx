import React, { useEffect } from 'react';
import styled from 'styled-components';
import DropDown from './DropDown';
import DropDownItem from './DropDownItem';

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #ff9898;
  border-bottom: 3px solid #624cab;
  padding: 0 20px;
  width: 100vw;
  height: 40px;
`;

const Link = styled.a`
  background-color: #624cab;
  border-radius: 4px;
  color: #ececec;
  cursor: pointer;
  font-weight: bold;
  padding: 3px 10px;
  text-decoration: none;
`;

const Avatar = styled.img`
  border: 2px solid #624cab;
  border-radius: 50%;
  height: 33px;
  width: 33px;
  cursor: pointer;
  background-color: #624cab;
`;

const DropDownLead = styled.div`
  padding: 0 10px;
  margin: 10px 0;
  border-bottom: 1px solid #ececec;
`;

function Header() {
  const [showDropDown, setShowDropDown] = React.useState(false);
  const dropDownRef = React.useRef();
  function handleClickOutside(event) {
    if (
      !showDropDown
      && dropDownRef.current
      && !dropDownRef.current.contains(event.target)
    ) {
      setShowDropDown(false);
    }
  }
  useEffect(() => {
    document.addEventListener('mouseup', handleClickOutside);
    return () => document.removeEventListener('mouseup', handleClickOutside);
  }, []);

  return (
    <HeaderContainer>
      <Link href="https://github.com/explore">Explore</Link>
      <Avatar
        src="https://avatars3.githubusercontent.com/u/17098981?s=460&v=4"
        onClick={() => setShowDropDown(true)}
      />
      {showDropDown && (
        <DropDown ref={dropDownRef} top={40} right={8} position="top">
          <DropDownLead>
            Signed in as
            {' '}
            <strong>user</strong>
          </DropDownLead>
          <DropDownItem href="settings">Settings</DropDownItem>
          <DropDownItem>Logout</DropDownItem>
        </DropDown>
      )}
    </HeaderContainer>
  );
}

export default Header;
