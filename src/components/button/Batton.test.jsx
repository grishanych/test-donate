// import Button from "./Button";
// import { render, screen } from "@testing-library/react";


// test ('test-button-expect-"Colored-button"', ()=>{
//     render (<Button/>);
//     const linkElement = screen.get
//     expect (linkElement).toBeInTheDocument();
// });


// import { render, screen } from '@testing-library/react';
// import Button from './Button';

// const mockOnClick = jest.fn();

// test('should call the onClick callback if it is passed', () => {
//     render(<Button text="Button" onClick={mockOnClick} />);

//     const buttonElement = screen.getByText('Button');

//     buttonElement.click();

//     expect(mockOnClick).toHaveBeenCalledTimes(1);
// });

import React from 'react';
import Button from './Button';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

test('should have the correct styles', () => {
  render(
    <BrowserRouter>
      <Button text="Button" />
    </BrowserRouter>
  );

  const buttonElement = screen.getByText('Button');
  const buttonStyles = getComputedStyle(buttonElement);

  expect(buttonStyles.backgroundColor).toBe('rgb(70, 163, 88)');
  expect(buttonStyles.width).toBe('150px');
//   expect(buttonStyles.alignItems).toBe('center');
//   expect(buttonStyles.justifyContent).toBe('center');
//   expect(buttonStyles.padding).toBe('');
});