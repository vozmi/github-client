import {render, screen} from "@testing-library/react";
import App from "../App";

test('Renders main page correctly', () => {
  render(<App />);
  expect(screen.getByText(/vite + react/i)).toBeInTheDocument();
});