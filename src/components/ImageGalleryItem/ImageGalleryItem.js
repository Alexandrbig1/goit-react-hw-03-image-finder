import { ImageGalleryItemList } from "./ImageGalleryItem.styled";
import { Component } from "react";
import ModalWindow from "../Modal/Modal";

export class ImageGalleryItem extends Component {
  ModalIsOpen() {
    isOpen: true;
  }
  ModalIsClose() {
    onRequestClose: false;
  }

  render() {
    return (
      <ImageGalleryItemList>
        <img src="" alt="" />
        <ModalWindow
          ModalIsOpen={this.ModalIsOpen}
          ModalIsClose={this.ModalIsClose}
        />
      </ImageGalleryItemList>
    );
  }
}
