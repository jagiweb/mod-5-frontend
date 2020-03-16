import React from 'react';

const AllNewsURL = 'http://localhost:3001/all_news'

class News extends React.Component {
  constructor() {
    super();
    this.state = { 
      allNews: []
     }
  }

  componentDidMount(){

  fetch(AllNewsURL)
    .then(resp => resp.json())
    .then(data => this.setState({
        allNews: data.news
    }))

  }

  renderNews = () => {
  return this.state.allNews.map(news => 
    <div key={news.id}>
        <h3 key={news.id}>{news.title}</h3>
        <img key={news.id} alt="" src={news.image_url}/>
        <p key={news.id}>{news.description}</p> 
    </div>
  )
  }

  render() { 
    return ( 
        <div>
            <h1>All News</h1>
            {this.renderNews()}
        </div>
        
     );
  }
}
 
export default News;