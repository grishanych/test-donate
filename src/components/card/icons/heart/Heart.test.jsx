import Heart from "./Heart";
import { render, screen} from "@testing-library/react"

test('should render the SVG icon heart', ()=>{
    render (<Heart />);

    const heartElement = screen.getByTestId('heart-svg-test');
    expect(heartElement.getAttribute('data-testid')).toBe('heart-svg-test');
});