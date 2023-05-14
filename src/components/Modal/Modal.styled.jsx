import styled from '@emotion/styled';

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* темний оверлей */
`;

const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 800px;
  max-height: 800px;
`;

const ModalImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export { ModalContainer, ModalContent, ModalImg };
