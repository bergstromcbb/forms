import React from 'react';
import axios from 'axios';



export default class PersonList extends React.Component {
  state = {
    // persons: [],
    equips:[]
  }

// componentWillReceiveProps(nextProps) {

// }

componentDidMount() {
    // debugger
    setTimeout(() => {
        // debugger
       if (window.selectedNode && window.selectedNode.length) {
           alert("we get the selectedNode")
           axios.get(`/api/tags/assigned/${window.selectedNode}`)
               // .then(json => console.log(json))
               // .then(data => data.data)
               .then(res => {
                   const equips = res.data;
                   this.setState({
                       equips
                   });
               })
       } else {
           alert("NO selected Node ")
       }
    }, 15000);
    }

  render(){ 
    return (
      <ul>
        { this.state.equips.map(equip => <li key={equip.id}>{equip.name}</li>)}
      </ul>
    )
  }
}

