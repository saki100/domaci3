import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Facts from './komponente/Facts';


describe('Facts komponenta', () => {
  test('Postavljanje ispravnog placeholder-a', () => {
    render(
      <BrowserRouter>
        <Facts facts={[]} setOneFact={() => {}} pretrazi={() => {}} />
      </BrowserRouter>
    );

    const inputElement = screen.getByPlaceholderText('Pronadji cinjenicu');
    expect(inputElement).toBeInTheDocument();
  });
  
});
