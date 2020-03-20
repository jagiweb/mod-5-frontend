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
    <div className="row" key={news.id}>
      <div className="col-md-4 col-lg-4 mb-50">
        <img className="news-img" key={news.id} alt="" src={news.image_url}/>
      </div>
      <div className="col-md-8 col-lg-8 text-center mb-50">
        <h3 key={news.id}>{news.title}</h3>
        <p key={news.id}>{news.description}</p> 
      </div>
        
    </div>
  )
  }

  render() { 
    return ( 
        <div id="news" className="news">
          <div className="container">
          <h1 className="text-center mt-150 mb-50">All News</h1>
            {this.renderNews()}
          </div>
            
        </div>
        
     );
  }
}
 
export default News;