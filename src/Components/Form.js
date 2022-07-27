import React, { Component } from 'react'
import './CSS/todo.css'



class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            Name: "",
            Email: "",
            Mobile: "",
            Country: "",
            City:"",
            State:"",
            Message:"",
}
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    namehandler = (event) => {
        this.setState({
            Name: event.target.value
        })
    }
    emailhandler = (event) => {
        this.setState({
            Email: event.target.value
        })
    }
    mobilehandler = (event) => {
        this.setState({
            Mobile: event.target.value
        })
    }

    countryhandler = (event) => {
        this.setState({
            Country: event.target.value
        })
    }
    
    
    cityhandler = (event) => {
        this.setState({
            City: event.target.value
        })
    }

    statehandler = (event) => {
        this.setState({
            State: event.target.value
        })
    }

    messagehandler = (event) => {
        this.setState({
            Message: event.target.value
        })
    }

    handleSubmit = (event) => {
        
        console.log(this.state);
        this.setState({
            Name: "",
            Email: "",
            Mobile: "",
            Country: "",
            City:"",
            State:"",
            Message:"",
        })
     event.preventDefault()
        
    }




    render() {
        return (
            <div>

                <form onSubmit={this.handleSubmit}>
                    <h1>User Registration</h1>
                    <label>Name :</label> <input type="text" value={this.state.Name} onChange={this.namehandler} placeholder="Name..." required /><br />
                    <label>Email :</label> <input type="text" value={this.state.Email} onChange={this.emailhandler} placeholder="Email.." required /><br />
                    <label>Mobile :</label> <input type="text" value={this.state.Mobile} onChange={this.mobilehandler} placeholder="Password..." /><br />
                    <label>County :</label> <input type="text" value={this.state.Country} onChange={this.countryhandler} placeholder="Country.." /><br />
                    <label>City :</label> <input type="text" value={this.state.City} onChange={this.cityhandler} placeholder="City.." /><br />
                    <label>State :</label> <input type="text" value={this.state.State} onChange={this.statehandler} placeholder="State.." /><br />
                    <label>Message :</label> <input type="text" value={this.state.Message} onChange={this.messagehandler} placeholder="Message.." /><br />    
                    <input type="submit" value="Submit" />
                </form>

            </div>
            
        )
    }
}

export default Form
