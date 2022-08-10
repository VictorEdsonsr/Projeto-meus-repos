import { useEffect, useState } from "react";
import { Container, Owner, Loading, BackButton } from "./style.js";
import { useParams } from "react-router-dom";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import api from "../../services/api";

export const Repositorios = () => {
  const { reposId } = useParams();
  const [repositorio, setRepositorio] = useState({});
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const response = reposId;

      const [repositorioData, issuesData] = await Promise.all([
        api.get(`/repos/${response}`),
        api.get(`/repos/${response}/issues`, {
          params: {
            state: "open",
            per_page: 5,
          },
        }),
      ]);

      setRepositorio(repositorioData.data);
      setIssues(issuesData.data);
      setLoading(false);

      console.log(repositorio);
    }

    load();
  }, [reposId]);

  if (loading) {
    return <Loading>Carregando...</Loading>;
  }

  return (
    <Container>
      <BackButton to="/">
        <FaArrowAltCircleLeft color="rgba(17, 77, 77, 1)" size={20} />
      </BackButton>
      <Owner>
        <img src={repositorio.owner.avatar_url} alt={repositorio.full_name} />
        <h1>{repositorio.name}</h1>
        <p>{repositorio.description}</p>
      </Owner>
    </Container>
  );
};
