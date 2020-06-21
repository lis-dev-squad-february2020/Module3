import React, { Component } from 'react';
import axios from 'axios';

class NewBeer extends Component{
    state = {
        newName:'',
        newTagLine: '',
        newContributor: ''
    }

    addNew = (event) =>{
        event.preventDefault();
        const newBeer = {
            name: this.state.newName,
            tagline: this.state.newTagLine,
            contributed_by: this.state.newContributor
        }

        axios.post('https://ih-beer-api.herokuapp.com/beers/new', newBeer)
        .then(()=>{
            this.props.history.push('/')
        })
    }

    handleChange = (event) => {  
        const {name, value} = event.target;
        this.setState({[name]: value});
    }

    render() {
        return (
            <div>
                <form onSubmit={this.addNew}>
                    <p>Name</p>
                    <input value={this.state.newName} 
                    name="newName" 
                    onChange={this.handleChange}
                    />

                    <p>Tagline</p>
                    <input value={this.state.newTagLine} 
                    name="newTagLine" 
                    onChange={this.handleChange}
                    />

                    <p>Contributor</p>
                    <input value={this.state.newContributor} 
                    name="newContributor" 
                    onChange={this.handleChange}
                    />
                    <br /><br />
                    <input type="submit" value="Submit" />
                </form>    
            </div>
        )
    }






}

export default NewBeer;