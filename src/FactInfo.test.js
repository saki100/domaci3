import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import FactInfo from './komponente/FactInfo';

describe('FactInfo component', () => {
  const mockFact = {
    fact: 'This is a test fact.',
    length: 20,
  };

  test('renders fact information correctly', () => {
    render(
      <BrowserRouter>
        <FactInfo oneFact={mockFact} />
      </BrowserRouter>
    );

    const factText = screen.getByText(/This is a test fact./i);
    expect(factText).toBeInTheDocument();

    const lengthText = screen.getByText(/Broj karaktera: 20/i);
    expect(lengthText).toBeInTheDocument();
  });

  test('renders "Nazad" button', () => {
    render(
      <BrowserRouter>
        <FactInfo oneFact={mockFact} />
      </BrowserRouter>
    );

    const backButton = screen.getByText(/Nazad/i);
    expect(backButton).toBeInTheDocument();
  });

  test('renders API link', () => {
    render(
      <BrowserRouter>
        <FactInfo oneFact={mockFact} />
      </BrowserRouter>
    );

    const apiLink = screen.getByText(/Link ka API dokumentaciji/i);
    expect(apiLink).toBeInTheDocument();
  });

  test('matches snapshot', () => {
    const { asFragment } = render(
      <BrowserRouter>
        <FactInfo oneFact={mockFact} />
      </BrowserRouter>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
