
import React, { Component } from 'react';

export class NewsItem extends Component {

  render() {
    let {title,description,imageUrl,newsUrl}=this.props
    return <div className='my-3'>
       <div className="card">
  <img src={!imageUrl?"https://images.hindustantimes.com/img/2022/02/13/1600x900/INDIA-AVIATION-PRIVATISATION-2_1643295975110_1644764247552.jpg":imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}...</h5>
    <p className="card-text">{description}...</p>
    <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read more</a>
  </div>
</div>
    </div>;
  }
}

export default NewsItem;
