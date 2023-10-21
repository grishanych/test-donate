import Youtube from './Youtube';
import {render,screen} from '@testing-library/react';

describe('should the SVG icon Youtube', () =>{

    test('should render the SVG icon Youtube', () =>{
        render (<Youtube />)

        const youtube = screen.getByTestId('youtube-svg-test');
        expect(youtube.getAttribute('data-testid')).toBe('youtube-svg-test');
    });
});