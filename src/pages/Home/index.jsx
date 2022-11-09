import { useState, useRef } from "react";
import git from "../../assets/git.svg";
import { Input } from "../../components/Input";
import { Repo } from "../../components/Repo";
import { ContainerHome } from "./styled";
import api from "../../services/api";

export function Home() {
  const [user, setUser] = useState("");
  const [repos, setRepos] = useState([]);
  const inputRef = useRef(null);

  const dataRepos = async () => {
    try {
      const response = await api.get(`/users/${user}/repos`);
      setRepos(response.data);
      inputRef.current.value = "";
      setUser("");
      inputRef.current.focus();
    } catch (error) {
      alert("Usuário inválido");
    }
  };

  const handleRemoveRepos = (id) => {
    const newRepos = repos.filter((item) => item.id !== id);
    setRepos(newRepos);
  };

  return (
    <ContainerHome>
      <img src={git} alt="github logo" />
      <Input
        ref={inputRef}
        placeholder="Digite o nome do usuário..."
        onChange={(e) => setUser(e.target.value)}
        value={user}
        dataRepos={dataRepos}
      />
      {repos.length === 0
        ? "Repositórios"
        : repos.map((repo) => {
            return (
              <Repo
                key={repo.id}
                repos={repo}
                handleRemoveRepos={handleRemoveRepos}
              />
            );
          })}
    </ContainerHome>
  );
}
