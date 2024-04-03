import { useRouteError } from "react-router-dom";
import Container from "@mui/material/Container";

function Error() {
  const error = useRouteError();
  return (
    <Container>
      <h1 className="text-2xl">Something went wrong 😢</h1>
      <br />
      <p>
        {error.status} {error.statusText}
      </p>
      <p>{error.error.message}</p>
    </Container>
  );
}

export default Error;
