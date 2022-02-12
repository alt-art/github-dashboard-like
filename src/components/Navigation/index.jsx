import React from 'react';
import styled from 'styled-components';
import { PullRequestIcon, IssueIcon, RepoIcon } from '../../assets/icons';
import Item from './Item';

const Container = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ff9898;
  width: 50px;
  height: calc(100vh - 40px);
`;

function Navigation() {
  return (
    <Container>
      <Item alt="Repositories">
        <RepoIcon size={20} color="#ececec" />
      </Item>
      <Item alt="Pull Requests">
        <PullRequestIcon size={20} color="#ececec" />
      </Item>
      <Item alt="Issues">
        <IssueIcon size={20} color="#ececec" />
      </Item>
    </Container>
  );
}

export default Navigation;
