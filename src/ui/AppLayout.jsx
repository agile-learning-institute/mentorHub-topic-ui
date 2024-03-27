import { Outlet } from "react-router-dom"
import { Container } from "@mui/material";

function AppLayout() {
  return (
    <Container sx={{ marginTop: '2rem' }}>
      <Outlet/>
    </Container>
  )
}
export default AppLayout
