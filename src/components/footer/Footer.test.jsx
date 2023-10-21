import Footer from './Footer';
import {render,screen} from '@testing-library/react';

describe('should the Footer', () =>{

    test('should render the Footer', () =>{
        render (<Footer />)

        const footer = screen.getByTestId('footer-svg-test');
        expect(footer.getAttribute('data-testid')).toBe('footer-svg-test');
    });
});