import React from 'react';
// import React, { Component } from 'react'; //import react and pull off the property Component as a variable called Component -- just like: const Component = React.Component


//*this is a functional component
// const SearchBar = () => {
//   return <input />;
// };

//*this is a class component - used whenever you want a component to have internal recordkeeping

//class SearchBar extends Component //*(read comment above)
class SearchBar extends React.Component{
  constructor(props) {
    super(props);

    this.state = {term: ''};
  }


  render() {

    return ( //controlled components - when user types something, they only triggered event. setState is called and component re-renders and the input value is updated
       <div className="search-bar">
       <input
          value = {this.state.term}
          onChange={(event) => this.onInputChange(event.target.value)} />
     </div>

      // //<input onChange={this.onInputChange} />;
      //  <div>
     //   <input onChange={(event) => this.setState({ term: event.target.value})} />
    //    Value of the input: {this.state.term}
    //  </div>

    );
  }

  // onInputChange(event) {
  //   console.log(event.target.value)
  // }

  onInputChange(term){
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}




export default SearchBar;