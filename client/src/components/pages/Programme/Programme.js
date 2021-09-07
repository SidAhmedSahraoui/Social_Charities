import React, { Component } from "react";
import "./Programme.css";
import axios from "axios";

const Chapitre = (props) => (
  <a href="#" className="list-group-item">
    {props.chapitre.titre}
    <div className="list-group">
      <tbody>{props.sousChapitre}</tbody>
    </div>
  </a>
);

const SousChapitre = (props) => (
  <a href="#" className="list-group-item">
    {props.sousChapitre.titre}
    <div className="list-group">
      <tbody>{props.article}</tbody>
    </div>
  </a>
);

const Article = (props) => (
  <a href="#" className="list-group-item">
    {props.article.titre}
  </a>
);

export default class Programme extends Component {
  //initialize items arrays
  constructor(props) {
    super(props);
    this.state = { chapitres: [[]], sousChapitres: [], articles: [] };
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
            />
          );
        });
    }
  }

  articleList(sousChapitreID) {
    if (this.state.articles) {
      return this.state.articles.map((currentArticle) => {
        return <Article article={currentArticle} key={currentArticle._id} />;
      });
    }
  }

  render() {
    const { useStyles } = this.props;
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
