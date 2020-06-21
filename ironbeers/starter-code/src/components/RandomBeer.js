import React, { Component } from 'react';
import axios from 'axios';

class RandomBeer extends Component{
    state = {}
    
    componentDidMount() {
        const { params } = this.props.match
        axios.get('https://ih-beers-api2.herokuapp.com/beers/random')
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

export default RandomBeer;