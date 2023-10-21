import Twitter from './Twitter';
import {render,screen} from '@testing-library/react';

describe('should the SVG icon Twitter', () =>{

    test('should render the SVG icon Twitter', () =>{
        render (<Twitter />)

        const twitter = screen.getByTestId('twitter-svg-test');
        expect(twitter.getAttribute('data-testid')).toBe('twitter-svg-test');
    });
});