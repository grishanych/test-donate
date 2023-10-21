import Blog from './Blog';
import {render, screen } from '@testing-library/react';

test('should the Blog', ()=>{
    render(<Blog />);

    const div = screen.getByTestId('blog-test');
    expect(div.getAttribute('data-testid')).toBe('blog-test');
});