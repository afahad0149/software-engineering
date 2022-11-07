import React from "react";
import styled from 'styled-components'

class CardsList extends React.Component {
   
  // Constructor 
  constructor(props) {
    super(props);
    this.state = {
        items: [],
        DataisLoaded: false
    };
    this.imageUrl = 'https://image.tmdb.org/t/p/w300/';
  }
  
  // ComponentDidMount is used to
  // execute the code 
  componentDidMount() {
    fetch(
      "https://movied.herokuapp.com/discover")
      .then((res) => res.json())
      .then((json) => {
          console.log(JSON.stringify(json));
          this.setState({
              items: json,
              DataisLoaded: true
          });
      })
  }
  render() {

    const { DataisLoaded, items } = this.state;

    if (!DataisLoaded) {   
      return ( 
      <div>
        <h1> Loading movies... </h1> 
      </div> 
      );
    }

    return (
      <>
        <List> 
          {
            items.map((item) => ( 
              <Cards key = { item.id } >
                <img src={ this.imageUrl+item.poster_path } alt=""/>
              </Cards>
            ))
          }
        </List>
      </>
    );
  }
}


const List = styled.div`
  display: flex;
  overflow-x: scroll;
`
const Cards = styled.div`
  margin: .25rem;
`

export default CardsList;