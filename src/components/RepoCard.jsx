import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  background-color: #ff9898;
  max-width: 100%;
  border-radius: 5px;
  padding: 10px 30px;
  margin: 10px;
`;

const Link = styled.a`
  font-size: 1.5rem;
  font-weight: 700;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  height: 100%;
  text-decoration: none;
  color: #624cab;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Label = styled.span`
  border-radius: 2em;
  font-size: 0.8rem;
  font-weight: normal;
  padding: 1px 5px;
  margin-left: 5px;
  height: 23px;
  border: 1px solid #624cab;
`;

function RepoCard({ repo }) {
  return (
    <Container>
      <Wrapper>
        <Link href={repo.html_url}>{repo.name}</Link>
        <Label>{repo.private ? 'Private' : 'Public'}</Label>
      </Wrapper>
      {repo.description && <p>{repo.description}</p>}
    </Container>
  );
}

export default RepoCard;

RepoCard.propTypes = {
  repo: propTypes.shape({
    name: propTypes.string.isRequired,
    html_url: propTypes.string.isRequired,
    description: propTypes.string,
    private: propTypes.bool.isRequired,
  }).isRequired,
};
