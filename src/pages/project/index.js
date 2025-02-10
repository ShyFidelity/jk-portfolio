import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataproject, meta } from "../../content_option";
import { worktimeline, skills, services } from "../../content_option";


export const Project = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Project | {dataproject[0]?.name || "Default Project"} </title>
          <meta name="description"/>
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">{dataproject[0]?.name || "Default Project"}</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Project Description</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <p>{dataproject[0]?.description || "Default Project"}</p>
            </div>
          </Col>
          <Col lg="5">
            <h3 className="color_sec py-4">Problem  / Solution</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <p>ssss</p>
            </div>
          </Col>
        </Row>
        <Row className=" sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Designs</h3>
          </Col>
          <Col lg="7">
            <table className="table caption-top">
              <tbody>
                {worktimeline.map((data, i) => {
                  return (
                    <tr key={i}>
                      <th scope="row">dd</th>
                      <td>ll</td>
                      <td>dd</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Skills</h3>
          </Col>
          <Col lg="7">
            {skills.map((data, i) => {
              return (
                <div key={i}>
                  <h3 className="progress-title">sss</h3>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      style={{
                        width: "80px",
                      }}
                    >
                      <div className="progress-value">sss</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">services</h3>
          </Col>
          <Col lg="7">
          {services.map((data, i) => {
  return (
    <div className="service_ py-4" key={i}>
      <h5 className="service__title">hi</h5>
      <p className="service_desc">hi</p>
    </div>
  );
})}
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
