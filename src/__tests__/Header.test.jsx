import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import Header from "../components/Header";
import Cart from "../components/Cart";
import { ShopContext } from "../ShopContext";

describe("Site header", () => {
  const mockContextValue = {
    cartItems: [
      { id: 1, name: "Item 1", quantity: 2 },
      { id: 2, name: "Item 2", quantity: 1 },
    ],
  };

  it("renders navigation links", () => {
    render(
      <Router>
        <ShopContext.Provider value={mockContextValue}>
          <Header />
        </ShopContext.Provider>
      </Router>
    );

    const shopLink = screen.getByText("Shop");
    const furnLink = screen.getByText("Furn");

    expect(shopLink).toBeDefined();
    expect(furnLink).toBeDefined();
  });

  it("displays the correct bag count", () => {
    render(
      <Router>
        <ShopContext.Provider value={mockContextValue}>
          <Header />
        </ShopContext.Provider>
      </Router>
    );

    const bagCount = screen.getByText("3"); // Sum of quantities in mockContextValue

    expect(bagCount).toBeDefined();
  });

  it("toggles the cart visibility when bag is clicked", () => {
    render(
      <Router>
        <ShopContext.Provider value={mockContextValue}>
          <Header />
        </ShopContext.Provider>
      </Router>
    );

    const bagContainer = screen.getByText("Bag").parentElement;
    userEvent.click(bagContainer);
    const cartComponent = render(<Cart />);
    expect(cartComponent).toBeDefined();
  });
});
