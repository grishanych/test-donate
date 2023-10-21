import Message from './Message';
import {render,screen} from '@testing-library/react';

describe('should the SVG icon Message in productView', () =>{

    test('should render the SVG icon Message in productView', () =>{
        render (<Message />)

        const message = screen.getByTestId('message-svg-test-productView');
        expect(message.getAttribute('data-testid')).toBe('message-svg-test-productView');
    });
});