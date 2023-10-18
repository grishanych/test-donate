import HeartFull from './HeartFull'
import { render, screen } from '@testing-library/react'

test('should render the SVG icon heartFull', ()=>{
    render (<HeartFull />)

    const heartFullElement = screen.getByTestId('heartFull-svg-test');
    expect(heartFullElement.getAttribute('data-testid')).toBe('heartFull-svg-test');
});