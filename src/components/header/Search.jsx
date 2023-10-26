// import React, {
//   useState, useContext, useEffect, useRef,
// } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import Context from "../Context";
// import { updateInputValue } from "../../redux/actionsCreators/inputValueActionsCreators";
// import { IconSearch } from "./icons/search/IconSearch";
// import Button from "../button/Button";
// import styles from "./Header.module.scss";
// // import SearchIcon from "./SearchIcon";
// // import SearchForm from "./SearchForm";


// function SearchInHeader() {
//   const [isLinkVisible, setIsLinkVisible] = useState(true);
//   const [inputVisible, setInputVisible] = useState(false);
//   const inputValueFromRedux = useSelector((state) => state.inputValue.inputValue);
//   const [inputValue, setInputValue] = useState(inputValueFromRedux);
//   const context = useContext(Context);
//   const dispatch = useDispatch();
//   const searchContainer = useRef(null);
//   const navigate = useNavigate();

//   const handleSearch = () => {
//     navigate(`/products-search?query=${inputValue}`);
//   };

//   useEffect(() => {
//     if (inputVisible) {
//       setIsLinkVisible(false);
//       context.setIsLinkVisible(false);
//     } else {
//       setIsLinkVisible(true);
//       context.setIsLinkVisible(true);
//     }
//   }, [inputVisible, context]);

//   const handleClickOutside = (event) => {
//     if (searchContainer.current && !searchContainer.current.contains(event.target)) {
//       setInputVisible(false);
//     }
//   };


//   useEffect(() => {
//     document.addEventListener("mousedown", handleClickOutside);
  
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);
  

//   const handleClick = () => {
//     setInputVisible((prevVisible) => !prevVisible);
//   };


// const handleInputDoubleClick = (event) => {
//   event.preventDefault();
//   setInputValue("");
//   setInputVisible(false);
// };

//   const crossStyle = {
//     height: "18px",
//   };

//   useEffect(() => {
//     setInputValue(inputValueFromRedux);
//   }, [inputValueFromRedux]);

//   const handleInputChange = (e) => {
//     const { value } = e.target;
//     dispatch(updateInputValue(value));
//     setInputValue(value);
//   };

//   return (
//     <div
//       className={isLinkVisible ? styles.hiddenSearchMenu : styles.hiddenSearchMenuHidden}
//       ref={searchContainer}
//     >
//       {isLinkVisible ? (
//         <div
//           className={styles.iconSearch}
//           onClick={handleClick}
//           onKeyDown={handleClick}
//           role="button"
//           tabIndex={0}
//         >
//           <IconSearch />
//         </div>

//       ) : (
//         <div className={styles.searching}>
//           {inputVisible && (
//           <input
//             className={styles.input}
//             type="text"
//             placeholder="Пошук..."
//             value={inputValue}
//             onChange={handleInputChange}
//             onKeyDown={(e) => {
//               if (e.key === "Enter") {
//                 handleSearch();
//               }
//             }}
//           />
//           )}
//           <div className={styles.searchButtons}>
//             <Button
//               toPage={`/products-search?query=${inputValue}`}
//               type="submit"
//               // name="find"
//               className={styles.searchBtn}
//               text="Знайти"
//               width="80px"
//             />
//             <div
//               onClick={handleInputDoubleClick}
//               onKeyDown={handleClick}
//               className={`${styles.searchBtn} ${styles.closeSearchBtn}`}
//               role="button"
//               tabIndex={0}
//             >
//               <span style={crossStyle}>
//                 &#x2715;
//               </span>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default SearchInHeader;


import React, {
  useState, useContext, useEffect, useRef, useCallback,
} from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Context from "../Context";
import { updateInputValue } from "../../redux/actionsCreators/inputValueActionsCreators";
import styles from "./Header.module.scss";
import SearchIcon from "./SearchIcon";
import SearchForm from "./SearchForm";


function SearchInHeader() {
  const [isLinkVisible, setIsLinkVisible] = useState(true);
  const [inputVisible, setInputVisible] = useState(false);
  const inputValueFromRedux = useSelector((state) => state.inputValue.inputValue);
  const [inputValue, setInputValue] = useState(inputValueFromRedux);
  const context = useContext(Context);
  const dispatch = useDispatch();
  const searchContainer = useRef(null);
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/products-search?query=${inputValue}`);
  };

  const toggleInputVisibility = () => {
    const visibility = !inputVisible;
    setInputVisible(visibility);
    setIsLinkVisible(!visibility);
    context.setIsLinkVisible(!visibility);
  };

  const handleClickOutside = useCallback((event) => {
    if (searchContainer.current && !searchContainer.current.contains(event.target)) {
      setInputVisible(false);
      setIsLinkVisible(true);
      context.setIsLinkVisible(true);
    }
  }, [context]);

  const handleInputDoubleClick = (event) => {
    event.preventDefault();
    setInputValue("");
    setInputVisible(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  useEffect(() => {
    setInputValue(inputValueFromRedux);
  }, [inputValueFromRedux]);

  const handleInputChange = (e) => {
    const { value } = e.target;
    dispatch(updateInputValue(value));
    setInputValue(value);
  };

  return (
    <div
      className={
        isLinkVisible ? styles.hiddenSearchMenu
          : styles.hiddenSearchMenuHidden
        }
      ref={searchContainer}
    >
      {isLinkVisible ? (
        <SearchIcon onClick={toggleInputVisibility} />
      ) : (
        <SearchForm
          inputValue={inputValue}
          handleInputChange={handleInputChange}
          handleSearch={handleSearch}
          handleInputDoubleClick={handleInputDoubleClick}
        />
      )}
    </div>
  );
}

export default SearchInHeader;
