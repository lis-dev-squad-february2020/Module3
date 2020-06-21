import React, { Component } from 'react';
import axios from 'axios';

class BeerDetail extends Component{
    state = {}
    
    componentDidMount() {
        const { params } = this.props.match
        axios.get(`https://ih-beer-api.herokuapp.com/beers/${params.id}`)
          .then((response)=>{
            this.setState(response.data)
          }) 
    }

    render () {
        return (
            <div>
                <h3>{this.state.name}</h3>
                <img src={this.state.image_url} />
            </div>
        )
    }
    
}

export default BeerDetail;