import React, { Component } from "react";
import "./Programme.css";
import axios from "axios";
import ListModal from "./ListModal";

const Chapitre = (props) => (
  <a href="#" className="list-group-item" onClick={props.handleClick}>
    {props.chapitre.titre}
    <div className="list-group">
      <tbody>{props.sousChapitre}</tbody>
    </div>
  </a>
);

const SousChapitre = (props) => (
  <a href="#" className="list-group-item" onClick={props.handleClick}>
    {props.sousChapitre.titre}
    <div className="list-group">
      <tbody>{props.article}</tbody>
    </div>
  </a>
);

const Article = (props) => (
  <a href="#" className="list-group-item" onClick={props.handleClick}>
    {props.article.titre}
  </a>
);

export default class Programme extends Component {
  //initialize items arrays
  constructor(props, context) {
    super(props, context);
    this.state = {
      chapitres: [[]],
      sousChapitres: [],
      articles: [],
      show: false,
      showModal: false,
    };
    //
    this.handleClick = this.handleClick.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  //get items from DB
  componentDidMount() {
    axios
      .get("http://localhost:5000/chapitres/")
      .then((response) => {
        this.setState({ chapitres: response.data });
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get("http://localhost:5000/sous_chapitres/")
      .then((response) => {
        this.setState({ sousChapitres: response.data });
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get("http://localhost:5000/articles/")
      .then((response) => {
        this.setState({ articles: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  //set items in html form
  chapitreList() {
    if (this.state.chapitres) {
      return this.state.chapitres.map((currentChapitre) => {
        return (
          <Chapitre
            chapitre={currentChapitre}
            key={currentChapitre._id}
            sousChapitre={this.sousChapitreList(currentChapitre._id)}
            handleClick={this.handleClick}
          />
        );
      });
    }
  }

  sousChapitreList(chapitreID) {
    if (this.state.sousChapitres) {
      return this.state.sousChapitres
        .filter((currentSousChapitre) => {
          return chapitreID == currentSousChapitre.chapitre;
        })
        .map((currentSousChapitre) => {
          return (
            <SousChapitre
              sousChapitre={currentSousChapitre}
              key={currentSousChapitre._id}
              article={this.articleList(currentSousChapitre)}
              handleClick={this.handleClick}
            />
          );
        });
    }
  }

  articleList(sousChapitreID) {
    if (this.state.articles) {
      return this.state.articles.map((currentArticle) => {
        return (
          <Article
            article={currentArticle}
            key={currentArticle._id}
            handleClick={this.handleClick}
          />
        );
      });
    }
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  handleClick() {
    // switch the value of the showModal state
    this.setState({
      showModal: !this.state.showModal,
    });
  }

  render() {
    const { useStyles } = this.props;
    if (this.state.showModal) {
      // show the modal if state showModal is true
      return <ListModal show={this.handleShow} onHide={this.handleClick} />;
    }
    return (
      <div>
        <div className="just-padding">
          <div className="list-group list-group-root well">
            <tbody>{this.chapitreList()}</tbody>
          </div>
        </div>
      </div>
    );
  }

  /*
  render(){ 
    return (
      <div>
        <Navbar />
        <div className="just-padding">
          <div className="list-group list-group-root well">
            <a href="#" className="list-group-item">
              Item 1
            </a>
            <div className="list-group">
              <a href="#" className="list-group-item">
                Item 1.1
              </a>
              <div className="list-group">
                <a href="#" className="list-group-item">
                  Item 1.1.1
                </a>
                <a href="#" className="list-group-item">
                  Item 1.1.2
                </a>
                <a href="#" className="list-group-item">
                  Item 1.1.3
                </a>
              </div>
              <a href="#" className="list-group-item">
                Item 1.2
              </a>
              <div className="list-group">
                <a href="#" className="list-group-item">
                  Item 1.2.1
                </a>
                <a href="#" className="list-group-item">
                  Item 1.2.2
                </a>
                <a href="#" className="list-group-item">
                  Item 1.2.3
                </a>
              </div>
              <a href="#" className="list-group-item">
                Item 1.3
              </a>
              <div className="list-group">
                <a href="#" className="list-group-item">
                  Item 1.3.1
                </a>
                <a href="#" className="list-group-item">
                  Item 1.3.2
                </a>
                <a href="#" className="list-group-item">
                  Item 1.3.3
                </a>
              </div>
            </div>
            <a href="#" className="list-group-item">
              Item 2
            </a>
            <div className="list-group">
              <a href="#" className="list-group-item">
                Item 2.1
              </a>
              <div className="list-group">
                <a href="#" className="list-group-item">
                  Item 2.1.1
                </a>
                <a href="#" className="list-group-item">
                  Item 2.1.2
                </a>
                <a href="#" className="list-group-item">
                  Item 2.1.3
                </a>
              </div>
              <a href="#" className="list-group-item">
                Item 2.2
              </a>
              <div className="list-group">
                <a href="#" className="list-group-item">
                  Item 2.2.1
                </a>
                <a href="#" className="list-group-item">
                  Item 2.2.2
                </a>
                <a href="#" className="list-group-item">
                  Item 2.2.3
                </a>
              </div>
              <a href="#" className="list-group-item">
                Item 2.3
              </a>
              <div className="list-group">
                <a href="#" className="list-group-item">
                  Item 2.3.1
                </a>
                <a href="#" className="list-group-item">
                  Item 2.3.2
                </a>
                <a href="#" className="list-group-item">
                  Item 2.3.3
                </a>
              </div>
            </div>
            <a href="#" className="list-group-item">
              Item 3
            </a>
            <div className="list-group">
              <a href="#" className="list-group-item">
                Item 3.1
              </a>
              <div className="list-group">
                <a href="#" className="list-group-item">
                  Item 3.1.1
                </a>
                <a href="#" className="list-group-item">
                  Item 3.1.2
                </a>
                <a href="#" className="list-group-item">
                  Item 3.1.3
                </a>
              </div>
              <a href="#" className="list-group-item">
                Item 3.2
              </a>
              <div className="list-group">
                <a href="#" className="list-group-item">
                  Item 3.2.1
                </a>
                <a href="#" className="list-group-item">
                  Item 3.2.2
                </a>
                <a href="#" className="list-group-item">
                  Item 3.2.3
                </a>
              </div>
              <a href="#" className="list-group-item">
                Item 3.3
              </a>
              <div className="list-group">
                <a href="#" className="list-group-item">
                  Item 3.3.1
                </a>
                <a href="#" className="list-group-item">
                  Item 3.3.2
                </a>
                <a href="#" className="list-group-item">
                  Item 3.3.3
                </a>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }*/
}
