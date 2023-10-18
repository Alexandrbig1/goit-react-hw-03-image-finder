import SearchBar from "./SearchBar/SearchBar";
import ImageGallery from "./ImageGallery/ImageGallery";
import { AppDiv } from "./Layout";
import toast, { Toaster } from "react-hot-toast";

export default function App() {
  return (
    <AppDiv>
      <SearchBar />
      <ImageGallery />
      <Toaster position="top-right" />
    </AppDiv>
  );
}
