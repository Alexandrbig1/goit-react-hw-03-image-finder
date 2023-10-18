import {
  SearchBarHeader,
  SearchBarForm,
  SearchBarButton,
  SearchBarSpan,
  SearchBarInput,
  SearchBarIcon,
} from "./SearchBar.styled";

export default function SearchBar() {
  return (
    <SearchBarHeader>
      <SearchBarForm>
        <SearchBarButton type="submit">
          <SearchBarIcon />
          <SearchBarSpan>Search</SearchBarSpan>
        </SearchBarButton>

        <SearchBarInput
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </SearchBarForm>
    </SearchBarHeader>
  );
}
