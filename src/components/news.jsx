import React, { Component } from 'react';
import { API_KEY } from '../api_key';

class News extends Component {

    state = {
        data: []
    }
    componentDidMount() {
        fetch(`http://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=${API_KEY}`)
            .then(res => res.json())
            .then(data => this.setState({ data: data.articles }));
    }

    render() {
        return (

            <div className="container articles">
                {this.state.data.length ? (
                    this.state.data.map(article => (
                        <div className="card">
                            <div className="card-content article">
                                <div className="card-title heading">
                                    <header>{article.title}</header>
                                </div>
                                <article className="">
                                    {article.description}
                                </article>
                            </div>
                        </div>

                    ))

                ) : null
                }
            </div>


        )
        // <pre>
        //     <code>
        //         {JSON.stringify(this.state.data, null, 4)}
        //     </code>
        // </pre>

    }
}
export default News;