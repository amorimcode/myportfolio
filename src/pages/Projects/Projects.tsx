import React from "react";
import { Row, Col } from "react-bootstrap";
import Header from "../../components/Header/Header";
import repositoriesApi from "../../repositories/repositories";

import "./Projects.scss";

const Projects = () => {
  const [repos, setRepos] = React.useState([]);

  const getRepositories = async () => {
    const data = await repositoriesApi.getRepos();

    setRepos(data);
  };

  React.useEffect(() => {
    getRepositories();
  }, []);

  return (
    <>
      <Header />
      <div className="projects container">
        <Row>
          {repos.map((repo: any) => (
            <Col className="repo" sm={3} key={repo.name}>
              <>
                <h3>{repo.name}</h3>
                <p>{repo.description}</p>
              </>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};

export default Projects;
