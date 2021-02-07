import React, {Component} from 'react';
import axios from 'axios';
import SingleSide from './SideSingle';
import Error from './Error';

class SideNews extends Component{

    constructor(props){
        super(props);
        this.state={
            sidenews: [],
            error: false
        };
    }

    componentDidMount() {
        const url = `https://newsapi.org/v2/${this.props.sinews.type}?${this.props.sinews.query}&apiKey=baed575f447f465aa07eb46de11d3ba7`;
        
        axios.get(url)
        .then((res)=>{
            console.log(res);
            this.setState({
                sidenews: res.data.sources,
                error: false
            })
        })
        .catch(this.setState({
            error: true
        }));
    }

    renderItems() {
        if(!this.state.error)
        {
        return ( 
            <div>
            {
            this.state.sidenews.map((item)=> 
            ( 
                <SingleSide key={item.url} item={item} /> 
            ))
            }
            </div>
            );
        }
        else{
            return (
                <Error />
            );
        }

    }

    render() {
            return (
                <div>
                {this.renderItems()}
                </div>
            );
    }
}
export default SideNews;