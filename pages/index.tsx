import {
  Container,
  Card,
  CardContent,
  AppBar,
  Typography,
  CssBaseline,
  Toolbar,
} from "@material-ui/core"
import { Form } from "../components/Form"
import { Hero } from "../components/Hero"
import styled from "styled-components"

const StyledCard = styled(Card)`
  && {
    margin-bottom: 48px;
  }
`

export default function Home() {
  return (
    <>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            チーム分けユーティリティ
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <Hero />
        <Container maxWidth="md">
          <StyledCard>
            <CardContent>
              <Form />
            </CardContent>
          </StyledCard>
          <StyledCard>
            <CardContent>
              <Form />
            </CardContent>
          </StyledCard>
        </Container>
      </main>
    </>
  )
}
