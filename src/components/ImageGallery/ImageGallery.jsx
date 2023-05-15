import React, { Component } from 'react';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Triangle } from 'react-loader-spinner';
import { Modal } from 'components/Modal/Modal';
import { List } from './ImageGallery.styled';
import { LoadMoreButton } from 'components/LoadMoreButton/LoadMoreButton';
import { LoaderWrapper } from 'components/Loader/Loader.styled';



class ImageGallery extends Component {
  state = {
    status: '',
    showModal: false,
    currentImg: '',
  };

  

  showModal = imgUrl => {
    this.setState({ showModal: true, currentImg: imgUrl });
  };

  hideModal = () => {
    this.setState({ showModal: false, currentImg: '' });
  };

  render() {
    const {showModal, currentImg } = this.state;
    const {status} = this.props;

    if (status === 'pending') {
      return (
        <LoaderWrapper>
          <Triangle />
        </LoaderWrapper>
      );
    }

    if (status === 'rejected') {
      return <h1>Opps... Something went wrong :(</h1>;
    }

    if (status === 'resolved') {
      return (
        <div>
          <List>
            {this.props.images.map(image => (
              <ImageGalleryItem
                key={image.id}
                imgUrl={image.webformatURL}
                onOpenModal={() => this.showModal(image.largeImageURL)}
              />
            ))}
          </List>
          <LoadMoreButton onClick={this.props.loadMore} />
          {showModal && (
            <Modal onCloseModal={this.hideModal} imgSrc={currentImg}></Modal>
          )}
        </div>
      );
    }
  }
}

export { ImageGallery };
