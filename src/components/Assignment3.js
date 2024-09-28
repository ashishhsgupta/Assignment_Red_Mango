import React, { useState } from "react";
import { Col, Container, Modal, Row } from "react-bootstrap";

const Assignment3 = () => {

  const [isModelOpen, setIsModelOpen] = useState(false);

  const openModel = () => {
    console.log("Button Clicked");
    setIsModelOpen(true);
  };
  const closeModel = () => {
    setIsModelOpen(false);
  };

  return (
    <>
      <Container fluid className="assignment3-container">
        <Row className="assignment3-display">
          <Col md={2} className="px-0">
          <div className="assignment3-leftMenu h-100">
            <div>Menu Text</div>
            <div>Menu Text</div>
            <div>Menu Text</div>
            <div>Menu Text</div>
            <div>Menu Text</div>
            <div>Menu Text</div>
            <div>Menu Text</div>
            <div>Menu Text</div>
            <div>Menu Text</div>
            <div>Menu Text</div>
            <div>Menu Text</div>
            <div>Menu Text</div>
            </div>
          </Col>
          <Col md={10}>
          <Container className="assignment3-rightMenu1 mt-3">
            <Row className="assignment3-viewBox1">
              <Col md={4}>
                <div className="assignment3-box">
                  <button onClick={openModel} className="btn btn-light">View</button>
                </div>
              </Col>
              <Col md={4}>
                <div className="assignment3-box">
                  <button onClick={openModel} className="btn btn-light">View</button>
                </div>
              </Col>
              <Col md={4}>
                <div className="assignment3-box">
                  <button onClick={openModel} className="btn btn-light">View</button>
                </div>
              </Col>
              <Col md={4}>
                <div className="assignment3-box">
                  <button onClick={openModel} className="btn btn-light">View</button>
                </div>
              </Col>
              <Col md={4}>
                <div className="assignment3-box">
                  <button onClick={openModel} className="btn btn-light">View</button>
                </div>
              </Col>
              <Col md={4}>
                <div className="assignment3-box">
                  <button onClick={openModel} className="btn btn-light">View</button>
                </div>
              </Col>
            </Row>
          </Container>
          </Col>
        </Row>
      </Container>
      <Modal show={isModelOpen} onHide={closeModel} centered  dialogClassName="modal-90w">
        <Modal.Header
          closeButton
          style={{ backgroundColor: "#4bb0fe" }}
          className="border-0"
        >
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: "#4bb0fe" }} className="">
          <div className="assignment3-dilogBox">
          <div style={{ color: "#fff" }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.Justo et consetetur sed sed est rebum aliquyam et est, et
            sea labore dolor est elitr ea clita, elitr dolor vero consetetur
            invidunt duo, lorem elitr sea eos at diam elitr. Erat lorem est
            nonumy consetetur justo, aliquyam dolor sit rebum labore aliquyam
            magna. Accusam sed sed invidunt voluptua dolor dolores vero. Sed
            diam at sadipscing voluptua vero. Rebum erat eirmod accusam diam
            gubergren et dolor. Sea accusam accusam duo dolores eirmod amet duo
            no lorem. Elitr et diam justo amet ipsum sanctus dolor clita lorem,
            stet lorem ipsum duo eos eirmod sed elitr magna invidunt. Amet
            consetetur stet eirmod sit clita. Nonumy at takimata aliquyam
            erat.
          </div><br/>
          <div style={{ color: "#fff" }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.Justo et consetetur sed sed est rebum aliquyam et est, et
            sea labore dolor est elitr ea clita, elitr dolor vero consetetur
            invidunt duo, lorem elitr sea eos at diam elitr. Erat lorem est
            nonumy consetetur justo, aliquyam dolor sit rebum labore aliquyam
            magna. Accusam sed sed invidunt voluptua dolor dolores vero. Sed
            diam at sadipscing voluptua vero. Rebum erat eirmod accusam diam
            gubergren et dolor. Sea accusam accusam duo dolores eirmod amet duo
            no lorem. Elitr et diam justo amet ipsum sanctus dolor clita lorem,
            stet lorem ipsum duo eos eirmod sed elitr magna invidunt. Amet
            consetetur stet eirmod sit clita. Nonumy at takimata aliquyam
            erat.
          </div>
          </div>
        </Modal.Body>
      </Modal>

    </>
  );
};

export default Assignment3;
