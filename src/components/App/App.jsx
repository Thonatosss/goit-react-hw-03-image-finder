import React, { Component } from 'react';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '34587378-1709a2c174b77a7efdbc7c71b';

export class App extends Component {
  state = {
    searchQuery: '',
    images: [],
    page: 1,
    status: '',
    };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.setState({ images: [], page: 1, status: 'pending' }, () => this.getImages());
    }
  }

  async getImages() {
    try {
      const { page, searchQuery } = this.state;
      const response = await axios.get(
        `${BASE_URL}?key=${API_KEY}&q=${searchQuery}&image_type=photo&per_page=12&page=${page}`
      );
      const newImages = response.data.hits;
      this.setState(prevState => ({
        images: [...prevState.images, ...newImages],
        status: 'resolved',
      }));
    } catch (error) {
      this.setState({ status: 'rejected' });
    }
  }

  loadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }), () => {
      this.getImages();
    });
  };

  handleFormSubmit = searchQuery => {
    this.setState({ searchQuery });
  };

  render() {
    const { images, status } = this.state;

    return (
      <div>
        <ToastContainer />
        <SearchBar onSubmit={this.handleFormSubmit} />
        <ImageGallery images={images} status={status} loadMore={this.loadMore} /> {/* Pass the 'status' prop */}
      </div>
    );
  }
}
