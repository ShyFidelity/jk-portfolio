import React from "react";
import { useParams } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataproject, meta } from "../../content_option";

export const Project = () => {
  const { projectName } = useParams(); // Get project name from URL
  const project = dataproject.find((proj) => proj.link === `/${projectName}`);

  if (!project) {
    return <h1>Project not found</h1>;
  }

  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title>{projectName} | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">{projectName}</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="mb-5 po_items_ho">
          <div className="po_item">
            <img src={project.img} alt={projectName} />
            <div className="content">
              <p>{project.description}</p>
            </div>
          </div>
        </div>
      </Container>
    </HelmetProvider>
  );
};
