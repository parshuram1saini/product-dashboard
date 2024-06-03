import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  useMediaQuery
} from "@mui/material";
import {
  fetchProducts,
  setCategory,
  setSearchQuery,
} from "../../redux/actions/productActions";
import useDebounce from "../../hooks/useDebounce";

function ProductFilters() {
  const dispatch = useDispatch();

  const [searchQuery, setSearchQueryState] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const categories = useSelector((state) => state.productsList.categories);
  const isSmallScreen = useMediaQuery("(max-width:768px)");

  useEffect(() => {
    // Fetch products when the component mounts
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleSearch = () => {
    dispatch(setSearchQuery(searchQuery));
    dispatch(fetchProducts(searchQuery, selectedCategory));
  };

  const debouncedSearch = useDebounce(handleSearch, 500);

  const handleChange = (e) => {
    const query = e.target.value;
    setSearchQueryState(query);
    debouncedSearch(e.target.value);
  };

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);
    dispatch(setCategory(category));
    dispatch(fetchProducts(searchQuery, category))
  };

  return (
    <>
      <TextField
        style={{ marginRight: "10px" }}
        label="Search"
        value={searchQuery}
        onChange={handleChange}
      />
      <div
        className={`${isSmallScreen ? "flex-col justify-between" : "flex-row justify-end"
          }`}
      >
        <FormControl style={{marginTop : isSmallScreen ? "15px" : 0 }}>
          <InputLabel>Category</InputLabel>
          <Select
            style={{ width: "fit-content", minWidth: "200px" }}
            label="Category"
            value={selectedCategory}
            onChange={handleCategoryChange}
            
          >
            <MenuItem value="">All</MenuItem>
            {categories.map((category) => (
              <MenuItem key={category} value={category}>
                {category}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </>
  );
}

export default ProductFilters;
