import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PaginationComponent from './PaginationComponent';

describe('PaginationComponent', () => {
  test('renders pagination component and handles page change', () => {
    const handlePageChange = jest.fn();
    const currentPage = 1;
    const totalPages = 5;

    render(
      <PaginationComponent
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    );

    const paginationElement = screen.getByRole('navigation');
    expect(paginationElement).toBeInTheDocument();

    const currentPageButton = screen.getByText(currentPage.toString());
    expect(currentPageButton).toHaveClass('Mui-selected');

    const nextPageButton = screen.getByText('2');
    fireEvent.click(nextPageButton);

    expect(handlePageChange).toHaveBeenCalledWith(2);
  });
});
