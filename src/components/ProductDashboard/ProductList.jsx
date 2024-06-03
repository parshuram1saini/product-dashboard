import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductItem from "./ProductItem";
import PaginationComponent from "./PaginationComponent";
import { Grid, Container, CircularProgress, Typography } from "@mui/material";
import { fetchProducts } from "../../redux/actions/productActions";

function ProductList() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Define how many items you want per page

  const dispatch = useDispatch();
  const { products, loading, error } = useSelector(
    (state) => state.productsList
  );


  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);


  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const totalPages = Math.ceil(products.length / itemsPerPage);

  const displayedProducts = products.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

  if (loading) {
    return <CircularProgress className="progress-loader" />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <Container>
      <Typography gutterBottom align="center" variant="h4" component="div">
        E-commerce Products
      </Typography>
      <Grid container spacing={3}>
        {displayedProducts.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <ProductItem product={product} />
          </Grid>
        ))}
      </Grid>

      <div style={{ margin: "20px 0" }} className="flex-row justify-end">
        <PaginationComponent
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </Container>
  );
}

export default ProductList;
