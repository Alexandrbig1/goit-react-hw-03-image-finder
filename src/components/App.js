import SearchBar from "./SearchBar/SearchBar";
import ImageGallery from "./ImageGallery/ImageGallery";
import { AppDiv } from "./Layout";
import toast, { Toaster } from "react-hot-toast";
import Button from "./Button/Button";
import Loader from "./Loader/Loader";
import { Component } from "react";
import { getApi } from "./api";

const perPage = 12;

export class App extends Component {
  state = {
    search: "",
    page: 1,
    galleryItems: [],
    loading: false,
    error: false,
  };

  onSearchSubmit = (e) => {
    e.preventDefault();
    const newSearch = e.target.search.value.trim().toLowerCase();

    this.setState({ search: newSearch, page: 1, galleryItems: [] });
  };

  // async componentDidMount() {
  //   const getFetch = await getApi();
  // }

  onLoadMoreClick = () => {
    this.setState((prevState) => prevState.page + 1);
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      // http with setstate
    }
  }

  render() {
    return (
      <AppDiv>
        <SearchBar onSubmit={this.onSearchSubmit} />
        {this.state.galleryItems.length > 0 && <ImageGallery />}
        {this.state.galleryItems.length > 1 && (
          <Button onClick={this.onLoadMoreClick} />
        )}
        {this.state.loading && <Loader />}
        <Toaster position="top-right" />
      </AppDiv>
    );
  }
}
