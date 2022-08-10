import { Container } from "./style.js";
import { useParams } from "react-router-dom";

export const Repositorios = () => {
  const { reposId } = useParams();

  return <Container>{reposId}</Container>;
};
