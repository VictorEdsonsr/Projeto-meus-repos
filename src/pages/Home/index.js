import { Container, Form, SubmitButton } from "./styles";
import { FaGithub, FaPlus, FaSpinner } from "react-icons/fa";
import { useState, useCallback } from "react";

import api from "../../services/api";

export default function Home() {
  const [newRepo, setNewRepo] = useState("");
  const [repositorios, setRepositorios] = useState([]);
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    setNewRepo(e.target.value);
  }

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      async function loadApi() {
        setLoading(true);
        try {
          const response = await api.get(`repos/${newRepo}`);
          console.log(response);

          const data = {
            name: response.data.full_name,
          };

          setRepositorios([...repositorios, data.name]);
          setNewRepo("");
        } catch (e) {
          console.log(e);
        } finally {
          setLoading(false);
        }
      }

      loadApi();
    },
    [repositorios, newRepo]
  );

  return (
    <Container>
      <h1>
        <FaGithub size={30} />
        Meus Repositorios Favoritos
      </h1>

      <Form onSubmit={handleSubmit}>
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
    </Container>
  );
}
