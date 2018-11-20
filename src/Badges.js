import React, { Component } from 'react';
import './App.css';
import './index.css';
import employee from './employee.png';
import datasecurity from './datasecurity.png';
import oneyear from './oneyear.png';

class Badges extends Component {
  state = {
    header: "Badges",
    contacts: [
    {
      title: "Employee",
      name: "Credly",
  },
  {
    title: "Security",
    name: "Credly",
  },
  {
    title: "One Year Anniversary",
    name: "Credly",
  }
 ]
}

  render() {
    let contacts = this.state.contacts.map((contact,index) =>
    <li> {contact.title} Badge Issued By {contact.name}</li>
  );
    return (
      <div>
      <div className="container emp-profile">
      <label><b>Emma's Badges</b></label>
          <ul className="container emp-profile">{contacts}</ul>
          <a target="_blank" href="https://www.youracclaim.com/badges/f05f7e27-cdc9-4418-b57a-d815651c28e1"><img src={employee} /></a>;
          <a target="_blank" href="https://www.youracclaim.com/badges/a5972805-5fa7-4a7c-ace2-64e503288dce"><img src={datasecurity} /></a>;
          <a target="_blank" href="https://www.youracclaim.com/badges/3f44c247-2e34-4163-8e7e-c28ebd5a2277"><img src={oneyear} /></a>;
          </div>
    </div>

    );
  }
}

export default Badges;
