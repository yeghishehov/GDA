import { useParams } from "react-router-dom";
import Container from "@mui/material/Container";
import { ContainerSC } from "./mui";

export function Course() {
  const { id } = useParams();
  return (
    <ContainerSC>
      <Container sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        minHeight: "100vh",
      }}
      >
        <div>{id}</div>
        <div>{id}</div>
        <div>{id}</div>
        <div>{id}</div>
        <div>{id}</div>
        <div>{id}</div>
        <div>{id}</div>
        <div>{id}</div>
        <div>{id}</div>
        <div>{id}</div>
        <div>{id}</div>
        <div>{id}</div>
        <div>{id}</div>
        <div>{id}</div>
        <div>{id}</div>
        <div>{id}</div>
        <div>{id}</div>
        <div>{id}</div>
        <div>{id}</div>
        <div>{id}</div>
        <div>{id}</div>
        <div>{id}</div>
        <div>{id}</div>
        <div>{id}</div>
        <div>{id}</div>
        <div>{id}</div>
        <div>{id}</div>
        <div>{id}</div>
        <div>{id}</div>
        <div>{id}</div>
        <div>{id}</div>
        <div>{id}</div>
        <div>{id}</div>
        <div>{id}</div>
        <div>{id}</div>
        <div>{id}</div>
        <div>{id}</div>
        <div>{id}</div>
        <div>{id}</div>
        <div>{id}</div>
        <div>{id}</div>
        <div>{id}</div>
        <div>{id}</div>
        <div>{id}</div>
        <div>{id}</div>
        <div>{id}</div>
        <div>{id}</div>
        <div>{id}</div>
        <div>{id}</div>
        <div>{id}</div>
        <div>{id}</div>
        <div>{id}</div>
        <div>{id}</div>
        <div>{id}</div>
        <div>{id}</div>
        <div>{id}</div>
        <div>{id}</div>
        <div>{id}</div>
        <div>{id}</div>
        <div>{id}</div>
        <div>{id}</div>
        <div>{id}</div>
        <div>{id}</div>
        <div>{id}</div>
        <div>{id}</div>
        <div>{id}</div>
        <div>{id}</div>
        <div>{id}</div>
        <div>{id}</div>
        <div>{id}</div>
        <div>{id}</div>
        <div>{id}</div>
        <div>{id}</div>
        <div>{id}</div>
        <div>{id}</div>
        <div>{id}</div>
      </Container>
    </ContainerSC>
  );
}
