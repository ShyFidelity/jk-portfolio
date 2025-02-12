import React from "react";
import { useParams } from "react-router-dom";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataproject, meta } from "../../content_option";
import { worktimeline, skills, services } from "../../content_option";


export const Project = () => {
  const { projectName } = useParams(); // Get the project name from URL
  const project = dataproject.find((p) => p.link === `/${projectName}`) || dataproject[0]; // Default to first if not found

  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Project | {project?.name || "Default Project"} </title>
          <meta name="description" />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">{project?.name || "Default Project"}</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Project Description</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <p>{project?.description || "Default Project"}</p>
            </div>
          </Col>
          <Col lg="5">
            <h3 className="color_sec py-4">Problem / <span className="fw-semibold">Solution</span></h3>
          </Col>
          <Col lg="7">
            <div className="mb-3">
              <p>{project?.prob1 || "Default Project"}</p>
              <p className="fw-semibold">{project?.sol1 || "Default Project"}</p>
            </div>
            <div>
              <p>{project?.prob2 || "Default Project"}</p>
              <p className="fw-semibold">{project?.sol2 || "Default Project"}</p>
            </div>
            <div>
              <p>{project?.prob3 || "Default Project"}</p>
              <p className="fw-semibold">{project?.sol3 || "Default Project"}</p>
            </div>
          </Col>
        </Row>
        <Row className=" sec_sp">
          <Col lg="5">
            <h2 className="color_sec py-4">1.</h2>
          </Col>
          <Col lg="7">
            <div>
              <img src={project?.img1 || "Default Project"} alt="" className="po_img" />
            </div>
          </Col>
        </Row>
        <Row className=" sec_sp">
          <Col lg="5">
            <h2 className="color_sec py-4">2.</h2>
          </Col>
          <Col lg="7">
            <div>
              <img src={project?.img2 || "Default Project"} alt="" className="po_img" />
            </div>

            <div>
              <img src={project?.img3 || "Default Project"} alt="" className="po_img" />
            </div>

            <div>
              <img src={project?.img4 || "Default Project"} alt="" className="po_img" />
            </div>
          </Col>
        </Row>
        <Row className=" sec_sp">
          <Col lg="5">
            <h2 className="color_sec py-4">3.</h2>
          </Col>
          <Col lg="7">
            <div>
              <img src={project?.img5 || "Default Project"} alt="" className="po_img" />
            </div>

          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};

