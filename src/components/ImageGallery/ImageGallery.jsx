import React, { Component } from 'react';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Triangle } from 'react-loader-spinner';
import axios from 'axios';
import { Modal } from 'components/Modal/Modal';
import { List } from './ImageGallery.styled';
import { LoadMoreButton } from 'components/LoadMoreButton/LoadMoreButton';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '34587378-1709a2c174b77a7efdbc7c71b';

class ImageGallery extends Component {
  state = {
    images: [],
    page: 1,
    status: '',
    showModal: false,
    currentImg: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.imgToSearch !== this.props.imgToSearch) {
      this.setState({ images: [], page: 1 }, () => this.getImages());
    }
  }

  async getImages() {
    try {
      this.setState({ status: 'pending' });
      const { page } = this.state;
      const response = await axios.get(
        `${BASE_URL}?key=${API_KEY}&q=${this.props.imgToSearch}&image_type=photo&per_page=12&page=${page}`
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
    this.setState(
      prevState => ({ page: prevState.page + 1 }),
      () => {
        this.getImages();
      }
    );
  };

  showModal = imgUrl => {
    this.setState({ showModal: true, currentImg: imgUrl });
  };

  hideModal = () => {
    this.setState({ showModal: false, currentImg: '' });
  };

  render() {
    const { images, status, showModal, currentImg } = this.state;

    if (status === 'pending') {
      return <Triangle />;
    }

    if (status === 'rejected') {
      return <h1>Opps... Something went wrong :(</h1>;
    }

    if (status === 'resolved') {
      return (
        <div>
          <List>
            {images.map(image => (
              <ImageGalleryItem
                key={image.id}
                imgUrl={image.webformatURL}
                onOpenModal={() => this.showModal(image.largeImageURL)}
              />
            ))}
          </List>
          <LoadMoreButton onClick={this.loadMore} />
          {showModal && (
            <Modal
              onCloseModal={this.hideModal}
              imgSrc={currentImg}
            ></Modal>
          )}
        </div>
      );
    }
  }
}

export { ImageGallery };
