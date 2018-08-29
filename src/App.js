import React, { Component } from 'react';
import './App.css';
// import { reduxForm, Field } from 'redux-form';
// import { ReduxCheckbox, Checkboxes } from 'react-form-checkbox';
import VavForm from './smallform';
import AhuForm from './AhuForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleName = this.handleName.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  handleName(event) {
    this.props.setCampaignName(event.target.value);
  }
      handleSignIn = values => {
        console.log(values);
    };

    renderNewCampaignForm() {
        if (this.state.campaigntype === "1") {
          return ( 
            <div className="node-options">
            {/* <SmallForm /> */}
            
          <AhuForm onSubmit={this.handleSignIn} />

          </div>
          )
        } else if (this.state.campaigntype === "2") {
          return (
        <div className="node-options">
          <div className="node-container">
          <VavForm onSubmit={this.handleSignIn} />
            
              </div>
          </div> 
          )
        } else {
          return null;
        }
      }
  render() {
    return (
      <div className="App">
         
            <div>
                      {/* <SignInForm onSubmit={this.handleSignIn} /> */}

            <form>
            <div>
            </div>
                <div className="form-group-attached">
                  <div className="form-group form-group-defaultx required">
                    {/* <span className="">Display Name</span>
                    <input
                      onChange={this.handleName}
                      name="campaignName"
                      type="text"
                      className="form-control"
                      placeholder = "TUE04321"
                      required=""
                    /> */}
                  </div>
                </div>
                <div className="">
                  <div className="">
                    <p className="">Type</p>
                    <div className="radio radio-success">
                      <input
                        type="radio"
                        value="1"
                        checked={this.state.campaigntype === "1"}
                        name="campaigntype"
                        id="AHU"
                        className="radio-field"
                        onChange={this.handleInputChange}
                      />
                      
                        <span className="radio-text">A H U</span>
                      <br />
                      <input
                        type="radio"
                        value="2"
                        checked={this.state.campaigntype === "2"}
                        name="campaigntype"
                        id="vav" 
                        className="radio-field"
                        onChange={this.handleInputChange}
                      />
                      <span className="radio-text">
                        V A V</span>
                      
                    </div>
                  </div>
                </div>
              </form>

              {this.renderNewCampaignForm()}

            </div>
      </div>
    );
  }
}

export default App;
