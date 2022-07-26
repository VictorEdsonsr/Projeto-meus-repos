import { Container, Form, SubmitButton, List, DeleteButton } from "./styles";
import { FaGithub, FaPlus, FaSpinner, FaBars, FaTrash } from "react-icons/fa";
import { useState, useCallback, useEffect } from "react";

import api from "../../services/api";

export default function Home() {
  const [newRepo, setNewRepo] = useState("");
  const [repositorios, setRepositorios] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);

  function handleChange(e) {
    setNewRepo(e.target.value);
    setAlert(null);
  }

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      async function loadApi() {
        setLoading(true);
        try {
          if (!newRepo) throw new Error(`Voce deve digitar um repositorio`);

          const response = await api.get(`repos/${newRepo}`);

          const hasRepo = repositorios.find((repo) => repo === newRepo);
          if (hasRepo) throw new Error(`Esse repositorio ja existe`);

          const data = {
            name: response.data.full_name,
          };

          setRepositorios([...repositorios, data.name]);
          setNewRepo("");
        } catch (e) {
          setAlert(true);
          console.log(e);
        } finally {
          setLoading(false);
        }
      }

      loadApi();
    },
    [repositorios, newRepo]
  );

  const handleDelete = useCallback(
    (repos) => {
      const find = repositorios.filter((repo) => {
        return repo !== repos;
      });

      setRepositorios(find);
    },
    [repositorios]
  );
  //buscando
  useEffect(() => {
    const repoStorage = localStorage.getItem("repos");

    if (repoStorage) {
      setRepositorios(JSON.parse(repoStorage));
    }
  }, []);

  //salvando
  useEffect(() => {
    localStorage.setItem("repos", JSON.stringify(repositorios));
  }, [repositorios]);

  return (
    <Container>
      <h1>
        <FaGithub size={30} />
        Meus Repositorios Favoritos
      </h1>

      <Form alert={alert} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="adicionar um repositorio"
          value={newRepo}
          onChange={handleChange}
        />

        <SubmitButton loading={loading ? 1 : 0}>
          {loading ? (
            <FaSpinner size={20} color="white" />
          ) : (
            <FaPlus size={20} color="white" />
          )}
        </SubmitButton>
      </Form>

      <List>
        {repositorios.map((repos) => (
          <li key={repos}>
            <span>
              <DeleteButton onClick={() => handleDelete(repos)}>
                <FaTrash size={18} color="#0d2636" />
              </DeleteButton>
              {repos}
            </span>
            <a href="#">
              <FaBars color="#0d2636" size={24} />
            </a>
          </li>
        ))}
      </List>
    </Container>
  );
}
