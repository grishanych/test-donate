import React from "react";
import PropTypes from "prop-types";
import Button from "../button/Button";
import styles from "./Header.module.scss";

function SearchForm({
  inputValue, handleInputChange, handleSearch,
}) {
  return (
    <div className={styles.searching}>
      <div className={styles.inputWrapper}>
        <input
          className={styles.input}
          type="text"
          placeholder="Пошук..."
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
        />
      </div>
      <div className={styles.searchButtons}>
        <Button
          toPage={`/products-search?query=${inputValue}`}
          type="submit"
          className={styles.searchBtn}
          text="Знайти"
          width="80px"
        />
      </div>
    </div>
  );
}

SearchForm.propTypes = {
  inputValue: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleSearch: PropTypes.func.isRequired,
};

export default SearchForm;
