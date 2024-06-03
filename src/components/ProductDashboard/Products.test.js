import React from "react";
import { render, screen } from "@testing-library/react";
import ProductItem from "./ProductItem";

test('renders product item with title, description, and price', () => {
    const product = {
        title: 'Test Product',
        description: 'This is a something about Items.',
        price: 99,
        image: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
    };
    render(<ProductItem product={product} />);

    expect(screen.getByText(/test product/i)).toBeInTheDocument();
    expect(screen.getByText(/this is a something about items/i)).toBeInTheDocument();
    expect(screen.getByText(/\$99/i)).toBeInTheDocument();
});

test('renders product searching & filter component', () => {
    const product = {
        title: 'Search Product mens clothing',
        description: 'This is a mens Items.',
        price: 80,
        image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
    };
    render(<ProductItem product={product} />);

    expect(screen.getByText(/search product mens clothing/i)).toBeInTheDocument();
    expect(screen.getByText(/this is a mens items/i)).toBeInTheDocument();
    expect(screen.getByText(/\$80/i)).toBeInTheDocument();
});