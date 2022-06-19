import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { ForkIcon, StarIcon } from '../assets/icons';

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
  align-items: center;
  display: flex;
  align-items: center;
  margin: 0 2px;
  padding: 0.5em 1em;
  height: 23px;
  font-weight: 700;
  background-color: #624cab;
  color: #ececec;
`;

function RepoCard({ repo }) {
  return (
    <Container>
      <Wrapper>
        <Link href={repo.html_url}>{repo.name}</Link>
      </Wrapper>
      {repo.description && <p>{repo.description}</p>}
      <Wrapper>
        <Label>{repo.private ? 'Private' : 'Public'}</Label>
        <Label>
          { repo.stargazers_count }
          <StarIcon color="#cecece" size={15} />
        </Label>
        <Label>
          { repo.forks }
          <ForkIcon color="#cecece" size={15} />
        </Label>
      </Wrapper>
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
    forks: propTypes.number.isRequired,
    stargazers_count: propTypes.number.isRequired,
  }).isRequired,
};
