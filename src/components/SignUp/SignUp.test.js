import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import SignUp from '.';
import store from '../../redux/store';

// jest.mock('../../redux/actions/authActions', () => ({
//     signUp: jest.fn(),
// }));

describe('<SignUp />', () => {
    it('submits form with valid data', async () => {
        render(
            <Provider store={store}>
                <MemoryRouter>
                    <SignUp />
                </MemoryRouter>
            </Provider>
        );

        const fullNameInput = screen.getByLabelText(/Full Name/i);
        const emailInput = screen.getByLabelText(/Email Address/i);
        expect(screen.getByText(/Already have an account\? Sign in/i)).toBeInTheDocument();

        fireEvent.change(fullNameInput, { target: { value: 'PR Saini' } });
        fireEvent.change(emailInput, { target: { value: 'saini1234@gmail.com' } });
    });

});
