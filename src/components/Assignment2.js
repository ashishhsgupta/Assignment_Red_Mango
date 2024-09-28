import React, { useState } from "react";
import "../style/style.css";
import { Modal, Button } from "react-bootstrap";

const Assignment2 = () => {
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
      <div className="assignment2-container">
        <div className="assignmet-content">
          <h5>
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
            consetetur stet eirmod sit clita.
            dolor.
          </h5>
        </div>
        <br />
        <div className="assignmet-content">
          <h5>
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
            consetetur stet eirmod sit clita. 
          </h5>
        </div>
        <div className="dialog-btn">
        <Button onClick={openModel} className="btn btn-primary">
          Open Dialog
        </Button>
      </div>
      </div>

      <Modal show={isModelOpen} onHide={closeModel} size="xl" centered dialogClassName="">
        <Modal.Header
          closeButton
          style={{ backgroundColor: "#4bb0fe" }}
          className="border-0"
        >
          {/* <Modal.Title>Dialog</Modal.Title> */}
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: "#4bb0fe" }}>
          <span style={{ color: "#4bb0fe" }}>
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
            erat.Lorem Ipsum is simply dummy text of the printing and
            typesetting industry.Justo et consetetur sed sed est rebum aliquyam
            et est, et sea labore dolor est elitr ea clita, elitr dolor vero
            consetetur invidunt duo, lorem elitr sea eos at diam elitr. Erat
            lorem est nonumy consetetur justo, aliquyam dolor sit rebum labore
            aliquyam magna. Accusam sed sed invidunt voluptua dolor dolores
            vero. Sed diam at sadipscing voluptua vero. Rebum erat eirmod
            accusam diam gubergren et dolor. Sea accusam accusam duo dolores
            eirmod amet duo no lorem. Elitr et diam justo amet ipsum sanctus
            dolor clita lorem, stet lorem ipsum duo eos eirmod sed elitr magna
            invidunt. Amet conset etur stet eirmod sit clita. Nonumy at takimata
            aliquyam erat. Sea accusam accusam duo dolores
            eirmod amet duo no lorem. Elitr et diam justo amet ipsum sanctus
            dolor clita lorem,
          </span>
        </Modal.Body>
        <Modal.Footer
          style={{ backgroundColor: "#4bb0fe" }}
          className="border-0 text-center justify-content-center"
        >
          <Button
            className="border-0 rounded-0 btn-lg px-5"
            style={{ background: "white", color: "#4bb0fe" }}
            variant="primary"
            onClick={closeModel}
          >
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Assignment2;
