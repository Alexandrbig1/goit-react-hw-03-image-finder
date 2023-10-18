import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem";
import { ImageGalleryMenu } from "./ImageGallery.styled";

export default function ImageGallery({ getApi }) {
  //   "https://pixabay.com/api/?key=39155276-6bb78cfc3029a8ff9cc1c0e7d";

  return (
    <ImageGalleryMenu>{<ImageGalleryItem></ImageGalleryItem>}</ImageGalleryMenu>
  );
}
