import { ImageGalleryItemList } from "./ImageGalleryItem.styled";
import ModalWindow from "../Modal/Modal";

export default function ImageGalleryItem({ photos }) {
  // ModalIsOpen() {
  //   isOpen: false;
  // }
  // ModalIsClose() {

  //   onRequestClose = { closeModal };
  // }
  console.log(photos);

  return photos.map((item) => {
    return (
      <ImageGalleryItemList key={item.id}>
        <img src={item.webformatURL} alt="" />
        <ModalWindow />
      </ImageGalleryItemList>
    );
  });
}
