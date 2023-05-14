import { LoadBtn } from "./LoadMoreButton.styled";

const LoadMoreButton = ({ onClick }) => {
  return (
    <LoadBtn type="button" onClick={() => onClick()}>
      Load more
    </LoadBtn>
  );
}; 

export { LoadMoreButton };