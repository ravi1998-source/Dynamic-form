import React, { Component } from 'react';
import Customfield from "./CustomField";
import axios from 'axios';


class App extends Component {
    constructor(){
        super()
        this.state = {
            firstName:'',
            email:'',
            date:'',
            storeChoice:'',
            optionalField:''
        }
        this.changeFullName = this.changeFullName.bind(this)
        this.changeEmail = this.changeEmail.bind(this)
        this.changeDate = this.changeDate.bind(this)
        this.changeStoreChoice = this.changeStoreChoice.bind(this)
        this.changeOption = this.changeOption.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }   

    changeFullName(event){
        this.setState({
            firstName:event.target.value
        })
    }
    changeEmail(event){
        this.setState({
            email:event.target.value
        })
    }
    changeDate(event){
        this.setState({
            date:event.target.value
        })
    }
    changeStoreChoice(event){
        this.setState({
            storeChoice:event.target.value
        })
    }
    changeOption(event){
        this.setState({
            optionalField:event.target.value
        })
    }

    onSubmit(event){
        event.preventDefault()

        const registered = {
            firstName:this.state.firstName,
            email:this.state.email,
            date:this.state.date,
            storeChoice:this.state.storeChoice,
            optionalField:this.state.optionalField
        }
        axios.post('http://localhost:4000/app/signup', registered)
          .then(response => console.log(response.data))

        this.setState({
            firstName:'',
            email:'',
            date:'',
            storeChoice:'',
            optionalField:''
        })
    }

    
    render () {
        return (
            <div className="container">
                <h1>Sign up page</h1>
                <form onSubmit={this.onSubmit}>
                    <input type = "text"
                    onChange={this.changeFullName}
                    value={this.state.firstName}
                    placeholder="Full Name"
                    />
                    <input type = "email"
                    onChange={this.changeEmail}
                    value={this.state.email}
                    placeholder="Email"
                    />
                    <label>Date of birth</label>
                    <input type = "date"
                    onChange={this.changeDate}
                    value={this.state.date}
                    placeholder="Email"
                    />
                    <select name="storeChoice"
                     value={this.state.storeChoice}
                     onChange={this.changeStoreChoice}
                     >
                    <option>Toy store</option>
                    <option>Shoe store</option>
                    </select>
                    <Customfield name="optionalField"
                    onChange={this.changeOption}
                    value={this.state.optionalField}
                    placeholder="Custom field"
                     />
                   <input type="submit" value="Click to submit"></input>
                   
                </form>
                
            </div>
         );
    }
}

export default App;