import Button from './Button';
import { BrowserRouter } from 'react-router-dom';
import { fireEvent, render, screen } from '@testing-library/react';

const onClickMock = jest.fn();

describe('Button', () => {
  // Цей тест перевіряє, чи правильно компонент Button стилізований.
  test('should have the correct styles', () => {
    render(
      <BrowserRouter>
        <Button />
      </BrowserRouter>
    );

    const buttonElement = screen.getByRole('button')
    const buttonStyles = getComputedStyle(buttonElement);

    expect(buttonStyles.backgroundColor).toBe('rgb(70, 163, 88)');
    expect(buttonStyles.width).toBe('150px');
    expect(buttonStyles.alignItems).toBe('flex-start');
    expect(buttonStyles.justifyContent).toBe('center');
  });

  // Цей тест перевіряє, чи компонент Button викликає функцію onClick, коли користувач натискає на кнопку.
  test('should have the click', () => {
    render(
      <BrowserRouter>
        <Button onClick={onClickMock} />
      </BrowserRouter>
    );

    const buttonElement = screen.getByRole('button');

    fireEvent.click(buttonElement);

    expect(onClickMock).toBeCalled();
  });
});