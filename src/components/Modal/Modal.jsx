import React, { Component } from 'react';
import { ModalContainer, ModalContent, ModalImg } from './Modal.styled';
import { createPortal } from 'react-dom';


const modalRoot = document.querySelector('#modal-root')
class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown)
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }
  handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      this.props.onCloseModal();
    }
  };
  handleKeyDown= event => {
    if (event.code === 'Escape') {
      this.props.onCloseModal();
    }
  }

  render() {
    return createPortal(
      <ModalContainer onClick={this.handleBackdropClick}>
        <ModalContent>
          <ModalImg src={this.props.imgSrc} />
        </ModalContent>
      </ModalContainer>,
      modalRoot
    );
  }
}

export { Modal };
