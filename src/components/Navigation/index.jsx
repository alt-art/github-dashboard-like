import React from 'react';
import styled from 'styled-components';
import { PullRequestIcon, IssueIcon, RepoIcon } from '../../assets/icons';
import Item from './Item';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ff9898;
  width: 50px;
  height: calc(100% - 40px);
`;

function Navigation() {
  return (
    <Container>
      <Item>
        <RepoIcon size={20} color="#C3DBC5" />
      </Item>
      <Item>
        <PullRequestIcon size={20} color="#C3DBC5" />
      </Item>
      <Item>
        <IssueIcon size={20} color="#C3DBC5" />
      </Item>
    </Container>
  );
}

export default Navigation;
