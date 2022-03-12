import React, { useEffect } from 'react';
import PageContainer from '../components/PageContainer';
import PageTitle from '../components/PageTitle';
import RepoCard from '../components/RepoCard';
import { getUserRepos } from '../services/githubApi';

function Repositories() {
  const [repositories, setRepositories] = React.useState([]);

  useEffect(() => {
    getUserRepos('alt-art').then(setRepositories);
  }, []);

  return (
    <PageContainer>
      <PageTitle>Repositories</PageTitle>
      {repositories.map((repository) => (
        <RepoCard key={repository.id} repo={repository} />
      ))}
    </PageContainer>
  );
}

export default Repositories;
