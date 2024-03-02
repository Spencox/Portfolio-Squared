import { Container } from 'react-bootstrap';
import Project from "../components/Project";
import projects from '../portfolioProjects'

export default function Portfolio() {
  return (
        <Container>
          <Project projects={projects}/>
        </Container>
  );
}