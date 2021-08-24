import React, { Component } from 'react';
import './App.css';
import ButtonItem from './ButtonItem'
import List from './List';
import ListItem from './ListItem';

 class App extends Component {

  state = {
    users: []
  }


  componentDidMount = () => {
    

    fetch('http://www.json-generator.com/api/json/get/cvpVwIsxwy?indent=2')
    .then( res => res.json() )
    .then( res => {
      let convertedUs = res.map(user => ({
        interviewed: false,
        user: user
      }))
      this.setState({
        users: convertedUs
      })
    })
    
    

  }

  

  


  clickHandler = (user_id) => () => {
    console.log(user_id)

    const changedUsers = this.state.users.map(item => {
      if (item.user.index === user_id) {
        item.interviewed = !item.interviewed;
        console.log(item.interviewed)
      }
      return item;
    });

    this.setState({
      users: changedUsers
    })

  }
  
  render() {

    const { clickHandler } = this; 
    const { users } = this.state;
    const listElements = users.map(item => <ListItem user={item.user} interviewed={item.interviewed} handler={clickHandler} /> )

    return (
      <>
        <List>
          {listElements}
          <ListItem />
        </List>
      </>
    );
  }
}

export default App;
