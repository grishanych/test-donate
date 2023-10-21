import Location from './Location';
import {render,screen} from '@testing-library/react';

describe('should the SVG icon Location', () =>{

    test('should render the SVG icon Location', () =>{
        render (<Location />)

        const location = screen.getByTestId('location-svg-test');
        expect(location.getAttribute('data-testid')).toBe('location-svg-test');
    });
});