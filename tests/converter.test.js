import '@testing-library/jest-dom/extend-expect';
import React from 'react';

import { render, fireEvent } from '@testing-library/react';
import {
  moneyConversion,
  cardConversion
} from '../src/utils/conversionCalculations';
import Converter from '../src/components/converter';

describe('Simulating user interation', () => {
  const component = render(<Converter />);
  const conversionButton = component.getByLabelText('button');
  const dolarInput = component.getByLabelText('dolar-input');
  const taxInput = component.getByLabelText('tax-input');

  test('It should render the inputs', () => {
    expect(dolarInput).toBeInTheDocument();
    expect(taxInput).toBeInTheDocument();
  });

  test('It should not allow conversion without values', () => {
    fireEvent.change(dolarInput, { target: { value: null } });
    fireEvent.change(taxInput, { target: { value: null } });

    expect(conversionButton).toBeDisabled();
  });

  test('It should return the input value', () => {
    fireEvent.change(dolarInput, { target: { value: 100 } });
    fireEvent.change(taxInput, { target: { value: 0.5 } });

    expect(Number(dolarInput.value)).toBe(100);
    expect(Number(taxInput.value)).toBe(0.5);
  });

  test('Is should make the money amount conversion', () => {
    fireEvent.change(dolarInput, { target: { value: 100 } });
    fireEvent.change(taxInput, { target: { value: 0.5 } });

    expect(
      moneyConversion(
        Number(dolarInput.value),
        Number(taxInput.value),
        Number(5.3)
      )
    ).toBe(538.51);
  });

  test('Is should make the card amount conversion', () => {
    fireEvent.change(dolarInput, { target: { value: 100 } });
    fireEvent.change(taxInput, { target: { value: 0.5 } });

    expect(
      cardConversion(
        Number(dolarInput.value),
        Number(taxInput.value),
        Number(5.3)
      )
    ).toBe(566.74);
  });
});
