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

    // if (newSearch === "") {
    //   console.log("aaa");
    //   // Notify.info("Enter your request, please!", paramsForNotify);
    //   return;
    // }

    // if (newSearch === this.state.search) {
    //   console.log("zzz");
    //   // Notify.info("Enter new request, please!", paramsForNotify);
    //   return;
    // }

    this.setState({ search: newSearch, page: 1, galleryItems: [] });
  };

  // async componentDidMount() {
  //   const getFetch = await getApi();
  // }

  onLoadMoreClick = () => {
    this.setState((prevState) => prevState.page + 1);
  };

  async componentDidUpdate(prevProps, prevState) {
    if (
      prevState.search !== this.state.search ||
      prevState.page !== this.state.page
    ) {
      const photos = await getApi(
        this.state.search,
        this.state.page,
        perPage
      ).then((data) => {
        const photos = data.hits;
        this.setState({ galleryItems: photos });
      });
      // .catch(error)
      // .finally();
    }
    // if (
    //   prevState.query !== this.state.query ||
    //   prevState.page !== this.state.page
    // ) {
    //   // http with setstate
    //   try {
    //     const photos = await getApi();
    //     console.log(photos);
    //   } catch (error) {
    //   } finally {
    //   }
    // }
  }

  render() {
    return (
      <AppDiv>
        <SearchBar onSubmit={this.onSearchSubmit} />
        {this.state.galleryItems.length > 0 && (
          <ImageGallery photos={this.state.galleryItems} />
        )}
        {this.state.galleryItems.length > 1 && (
          <Button onClick={this.onLoadMoreClick} />
        )}
        {this.state.loading && <Loader />}
        <Toaster position="top-right" />
      </AppDiv>
    );
  }
}
