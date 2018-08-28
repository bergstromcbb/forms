import React, { Component } from 'react';
import './App.css';
import { reduxForm, Field } from 'redux-form';
import { ReduxCheckbox, Checkboxes } from 'react-form-checkbox';

class AhuForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit} className="form">
      
      
  <div className="field">
      <div className="control">
        <label className="label">Equipment Name</label>
        <Field className="input" name="firstName" component="input" type="text" placeholder="TUE04321" />
      </div>
    </div>
<div className="control">
        <label className="label shit">Checkboxes </label>
    <Field component={ReduxCheckbox(Checkboxes)} name="checks" className="shit" data={['Packageddfgsdfgs Rooftop', 'Interior', '100% Makeup Unit']} />
    {/* <Field component={ReduxCheckbox(Checkboxes)} name="checks" data={options} /> */}

</div>

    <div className="field">
      <div className="control">
        <label className="label">Heating Method</label>
        <div className="select">
          <Field className="input" name="heathing method" component="select">
            <option />
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
          <Field className="input" name="Cooling Method" component="select">
            <option />
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
          <Field name="volume" component="input" type="radio" value="constantVolume" />
          {' '}
          constantVolume
        </label>
        <label className="radio">
          <Field name="volume" component="input" type="radio" value="variableVolume" />
          {' '}
          variableVolume
        </label>
      </div>
    </div>
    
    <div className="field">
      <div className="control">
        <label className="label">Delivery Zone</label>
        <div className="select">
          <Field className="input" name="Delivery Zone" component="select">
            <option />
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
          <Field className="input" name="Ductwork" component="select">
            <option />
            <option value = "singleDuct" > singleDuct </option> 
            <option value = "dualDuct" > dualDuct </option> 
            <option value = "tripleDuct" > tripleDuct </option> 
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

AhuForm = reduxForm({
  form: 'signIn',
})(AhuForm);

export default AhuForm;
