import React, { Component } from 'react';
import './App.css';
import { reduxForm, Field } from 'redux-form';
import { ReduxCheckbox, Checkboxes } from 'react-form-checkbox';
import VavForm from './smallform';

let AhuForm = props => {
const { handleSubmit } = props;
  return <form onSubmit={handleSubmit} className="form">    
  <div className="field">
      <div className="control">
        <label className="label">Equipment Name</label>
        <Field className="input" name="firstName" component="input" type="text" placeholder="TUE04321" />
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

  </form>;
};

AhuForm = reduxForm({
  form: 'signIn',
})(AhuForm);

// let VavForm = props => {
// const { handleSubmit } = props;
//   return <form onSubmit={handleSubmit} className="form">    
//   <div className="field">
//   <div className="control">
//         <label className="label">Ductwork Configuration</label>
//         <div className="select">
//           <Field className="input" name="ductworkconfig" component="select">
//             <option />
//             <option value="elecheat">Single</option>
//             <option value="hotwaterheat">Double</option>
//           </Field>
//         </div>
//       </div>
//   </div>
//  <div className="field">
//       <div className="control">
//         <label className="label">Volume</label>
//         <label className="radio">
//           <Field name="volume" component="input" type="radio" value="constantVolume" />
//           {' '}
//           Cool Only
//         </label>
//         <label className="radio">
//           <Field name="volume" component="input" type="radio" value="variableVolume" />
//           {' '}
//             Cool Only with Reheat
//             </label>
//       </div>
//     </div>

//     <div className="field">
//       <div className="control">
//         <label className="label">Fan Power Configuration </label>
//         <div className="select">
//           <Field className="input" name="fan power config" component="select">
//             {/* <option /> */}
//             <option value = ""> Choose... </option> 
//                 <option value = "seriesaFanPoweredElecReheat"> series fanPowered elecReheat </option>
//                 <option value = "seriesFanPoweredHotWaterReheat"> series fanPowered hotWaterReheat </option> 
//                 <option value = "parrallelFanPoweredElecReheat"> parallel fanPowered elecReheat </option> 
//                 <option value = "parrallelFanPoweredHotWaterReheat"> parallel fanPowered hotWaterReheat </option> 
//           </Field>
//         </div>
//       </div>
//     </div>

//     <div className="field">
//       <div className="control">
//         <button className="button is-link">Submit</button>
//       </div>
//     </div>

//   </form>;
// };

// VavForm = reduxForm({
//   form: 'signIn',
// })(VavForm);


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
                    <span className="">Display Name</span>
                    <input
                      onChange={this.handleName}
                      name="campaignName"
                      type="text"
                      className="form-control"
                      placeholder = "TUE04321"
                      required=""
                    />
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

    {/* );
  }
} */}

{/* Greeting.propTypes = {
    setCampaignName: PropTypes.func

} */}
        {/* <div className="container">
          <p className="App-intro">
            Contact Form
          </p>
          <SignInForm onSubmit={this.handleSignIn} />
        </div> */}
      </div>
    );
  }
}

export default App;
