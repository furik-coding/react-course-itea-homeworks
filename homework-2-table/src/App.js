import React, { Component } from 'react';
import './App.css';
import Table from './Table';
import Row from './Row';
import Cell from './Cell';

class App extends Component {


  render() {
    return (
      <>
        <Table>
          <Row head="true">
            <Cell cells="2" type="" background="red">#</Cell>
            <Cell type="date">2</Cell>
            <Cell type="number">3</Cell>
            <Cell type="money" currency="$">4</Cell>
          </Row>
          <Row>
            <Cell cells="2" type="date" background="red">1</Cell>
            <Cell type="date">2</Cell>
            <Cell type="number">3</Cell>
            <Cell type="money" currency="$">4</Cell>
          </Row>
          <Row>
            <Cell cells="2" type="date" background="red">1</Cell>
            <Cell type="date">2</Cell>
            <Cell cells="2" type="number">3</Cell>
          </Row>
        </Table>
      </>
    )
  }

}

export default App;
