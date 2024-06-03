import React from 'react';
import { Pagination } from '@mui/material';

function PaginationComponent({ currentPage, totalPages, onPageChange }) {
  return (
    <Pagination
      count={totalPages}
      page={currentPage}
      onChange={(event, value) => onPageChange(value)}
    />
  );
};

export default PaginationComponent;
