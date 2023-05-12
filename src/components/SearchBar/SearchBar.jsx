import React, { Component } from 'react';
import { toast } from 'react-toastify';

class SearchBar extends Component {
  state = {
    searchQuerry: ''
  }

  handleSearchQuerry = event => {
    this.setState({searchQuerry: event.target.value.toLowerCase()})
  }
  handleSubmit = event => {

    event.preventDefault();
    const { onSubmit } = this.props;
    const { searchQuerry } = this.state;
    if (searchQuerry.trim() === '') {
      return toast.error('Search querry can not be empty!')
      
    }
    onSubmit(searchQuerry);
    this.setState({ searchQuerry: '' });

  }
    render() {
        return (
          <header>
            <form onSubmit={this.handleSubmit}>
              <button type="submit">
                <span>Search</span>
              </button>

              <input
                value={this.state.searchQuerry}
                onChange={this.handleSearchQuerry}
                name='searchQuerry'
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search images and photos"
              />
            </form>
          </header>
        );
    }
}

export {SearchBar};