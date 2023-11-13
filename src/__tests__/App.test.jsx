import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "../components/Header";
import Shop from "../pages/Shop";

describe("Header component", () => {
  it("renders correct navbar", () => {
    render(
      <Router>
        <Header />
      </Router>
    );

    const linkElements = screen.getAllByRole("link");
    const linkTextContent = linkElements.map((link) => link.textContent);

    expect(linkTextContent).toContain("Shop", "Furn");
  });
});

describe("Shop component", () => {
  const mockProducts = [
    { id: 1, name: "Product 1", price: 20 },
    { id: 2, name: "Product 2", price: 30 },
  ];

  it("renders the Shop component with product details", () => {
    render(
      <Router>
        <Shop products={mockProducts} />
      </Router>
    );

    mockProducts.forEach((product) => {
      const productLink = screen.getByText(`View Details`, {
        selector: `a[href="/shop/product/${product.id}"]`,
      });
      expect(productLink).toBeDefined();
    });

    const shopBgText = screen.getByText("All Products");
    expect(shopBgText).toBeDefined();
  });
});
