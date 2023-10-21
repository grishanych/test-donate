import Buy from './Buy';
import {render,screen} from '@testing-library/react';

describe('should the SVG icon Buy', () =>{

    test('should render the SVG icon Buy', () =>{
        render (<Buy />)

        const buy = screen.getByTestId('buy-svg-test');
        expect(buy.getAttribute('data-testid')).toBe('buy-svg-test');
    });
});