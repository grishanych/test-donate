import Call from './Call';
import {render,screen} from '@testing-library/react';

describe('should the SVG icon Call', () =>{

    test('should render the SVG icon Call', () =>{
        render (<Call />)

        const call = screen.getByTestId('call-svg-test');
        expect(call.getAttribute('data-testid')).toBe('call-svg-test');
    });
});