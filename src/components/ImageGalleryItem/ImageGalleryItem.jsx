const ImageGalleryItem = ({imgUrl}) => {
  return (
    <div>
      <li>
        <img src={imgUrl} alt="" width='300'/>
      </li>
    </div>
  );
};

export { ImageGalleryItem };
