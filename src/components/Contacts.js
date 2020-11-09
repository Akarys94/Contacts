import React, { Component } from "react";
import Table from "react-bootstrap/Table";

class Contacts extends Component {
  constructor(props) {
    super(props);
    this.state = { contacts: [] };
  }
  componentDidMount() {
    fetch("https://randomuser.me/api/?results=10")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ contacts: data.results });
      })
      .catch(console.log);
  }
  render() {
    console.log(this.state.contacts);
    return (
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Avatar</th>
              <th>Full Name</th>
              <th>Birthday</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Location</th>
              <th>Nationality</th>
            </tr>
          </thead>
          <tbody>
            {this.state.contacts.map((contact, index) => (
              <tr key={index}>
                <td>{contact.gender}</td>
                <td>
                  {contact.name.title +
                    " " +
                    contact.name.first +
                    " " +
                    contact.name.last}
                </td>
                <td>{contact.dob.date + " " + contact.dob.age}</td>
                <td>{contact.email}</td>
                <td>{contact.phone}</td>
                <td>
                  {contact.location.country + " " + contact.location.state}
                </td>
                <td>{contact.email}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        ;
      </div>
    );
  }
}
export default Contacts;
