import Instagram from './Instagram';
import {render,screen} from '@testing-library/react';

describe('should the SVG icon Instagram', () =>{

    test('should render the SVG icon Instagram', () =>{
        render (<Instagram />)

        const instagram = screen.getByTestId('instagram-svg-test');
        expect(instagram.getAttribute('data-testid')).toBe('instagram-svg-test');
    });
});