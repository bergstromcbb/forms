import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';
import { FormAction } from './actions/formAction'
import { reduxForm, Field, formValueSelector } from 'redux-form';

class VavForm extends Component {
  handleSubmit = (event) => {
    event.preventDefault();

    const { ductworkconfig, volume, fan_power_config } = this.props;
    this.props.VavFormData({
      ductworkconfig, volume, fan_power_config
    })
  }
  render() {
  
    return (
      <form onSubmit={this.handleSubmit} className="form">


  <div className="field">
  <div className="control">
        <label className="label">Ductwork Configuration</label>
        <div className="select">
          <Field className="input metadropdown" name="ductworkconfig" component="select">
            <option value = ""> Choose... </option> 
            <option value="Single">Single</option>
            <option value="Double">Double</option>
          </Field>
        </div>
      </div>
  </div>
 <div className="field">
      <div className="control">
        <label className="label">Volume</label>
        <label className="radio">
          <Field name="volume" className="smallradiofield" component="input" type="radio" value="Cool Only" />
          {' '}
          Cool Only
        </label>
        <label className="radio">
          <Field name="volume" className="smallradiofield" component="input" type="radio" value="Cool Only with Reheat" />
          {' '}
            Cool Only with Reheat
            </label>
      </div>
    </div>

    <div className="field">
      <div className="control">
        <label className="label">Fan Power Configuration </label>
        <div className="select">
          <Field className="input metadropdown" name="fan_power_config" component="select">
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
        <button className="button is-link" type="submit">Submit</button>
      </div>
    </div>

  </form>
    )
  }
};

VavForm = reduxForm({
  form: 'vavForm',
})(VavForm);

 const selector = formValueSelector('vavForm') // <-- same as form name
 VavForm = connect(
   state => {
     // or together as a group
     const selectedValues = selector(state, 'ductworkconfig', 'volume', 'fan_power_config')
     return {
      ...selectedValues
     }
   },(dispatch)=>{
      return {
        VavFormData : (data) => dispatch(FormAction.saveVavFormData(data)),
      }
   }
 )(VavForm)
 
 export default VavForm;

