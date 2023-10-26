import AdminPage from "./AdminPage";
import { render, screen } from '@testing-library/react';

describe("AdminPage", () => {

  test("should render an h1 element with the text 'Кабінет адміністратора'", () => {
    render(<AdminPage />);

    const element = screen.getByText('Кабінет адміністратора');
    expect(element.textContent).toBe('Кабінет адміністратора');
  });
});