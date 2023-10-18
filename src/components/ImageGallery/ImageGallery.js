import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem";
import { ImageGalleryMenu } from "./ImageGallery.styled";

export default function ImageGallery() {
  return (
    <ImageGalleryMenu>{<ImageGalleryItem></ImageGalleryItem>}</ImageGalleryMenu>
  );
}
