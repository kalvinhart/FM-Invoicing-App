import Header from "./Header";
import { ThemeProvider } from "styled-components";
import { themes } from "../../../theme";
import { render, screen } from "@testing-library/react";

describe("<Header/>", () => {
  // TEST =========================================================
  test("Header is rendered", () => {
    const themeToggle = jest.fn();
    render(
      <ThemeProvider theme={themes["light"]}>
        <Header themeToggle={themeToggle} />
      </ThemeProvider>
    );
    expect(screen.getByTestId("header")).toBeInTheDocument();
  });
});
