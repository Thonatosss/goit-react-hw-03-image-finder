import PropTypes from 'prop-types';
import { ImageContainer, ListItem } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ imgUrl, onOpenModal }) => {
  return (
    <ImageContainer>
      <ListItem>
        <img
          src={imgUrl}
          alt=""
          width="100%"
          height="200"
          onClick={() => onOpenModal()}
        />
      </ListItem>
    </ImageContainer>
  );
};

ImageGalleryItem.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  onOpenModal: PropTypes.func.isRequired,
};

export { ImageGalleryItem };
