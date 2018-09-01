import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormAction } from './actions/formAction'
import './App.css';
import { reduxForm, Field, formValueSelector } from 'redux-form';
import { ReduxCheckbox, Checkboxes } from 'react-form-checkbox';

class AhuForm extends Component {

  handleSubmit = (event) => {
    event.preventDefault();
    const { firstName, checks, heathing_method, cooling_Method, volume, Ductwork, Delivery_Zone } = this.props
    this.props.AhuFormData({
      firstName,
      checks,
      heathing_method,
      cooling_Method,
      volume,
      Ductwork,
      Delivery_Zone
    })
  }
  render() {
   
    return (
      <form onSubmit={this.handleSubmit} className="form">
      
      
  <div className="field">
      <div className="control">
        <label className="label">Equipment Name</label>
        <Field className="input" name="equipName" component="input" type="text" placeholder="TUE04321" />
      </div>
    </div>
<div className="control">
        <label className="label shit">Checkboxes </label>
    <Field component={ReduxCheckbox(Checkboxes)} name="checks" className="shit" data={['Packaged Rooftop', 'Interior', '100% Makeup Unit']} />
    {/* <Field component={ReduxCheckbox(Checkboxes)} name="checks" data={options} /> */}

</div>

    <div className="field">
      <div className="control">
        <label className="label">Heating Method</label>
        <div className="select">
          <Field className="input metadropdown" name="heathing_method" component="select">
            <option value = ""> Choose... </option> 
            <option value="elecheat">ElecHeat</option>
            <option value="hotwaterheat">HotWaterHeat</option>
            <option value="steamheat">SteamHeat</option>
            <option value="gasheat">GasHeat</option>
          </Field>
        </div>
      </div>
    </div>

    <div className="field">
      <div className="control">
        <label className="label">Cooling Method</label>
        <div className="select">
          <Field className="input metadropdown" name="cooling_Method" component="select">
            <option value = ""> Choose... </option> 
            <option value = "dxcool" > dxcool </option> 
            <option value = "chilledWaterCool" > chilledWaterCool </option> 
          </Field>
        </div>
      </div>
    </div>

    <div className="field">
      <div className="control">
        <label className="label">Volume</label>
        <label className="radio">
          <Field name="volume" className="smallradiofield" component="input" type="radio" value="constantVolume" />
          {' '}
          constantVolume
        </label>
        <label className="radio">
          <Field name="volume" className="smallradiofield" component="input" type="radio" value="variableVolume" />
          {' '}
          variableVolume
        </label>
      </div>
    </div>
    
    <div className="field">
      <div className="control">
        <label className="label">Delivery Zone</label>
        <div className="select">
          <Field className="input metadropdown" name="Delivery_Zone" component="select">
            <option value = ""> Choose... </option> 
            <option value = "directZone" > directZone: AHU supplies air directly to the zone </option> 
            <option value = "vavZone" > vavZone: AHU supplies air to VAV terminal units </option> 
            <option value = "chilledBeamZone" > chilledBeamZone: AHU supplies air to chilled beam terminal units </option> 
            <option value = "multiZone" > multiZone: Air is split into a duct per zone </option>
          </Field>
        </div>
      </div>
    </div>

    <div className="field">
      <div className="control">
        <label className="label">Ductwork</label>
        <div className="select">
          <Field className="input metadropdown" name="Ductwork" component="select">
            <option value = ""> Choose... </option> 
            <option value = "singleDuct" > singleDuct </option> 
            <option value = "dualDuct" > dualDuct </option> 
            <option value = "tripleDuct" > tripleDuct </option> 
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

AhuForm = reduxForm({
  form: 'AhuForm',
})(AhuForm);

const selector = formValueSelector('AhuForm') // <-- same as form name
AhuForm = connect(
  state => {
    // or together as a group
    const selectedValues = selector(state, 'equipName', 'checks', 'heathing_method', 'cooling_Method', 'volume', 'Delivery_Zone', 'Ductwork')
    return {
     ...selectedValues
    }
  },(dispatch)=>{
     return {
       AhuFormData : (data) => dispatch(FormAction.saveAhuFormData(data)),
     }
  }
)(AhuForm)

export default AhuForm;
