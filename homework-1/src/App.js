import React, { Component } from 'react';
import guests from './guests.json';
import ListItem from './ListItem';
import ShowMore from './ShowMore';
import ShowAll from './ShowAll';

const convertedGuests = guests.map(user => ({
  arrived: false,
  guest: user
}));



class App extends Component {


  state = {
    guests: convertedGuests,
    query: "",
    filter: null,
    numberPosts: 10
  }

  changeUserArrived = (user_id) => () => {
    console.log(user_id)

    const changedUsers = this.state.guests.map(user => {
      if (user.guest.index === user_id) {
        user.arrived = !user.arrived;
      }
      return user;
    });

    const filterdUsers = changedUsers.filter(guest => guest.arrived === false);

    this.setState({
      guests: filterdUsers
    })
  }

  searchHandler = e => {
    console.log(e.target.value)

    const { guests } = this.state;
    const query = e.target.value.toLowerCase();
    const results = guests.filter( user => { 
      for( let key in user.guest ) { 
          let item = user.guest[key];
          if(item.toString().toLowerCase().indexOf( query ) !== -1 ) {
            return user
          }
      }
    });


    this.setState({
      query: e.target.value,
      filter: results
    })
  }

  showMoreGuests = () => {
    const nums = this.state.numberPosts;
    if (nums < this.state.guests.length) {
      let newNums;
      if ((this.state.guests.length - nums) >= 10) {
        newNums = nums + 10;
      } else {
        newNums = nums + (this.state.guests.length - nums);
      }
      this.setState({
        numberPosts: newNums
      })
      console.log(newNums)
    }

  }

  showAllGuests = () => {
    this.setState({
      numberPosts: this.state.guests.length
    })
  }



  render = () => {

    const { changeUserArrived, searchHandler, showMoreGuests, showAllGuests } = this;

    

    const { guests, query, filter, numberPosts } = this.state;

    let list;
    if (filter !== null && query.length > 0) {
      list = filter
    } else {
      list = guests
    }

    let listElement = list.map(
      (user, key) => {
        if (key < numberPosts) {
          return (
            <ListItem key={key} user={user} changer={changeUserArrived} />
          )
        }
      }
    );

    let listElLenght = listElement.length;

    return (
      <>
        <header>
          <div className="container" >
            <input type="text" value={query} onChange={searchHandler} />
            <p>{listElement.length} {listElLenght > 1 || listElLenght === 0 ? 'results' : 'result'}</p>
          </div>
        </header>
        <div className="container" >
          {list.length > 0 ? listElement : <h2> Not found </h2>}
          {numberPosts < listElLenght ? <ShowMore clicker={showMoreGuests} /> : null}
          {numberPosts < listElLenght ? <ShowAll clicker={showAllGuests} /> : null}
        </div>
      </>
    )
  }

}

export default App;
