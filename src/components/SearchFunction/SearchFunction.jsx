// src/components/SearchFunction/SearchFunction.jsx
import { useSelector } from "react-redux";
import Fuse from "fuse.js";

const SearchFunction = ({
  data,
  onSearchResults,
  query,
  setQuery,
  navigate,
}) => {
  const { baseLanguage, targetLanguage } = useSelector(
    (state) => state.languages
  );

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    if (query.trim() !== "") {
      const fuse = new Fuse(data, {
        keys: [baseLanguage, `translation.${targetLanguage}`],
        threshold: 0.3,
      });

      const results = fuse.search(query).map((result) => result.item);
      onSearchResults(results);
      navigate(`/search?query=${query}`);
    } else {
      onSearchResults([]);
      navigate("/");
    }
  };

  const handleEnterSubmit = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="search-field-container">
      <input
        type="text"
        placeholder="Search vocabularies..."
        value={query}
        onChange={handleInputChange}
        onKeyDown={handleEnterSubmit}
        className="search-input-field"
      />
      <button onClick={handleSearch} className="search-button">
        Search
      </button>
    </div>
  );
};

export default SearchFunction;
