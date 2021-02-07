import React, {Component} from 'react';
import NewSingle from './NewSingle';
import Error from './Error';

class News extends Component{

    constructor(props){
        super(props);
        this.state={
            news: [],
            error: true
        };
    }

    componentDidMount() {
        const url = `https://newsapi.org/v2/${this.props.dush.type}?${this.props.dush.query}&apiKey=baed575f447f465aa07eb46de11d3ba7`;
        
        fetch(url)
            .then((response)=>{
                //console.log(response);
                return response.json();
            })
            .then((data)=>{ 
                 console.log(data);      
                
                 this.setState({ 
                    news: data.articles,
                    error: false
                 })
               // console.log("inside daya!!!");
            })
            .catch(this.setState({error: true}));
    }

    renderItems() {
        if(!this.state.error){
                return ( 
                <div>
                {
                this.state.news.map((item)=> 
                ( 
                    <NewSingle key={item.url} item={item} /> 
                ))
                }
                </div>
                );
        }
        else{
            return (
                <Error />
            )
        }
    }

    render() {
            return (
                <div className="row">
                {this.renderItems()}
                </div>
            );
    }
}
export default News;