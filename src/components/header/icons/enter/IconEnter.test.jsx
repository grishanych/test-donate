import IconEnter from './IconEnter';
import {render,screen} from '@testing-library/react';

describe('should the SVG icon IconEnter', () =>{

    test('should render the SVG icon IconEnter', () =>{
        render (<IconEnter />)

        const iconEnter = screen.getByTestId('iconEnter-svg-test');
        expect(iconEnter.getAttribute('data-testid')).toBe('iconEnter-svg-test');
    });
});