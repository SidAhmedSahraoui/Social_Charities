import React from "react";
import { Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Axios from "axios";

const ListModal = (props) => {
  const { show, onHide, element, articleType } = props;
  function handleRemove() {
    var Link = "";
    if (articleType == "chapitre")
      Link = "http://localhost:5000/chapitres/" + element._id;
    else if (articleType == "sousChapitre")
      Link = "http://localhost:5000/sous_chapitres/" + element._id;
    else Link = "http://localhost:5000/articles/" + element._id;
    Axios.delete(Link);
  }
  function handelSubmit() {}

  return (
    <>
      <Modal show={show} onHide={onHide} centered>
        <Modal.Body className="text-center py-4">
          <>
            <h5 className="title mb-3">Edit program</h5>
            <span className="content">
              <form onsubmit="{props.handleSubmitAdd}">
                <input type="text" name="name" defaultValue={element.titre} />
                <p>Description: </p>
                <textarea
                  type="textarea"
                  name="name"
                  defaultValue={element.description}
                />
                <input type="submit" name="Submit" onClick={handelSubmit} />
              </form>

              <FontAwesomeIcon
                className="icons"
                icon={faTrash}
                onClick={handleRemove}
              />
            </span>
          </>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ListModal;
