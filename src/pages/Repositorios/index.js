import { useEffect, useState } from "react";
import {
  Container,
  Owner,
  Loading,
  BackButton,
  IssuesList,
  ButtonsActions,
  FilterButtons,
} from "./style.js";
import { useParams } from "react-router-dom";
import {
  FaArrowAltCircleLeft,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";
import api from "../../services/api";

export const Repositorios = () => {
  const { reposId } = useParams();
  const [repositorio, setRepositorio] = useState({});
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pages, setPages] = useState(1);
  const [filters, setFilters] = useState([
    { state: "all", label: "Todas", active: false },
    { state: "open", label: "Abertas", active: false },
    { state: "closed", label: "Fechadas", active: true },
  ]);
  const [filterIndex, setFilterIndex] = useState(0);

  useEffect(() => {
    async function load() {
      const response = reposId;

      const [repositorioData, issuesData] = await Promise.all([
        api.get(`/repos/${response}`),
        api.get(`/repos/${response}/issues`, {
          params: {
            state: filters.find((f) => f.active).state,
            per_page: 5,
          },
        }),
      ]);

      setRepositorio(repositorioData.data);
      setIssues(issuesData.data);
      setLoading(false);
    }

    load();
  }, [reposId]);

  const handleAction = (action) => {
    setPages(action === "back" ? pages - 1 : pages + 1);
  };

  useEffect(() => {
    async function loading() {
      const nomeRepo = reposId;

      const response = await api.get(`/repos/${nomeRepo}/issues`, {
        params: {
          state: filters[filterIndex].state,
          page: pages,
          per_page: 5,
        },
      });

      setIssues(response.data);
    }

    loading();
  }, [reposId, pages, filters, filterIndex]);

  function handleFilter(index) {
    setFilterIndex(index);
  }

  if (loading) {
    return <Loading>Carregando...</Loading>;
  }

  return (
    <Container>
      <BackButton to="/">
        <FaArrowAltCircleLeft color="rgba(17, 77, 77, 1)" size={50} />
      </BackButton>
      <Owner>
        <img src={repositorio.owner.avatar_url} alt={repositorio.full_name} />
        <h1>{repositorio.name}</h1>
        <p>{repositorio.description}</p>
      </Owner>

      <FilterButtons active={filterIndex}>
        {filters.map((filter, index) => (
          <button
            key={filter.label}
            type="button"
            onClick={() => handleFilter(index)}
          >
            {filter.label}
          </button>
        ))}
      </FilterButtons>

      <IssuesList>
        {issues.map((issue) => (
          <li key={issue.id}>
            <article>
              <img src={issue.user.avatar_url} alt={issue.user.login} />

              <div>
                <strong>
                  <a href={issue.html_url}>{issue.title}</a>
                  {issue.labels.map((label) => (
                    <span key={label.id}>{label.name}</span>
                  ))}
                </strong>
              </div>
            </article>
            <p>{issue.user.login}</p>
          </li>
        ))}

        <ButtonsActions>
          <button
            disabled={pages < 2}
            type="button"
            onClick={() => handleAction("back")}
          >
            <FaArrowLeft size={24} color="white" />
          </button>
          <button type="button" onClick={() => handleAction("next")}>
            <FaArrowRight size={24} color="white" />
          </button>
        </ButtonsActions>
      </IssuesList>
    </Container>
  );
};
