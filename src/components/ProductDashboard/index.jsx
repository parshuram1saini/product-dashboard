import React from 'react'
import ProductFilters from './ProductFilters'
import ProductList from './ProductList'
import useMediaQuery from '@mui/material/useMediaQuery';
import "./style.css"
import { Container } from '@mui/material'

function ProductDashboard() {
  const isSmallScreen = useMediaQuery('(max-width:768px)');
  return (
    <Container style={{backgroundColor:"#1976d20a"}}>
      <div className={`product-filter-container ${isSmallScreen ?"flex-col justify-between" :"flex-row justify-end" }`}>
        <ProductFilters />
      </div>
      <ProductList />
    </Container>
  )
}

export default ProductDashboard
