import React, { Component } from 'react';

class Business extends Component {
    state = {
        data: [],
        input: "",
    }
    componentDidMount() {
        fetch('http://newsapi.org/v2/top-headlines?country=gb&category=business&apiKey=26c8bdd6cb72495685575001723f30af')
            .then(response => response.json())
            .then(json => {
                this.setState({ data: json.articles });
                console.log(json.articles)
            })
    }

    handleSearchInput = (event) => {
        this.setState({ input: event.target.value })
    }
    searchByKeyword = () => {
        fetch(`http://newsapi.org/v2/top-headlines?country=gb&q=${this.state.input}&category=business&apiKey=26c8bdd6cb72495685575001723f30af`)
            .then(response => response.json())
            .then(json => {
                this.setState({ data: json.articles });
                console.log(json.articles)
            })
    }
    showGermanNews = () => {
        fetch(`http://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=26c8bdd6cb72495685575001723f30af`)
            .then(response => response.json())
            .then(json => {
                this.setState({ data: json.articles });
                console.log(json.articles)
            })
    }
    showUSNews = () => {
        fetch(`http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=26c8bdd6cb72495685575001723f30af`)
            .then(response => response.json())
            .then(json => {
                this.setState({ data: json.articles });
                console.log(json.articles)
            })
    }
    showGBNews = () => {
        fetch(`http://newsapi.org/v2/top-headlines?country=gb&category=business&apiKey=26c8bdd6cb72495685575001723f30af`)
            .then(response => response.json())
            .then(json => {
                this.setState({ data: json.articles });
                console.log(json.articles)
            })
    }

    render() {
        return (
            <section>
                <div className="buttons-wrap">
                    <input type="button" value="DE" onClick={this.showGermanNews} />
                    <input type="button" value="US" onClick={this.showUSNews} />
                    <input type="button" value="GB" onClick={this.showGBNews} />
                </div>

                <div className="search-wrap">
                    <input type="text" name="" id="" placeholder="search by keyword" value={this.state.input} onChange={this.handleSearchInput} />
                    <input type="button" value="Search" onClick={this.searchByKeyword} />
                </div>

                <div className="grid">
                    {this.state.data.map((elt) =>
                        <article className="article" key={elt.id}>
                            <img src={elt.urlToImage} alt=""></img>
                            <h3>{elt.title}</h3>
                            <p>{elt.description}</p>
                            <a href={elt.url}>READ MORE</a>
                        </article>)}
                </div>
            </section>);

    }
}

export default Business;