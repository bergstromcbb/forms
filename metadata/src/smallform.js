import React, { Component } from 'react';
import './App.css';
import { reduxForm, Field } from 'redux-form';
import { ReduxCheckbox, Checkboxes } from 'react-form-checkbox';

class VavForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit} className="form">

{/* let VavForm = props => {
const { handleSubmit } = props;
  return <form onSubmit={handleSubmit} className="form">     */}
  <div className="field">
  <div className="control">
        <label className="label">Ductwork Configuration</label>
        <div className="select">
          <Field className="input" name="ductworkconfig" component="select">
            <option />
            <option value="elecheat">Single</option>
            <option value="hotwaterheat">Double</option>
          </Field>
        </div>
      </div>
  </div>
 <div className="field">
      <div className="control">
        <label className="label">Volume</label>
        <label className="radio">
          <Field name="volume" component="input" type="radio" value="constantVolume" />
          {' '}
          Cool Only
        </label>
        <label className="radio">
          <Field name="volume" component="input" type="radio" value="variableVolume" />
          {' '}
            Cool Only with Reheat
            </label>
      </div>
    </div>

    <div className="field">
      <div className="control">
        <label className="label">Fan Power Configuration </label>
        <div className="select">
          <Field className="input" name="fan power config" component="select">
            {/* <option /> */}
            <option value = ""> Choose... </option> 
                <option value = "seriesaFanPoweredElecReheat"> series fanPowered elecReheat </option>
                <option value = "seriesFanPoweredHotWaterReheat"> series fanPowered hotWaterReheat </option> 
                <option value = "parrallelFanPoweredElecReheat"> parallel fanPowered elecReheat </option> 
                <option value = "parrallelFanPoweredHotWaterReheat"> parallel fanPowered hotWaterReheat </option> 
          </Field>
        </div>
      </div>
    </div>

    <div className="field">
      <div className="control">
        <button className="button is-link">Submit</button>
      </div>
    </div>

  </form>
    )
  }
};

VavForm = reduxForm({
  form: 'signIn',
})(VavForm);

export default VavForm;

// export default class SmallForm extends Component {
// };

