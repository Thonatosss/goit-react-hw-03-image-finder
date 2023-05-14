import React, { Component } from 'react';
import { toast } from 'react-toastify';
import { Form, Header, Input, SubmitBtn } from './SearchBar.styled';

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
          <Header>
            <Form onSubmit={this.handleSubmit}>
              <SubmitBtn type="submit">
                <span>Search</span>
              </SubmitBtn>

              <Input
                value={this.state.searchQuerry}
                onChange={this.handleSearchQuerry}
                name="searchQuerry"
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search images and photos"
              />
            </Form>
          </Header>
        );
    }
}

export {SearchBar};