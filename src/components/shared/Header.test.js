import Header from "./Header";
import { render, screen } from "@testing-library/react";

describe("<Header/>", () => {
  test("Header is rendered", () => {
    render(<Header />);
    expect(screen.getByTestId("header")).toBeInTheDocument();
  });
});
