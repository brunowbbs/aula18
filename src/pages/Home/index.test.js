import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Home from ".";

describe("<Home/>", () => {
  it("Should render correctly page", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    expect(
      screen.getByRole("heading", { name: /Produtos/i })
    ).toBeInTheDocument();

    expect(screen.getAllByTestId("item")).toHaveLength(3);
  });
});
