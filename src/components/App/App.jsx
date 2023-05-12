import { SearchBar } from "components/SearchBar/SearchBar";
import React, { Component } from 'react';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
        <SearchBar onSubmit={this.handleFormSubmit} />
        <ToastContainer/>
      </div>
    );
  }
  
};
