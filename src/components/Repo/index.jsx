import { RepoContainer } from './styled'

export  function Repo({repos, handleRemoveRepos}) {
  
  return (
    <RepoContainer>
      <h3>{repos?.name ?? "Nome do repositório"}</h3>
        <p>{repos?.description ?? "Sem decrição"}</p>
        <a  href={repos?.html_url} target="_blank">Ver repositório</a>
        <br />
        <button className="remover" onClick={() => handleRemoveRepos(repos?.id)}>Remover</button>
        <hr />
    </RepoContainer>
  )
}
