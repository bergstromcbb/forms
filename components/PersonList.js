import React from 'react';
import axios from 'axios';



export default class PersonList extends React.Component {
  state = {
    // persons: [],
    equips:[]
  }

//   componentDidMount() {
//     axios.get(`https://jsonplaceholder.typicode.com/users`)
//       .then(res => {
//         console.log(res);
//         this.setState({ persons: res.data });
//       })
//   }

componentDidMount() {
    axios.get(`/api/tags/assigned/26773`)
        // .then(json => console.log(json))
        // .then(data => data.data)
        .then(res => {
        const equips = res.data;
           this.setState({
             equips
           });
         })
     }

  render() { 
    return (
      <ul>
        { this.state.equips.map(equip => <li key={equip.id}>{equip.name}</li>)}
      </ul>
    )
  }
}