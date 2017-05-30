import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const API_KEY = '';


class App extends Component {
  constructor(props){
    super(props);

    this.state = { videos: [] };


    YTSearch({key: API_KEY, term: 'cameras'}, (videos) => {
      this.setState({ videos }); // this syntax means key and value have same name
      // this.setState({videos: videos});
    });
  }

  render(){
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    );
    //we're passing 'prop' videos to VideoList
  }
}

ReactDOM.render(<App />, document.querySelector('.container'))