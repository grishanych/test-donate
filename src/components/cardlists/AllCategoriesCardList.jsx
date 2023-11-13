/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import CardList from "./CardList";
import SliderPrice from "../sliderPrice/SliderPrice";
import Spinner from "../spinner/Spinner";
import styles from "./AllCategoriesCardList.module.scss";
import { getProducts } from "../../api/getProducts";
import Button from "../button/Button";


function getUniqueList(list) {
  return [...new Set(list)];
}

export default function CategoriesCardList() {
  const [items, setItems] = useState([]);
  const [selectedValue, setSelectedValue] = useState("all");
  const [tempSliderValue, setTempSliderValue] = useState([0, 10000]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedSubCategory, setSelectedSubCategory] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState([]);
  const [selectedColor, setSelectedColor] = useState([]);
  const productsList = useSelector((state) => state.products.items);
  const filtersList = useSelector((state) => state.filters.items);

  const applyFilter = () => {
    setIsLoading(true);

    const filteredItems = productsList.filter((item) => {
      const categoryMatch = selectedValue === "all" || item.category === selectedValue;
      const subCategoryMatch = selectedValue !== "Одяг" || selectedSubCategory.length === 0 || item.subcategory === selectedSubCategory;
      const brandMatch = selectedBrand.length === 0 || item.brand === selectedBrand;
      const colorMatch = selectedColor.length === 0 || item.color === selectedColor;
      const priceMatch = item
        .currentPrice >= tempSliderValue[0] && item.currentPrice <= tempSliderValue[1];

      return categoryMatch && subCategoryMatch && brandMatch && colorMatch && priceMatch;
    });

    setItems(filteredItems);
    setIsLoading(false);
  };

  useEffect(() => {
    if (!selectedSubCategory || !selectedValue) {
      return;
    }

    setIsLoading(true);

    if (selectedValue === "all") {
      setItems([...productsList]);
      setIsLoading(false);
      return;
    }

    getProducts({
      category: selectedValue,
      subcategory: selectedSubCategory,
      brand: selectedBrand,
      color: selectedColor,
    })
      .then((data) => {
        console.log("API call success:", data);
        setItems(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Помилка при отриманні товарів:", error);
        setIsLoading(false);
      });
  }, [selectedValue, selectedSubCategory, selectedBrand, selectedColor, productsList]);

  useEffect(() => {
    const prices = items
      .filter((item) => item.currentPrice !== undefined)
      .map((item) => item.currentPrice);

    if (prices.length > 0) {
      setTempSliderValue([Math.min(...prices), Math.max(...prices)]);
    } else {
      setTempSliderValue([0, 0]);
    }
  }, [items]);

  useEffect(() => {
    if (selectedValue === "all") {
      setItems(productsList);
    } else {
      setItems(productsList.filter((item) => item.category === selectedValue));
    }
  }, [selectedValue, productsList]);

  const handleChange = (e) => {
    const selectCategory = e.target.value;
    setSelectedValue(selectCategory === selectedValue ? "all" : selectCategory);
    console.log(selectCategory);
    setSelectedSubCategory("");
  };

  const handleSubCategoryChange = (e) => {
    const subCategory = e.target.value;
    setSelectedSubCategory(subCategory);
    console.log(subCategory);
  };

  const handleBrandChange = (e) => {
    const brand = e.target.value;
    setSelectedBrand(brand);
  };

  const handleColorChange = (e) => {
    const color = e.target.value;
    setSelectedColor(color);
  };

  return (
    <>
      <div className={styles.subCategoryOptions}>
        {getUniqueList(
          filtersList.filter(({ type }) => type === "category").map(({ name }) => name),
        ).map((selectCategory) => (
          <Button
            type="button"
            key={selectCategory}
            onClick={() => handleChange({ target: { value: selectCategory } })}
          >
            {selectCategory}
          </Button>
        ))}
      </div>
      <div className={styles.filtrationWrapper}>
        <aside className={styles.filtration}>
          <div className={styles.filtrationSelectWrapper}>

            <div className={styles.categoryOptions} />

            {selectedValue === "Одяг" && (
              <>
                <h3>Підкатегорія</h3>
                {getUniqueList(
                  filtersList
                    .filter(({ type }) => type === "subcategory")
                    .map(({ name }) => name),
                ).map((subCategory) => (
                  <label
                    htmlFor={subCategory}
                    key={subCategory}
                    className={styles.checkboxLabel}
                  >
                    <input
                      type="checkbox"
                      name={subCategory}
                      checked={selectedSubCategory === subCategory}
                      onChange={() => handleSubCategoryChange({ target: { value: subCategory } })}
                    />
                    {subCategory}
                  </label>
                ))}

                <h3>Виробник/Бренд</h3>
                {getUniqueList(
                  filtersList
                    .filter(({ type }) => type === "brand")
                    .map(({ name }) => name),
                ).map((brand) => (
                  <label
                    htmlFor={brand}
                    key={brand}
                    className={styles.checkboxLabel}
                  >
                    <input
                      type="checkbox"
                      name={brand}
                      checked={selectedBrand === brand}
                      onChange={() => handleBrandChange({ target: { value: brand } })}
                    />
                    {brand}
                  </label>
                ))}

                <h3>Колір</h3>
                {getUniqueList(
                  filtersList
                    .filter(({ type }) => type === "color")
                    .map(({ name }) => name),
                ).map((color) => (
                  <label
                    htmlFor={color}
                    key={color}
                    className={styles.checkboxLabel}
                  >
                    <input
                      type="checkbox"
                      name={color}
                      checked={selectedColor === color}
                      onChange={() => handleColorChange({ target: { value: color } })}
                    />
                    {color}
                  </label>
                ))}
              </>
            )}
          </div>

          {selectedValue === "Одяг" && (
            <div>
              <SliderPrice
                tempSliderValue={tempSliderValue}
                setTempSliderValue={setTempSliderValue}
                applyFilter={applyFilter}
              />
            </div>
          )}


        </aside>

        {isLoading ? (
          <Spinner />
        ) : (
          (selectedValue || selectedValue === "all") && <CardList items={items} />
        )}
      </div>
    </>

  );
}
