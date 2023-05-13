import { SearchBar } from "components/SearchBar/SearchBar";
import React, { Component } from 'react';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ImageGallery } from "components/ImageGallery/ImageGallery";

export class App extends Component{

  state = {
    searchQuerry: ''
  }

  handleFormSubmit = searchQuerry => {
    this.setState({searchQuerry})
  }
  render() {
    return (
      <div>
        <ToastContainer />
        <SearchBar onSubmit={this.handleFormSubmit} />
        <ImageGallery imgToSearch={ this.state.searchQuerry } />
      </div>
    );
  }
  
};
