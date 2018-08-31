
import React, { Component } from 'react';
import { Col, Row, Card } from 'reactstrap';
import PropTypes from 'prop-types';
import { getConfig } from '../getConfig';
let config = getConfig();

export default class AccountComponent extends Component {
  constructor () {
    console.log('constructing AccountComponent');
    super();
    this.state = {
    };
  }

  render () {
    const { accessToken, emailAddress, clientId, backend, compute } = this.props;
    const { backendHost } = config;
    console.log(this.props);
    return (
      <div className='MainViewport'>
        <Row>
          <Col xs='auto'>
            <div className='text'>
              <h1>Your account</h1>
            </div>
          </Col>
        </Row>
        <Row>
          <Col >
            <Card>
              {
                clientId !== null ? <p>Email: {emailAddress}</p> : <p>Not logged in</p>
              }
              {
                clientId !== null ? <p>Id: {clientId}</p> : <p>Your clientID: Not logged in</p>
              }
              {
                <p>Accesstoken: {accessToken}</p>
              }
              {
                (compute && compute.length > 0) ? (<p>Compute Nodes:<br /><ol> {compute.map((d, i) => <li>{d.name + ' with url ' + d.url}</li>)}</ol></p>) : <p>No compute nodes found.</p>
              }
              {
                <p>Backend: {backendHost}</p>
              }
            </Card>
          </Col>
        </Row>
      </div>);
  }
}

AccountComponent.propTypes = {
  accessToken: PropTypes.string,
  emailAddress: PropTypes.string,
  clientId: PropTypes.string,
  backend: PropTypes.string,
  compute: PropTypes.array
};
