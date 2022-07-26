import { Container, Form, SubmitButton } from "./styles";
import { FaGithub, FaPlus } from "react-icons/fa";

export default function Home() {
  return (
    <Container>
      <h1>
        <FaGithub size={30} />
        Meus Repositorios Favoritos
      </h1>

      <Form onSubmit={() => {}}>
        <input type="text" placeholder="adicionar um repositorio" />

        <SubmitButton>
          <FaPlus size={20} color="white" />
        </SubmitButton>
      </Form>
    </Container>
  );
}
