import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';

export class News extends Component {

  constructor(){
    super();
    console.log(
      "Hello i am a constructor from news component"
      )
      this.state={
         articles:[],
         loading:false,
         page:1
  }
  }
  async componentDidMount(){
    let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=e4a1f6b2b62841998d8f024bfd051893&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data=await fetch(url);
    let parsedData=await data.json();
    console.log(parsedData);
    this.setState({articles:parsedData.articles, totalResults:parsedData.totalResults,loading:false})
  }
  handlePreviousClick=async()=>{
console.log("previous")

let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=e4a1f6b2b62841998d8f024bfd051893&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
this.setState({loading:true});
let data=await fetch(url);
let parsedData=await data.json();
console.log(parsedData);
this.setState({
  page: this.state.page-1,
  articles:parsedData.articles,
  loading:false
})
}
handleNextClick=async()=>{
    console.log("next")
   if(!(this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
   let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=e4a1f6b2b62841998d8f024bfd051893&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
   this.setState({loading:true});
   let data=await fetch(url);
    let parsedData=await data.json();
    
    this.setState({
      page: this.state.page+1,
      articles:parsedData.articles,
    loading:false
    })
   }
  }
  

  render() {
    return <div className='container my-4'>
      <h1 className='my-4 text-center'>NewsMonkey-latest news</h1>
     {this.state.loading && <Spinner/>}
       <div className="row">
      {!this.state.loading && this.state.articles.map((element)=>{
         return  <div className="col-md-4"  key={element.url}>
           <NewsItem  title={element.title ? element.title.slice(0,45) : ""} description={element.description ? element.description.slice(0,88) : ""} imageUrl={element.urlToImage} newsUrl={element.url} />
            </div>

      })}
        
       
         

       </div>
       <div className="container d-flex justify-content-between my-3">
       <button type="button" disabled={this.state.page<=1} className="btn btn-dark" onClick={this.handlePreviousClick}>	&laquo; Previous</button>
       <button type="button" disabled={this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)} className="btn btn-dark" onClick={this.handleNextClick}>Next &raquo;</button>
       </div>
      
    </div>;
  }
}

export default News;
