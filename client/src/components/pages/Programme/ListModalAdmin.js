import React from "react";
import { Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Axios from "axios";
import "./ListModal.css";
import { Form } from "react-bootstrap";

const ListModal = (props) => {
  const { show, onHide, element, articleType } = props;
  let descriptionADD = React.createRef();
  let titleADD = React.createRef();
  let descriptionEdit = React.createRef();
  let titleEdit = React.createRef();


  //remove an item from DB
  function handleRemove() {
    var Link = "";
    var result = window.confirm("Do you want to continue?");

    if (result) {
      if (articleType == "chapitre")
        Link = "http://localhost:5000/chapitres/" + element._id;
      else if (articleType == "sousChapitre")
        Link = "http://localhost:5000/sous_chapitres/" + element._id;
      else if (articleType == "article")
        Link = "http://localhost:5000/articles/" + element._id;
      Axios.delete(Link);
    }
  }

  //edit an item
  function handelSubmitEdit(e) {
    var Link ="";
    var confirm = window.confirm("Are you sure ?");
    var json = {titre: titleEdit.current.value,
                description : descriptionEdit.current.value};

    if (articleType == "chapitre")
        Link = "http://localhost:5000/chapitres/update/" + element._id;
      else if (articleType == "sousChapitre")
        Link = "http://localhost:5000/sous_chapitres/update/" + element._id;
      else if (articleType == "article")
        Link = "http://localhost:5000/articles/update/" + element._id;
    if(confirm){
      Axios.post(Link, json)
        .then((response) => {
          console.log(response);
          window.location.reload(false);
        }, (error) => {
          console.log(error);
        });}
    // console.log(descriptionEdit.current.value);
    // console.log(titleEdit.current.value);
  }

  function handelSubmitADD(e) {
    var Link ="";
    var confirm = window.confirm("Are you sure ?");
    var json = {titre: titleADD.current.value,
                description : descriptionADD.current.value};

    if (articleType == "chapitre")
        Link = "http://localhost:5000/chapitres/add/";
      else if (articleType == "sousChapitre")
        Link = "http://localhost:5000/sous_chapitres/add/";
      else if (articleType == "article")
        Link = "http://localhost:5000/articles/add/";
    if(confirm){
      Axios.post(Link, json)
        .then((response) => {
          console.log("element ajouté");
          window.location.reload(false);
        }, (error) => {
          console.log(error);
        });}
    // console.log(descriptionADD.current.value);
    // console.log(titleADD.current.value);
  }

  return (
    <>
      <Modal show={show} onHide={onHide} centered>
        <Modal.Body className="text-center py-4">
          <>
            <h4 className="title mb-3">Edit {articleType}</h4>
            <span className="content">
              <Form.Group>
                <Form.Label className="subtitle">Title:</Form.Label>
                <Form.Control
                  className="input"
                  type="text"
                  name="username"
                  ref={titleEdit}
                  defaultValue={element.titre}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label className="subtitle">Description:</Form.Label>
                <textarea
                  className="input"
                  type="textarea"
                  name="name"
                  ref={descriptionEdit}
                  defaultValue={element.description}
                />
              </Form.Group>
              <input
                className="button d-flex"
                type="submit"
                name="Submit"
                onClick={handelSubmitEdit}
              />
            </span>
            <h4 className="title mb-3">Add {articleType}</h4>
            <span className="content">
              <Form.Group>
                <Form.Label className="subtitle">Title:</Form.Label>
                <Form.Control
                  className="input"
                  type="text"
                  name="username"
                  ref={titleADD}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label className="subtitle">Description:</Form.Label>
                <textarea
                  className="input"
                  type="textarea"
                  name="name"
                  ref={descriptionADD}
                />
              </Form.Group>
              <input
                className="button d-flex"
                type="submit"
                name="Submit"
                onClick={handelSubmitADD}
              />

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
