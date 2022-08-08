import { Container, Form, SubmitButton, List, DeleteButton } from "./style.js";
import { FaGithub, FaPlus, FaSpinner, FaBars, FaTrash } from "react-icons/fa";
import { useState, useCallback, useEffect } from "react";
import api from "../../services/api";

export const Home = () => {
  const [newRepo, setNewRepo] = useState("");
  const [repositorios, setRepositorios] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setNewRepo(e.target.value);
  };

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      async function submit() {
        try {
          setLoading(true);
          const response = await api.get(`repos/${newRepo}`);

          const data = {
            name: response.data.full_name,
          };

          setRepositorios([...repositorios, data]);
          setNewRepo("");

          console.log(repositorios);
        } catch (e) {
          console.log(e);
        } finally {
          setLoading(false);
        }
      }

      submit();
    },
    [newRepo, repositorios]
  );

  const handleDelete = useCallback(
    (repos) => {
      const find = repositorios.filter((r) => r.name !== repos);
      setRepositorios(find);
    },
    [repositorios]
  );

  useEffect(() => {
    localStorage.setItem("@repos", JSON.stringify(repositorios));
  }, [repositorios]);

  useEffect(() => {
    const repoStorage = localStorage.getItem("@repos");

    if (repoStorage) {
      setRepositorios(JSON.parse(repoStorage));
    }
  }, []);

  return (
    <Container>
      <h1>
        <FaGithub size={24} />
        Meus Repositorios
      </h1>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="Digite um repositorio"
          value={newRepo}
          onChange={(e) => handleChange(e)}
        />
        <SubmitButton loading={loading ? 1 : 0}>
          {loading ? (
            <FaSpinner size={24} color="#fff" />
          ) : (
            <FaPlus size={24} color="#fff" />
          )}
        </SubmitButton>
      </Form>

      <List>
        {repositorios.map((repos, index) => (
          <li key={index}>
            <span>
              <DeleteButton onClick={() => handleDelete(repos.name)}>
                <FaTrash color="rgba(17, 77, 77, 1)" size={18} />
              </DeleteButton>
              {repos.name}
            </span>

            <a href="#">
              <FaBars color="rgba(17, 77, 77, 1)" size={20} />
            </a>
          </li>
        ))}
      </List>
    </Container>
  );
};
