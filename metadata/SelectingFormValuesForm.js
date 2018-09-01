import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Field, reduxForm, formValueSelector } from 'redux-form'

// let SelectingFormValuesForm = props => {
class SelectingFormValuesForm extends Component {
  
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
  const {
    favoriteColorValue,
    handleSubmit,
    pristine,
    reset,
    submitting
  } = this.props;
  return (
    // <form onSubmit={handleSubmit}>
<form onSubmit={handleSubmit((values) => console.log(values))}>

      <div>
        <label>Favorite Color</label>
        <div>
          <Field name="favoriteColor" component="select">
            <option />
            <option value="1">Red</option>
            <option value="2">Green</option>
            <option value="#0000ff">Blue</option>
          </Field>
        </div>
      </div>
              {this.renderNewCampaignForm()}


      {favoriteColorValue && (
        <div  
          style={{
            height: 80,
            width: 200,
            margin: '10px auto',
            backgroundColor: favoriteColorValue
          }}
        />
      )}
      <div>
        <button type="submit" disabled={pristine || submitting}>
          Submit 
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  )
}};

// The order of the decoration does not matter.

// Decorate with redux-form
SelectingFormValuesForm = reduxForm({
  form: 'selectingFormValues' // a unique identifier for this form
})(SelectingFormValuesForm)

// Decorate with connect to read form values
const selector = formValueSelector('selectingFormValues') // <-- same as form name
SelectingFormValuesForm = connect(state => {
  // can select values individually
  const favoriteColorValue = selector(state, 'favoriteColor')
  // or together as a group
  return {
    favoriteColorValue,
  }
})(SelectingFormValuesForm)

export default SelectingFormValuesForm;