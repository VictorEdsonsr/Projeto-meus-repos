import { Link, useParams } from "react-router-dom";

export default function Repositorios({ match }) {
  const { repositorio } = useParams();

  return <div>{repositorio}</div>;
}
