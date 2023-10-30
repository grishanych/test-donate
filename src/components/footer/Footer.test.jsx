import Footer from './Footer';
import {render,screen} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';


jest.mock("axios", () => ({
  post: jest.fn(),
}));


describe('should the Footer', () =>{

  test('should render the Footer', () =>{
    render (
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    )
    
    const footer = screen.getByTestId('footer-svg-test');
    expect(footer.getAttribute('data-testid')).toBe('footer-svg-test');
  });
});
