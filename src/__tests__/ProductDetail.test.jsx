import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { ShopContext } from "../ShopContext";
import ProductDetail from "../components/ProductDetail";
import { vi } from "vitest";
import userEvent from "@testing-library/user-event";
import { waitFor } from "@testing-library/dom";

describe("ProductDetail component", () => {
  const mockProduct = {
    id: 1,
    title: "Sample Product",
    price: 25,
    description: "This is a sample product.",
    image: "/images/sample.jpg",
    bgImg: "/images/bg-sample.jpg",
  };

  it("renders the ProductDetail component with product details", () => {
    const mockContextValue = {
      addToCart: vi.fn(),
      cartItems: [],
    };

    render(
      <ShopContext.Provider value={mockContextValue}>
        <ProductDetail product={mockProduct} />
      </ShopContext.Provider>
    );

    const productTitle = screen.getByText(mockProduct.title);
    const productPrice = screen.getByText(`$${mockProduct.price}`);
    const productDescription = screen.getByText("Product description");
    const addToCartButton = screen.getByText("Add to Cart");

    expect(productTitle).toBeDefined();
    expect(productPrice).toBeDefined();
    expect(productDescription).toBeDefined();
    expect(addToCartButton).toBeDefined();
  });

  it("allows users to change quantity and add to cart", async () => {
    const mockContextValue = {
      addToCart: vi.fn(),
      cartItems: [],
    };

    const spy = vi.spyOn(mockContextValue, "addToCart");

    render(
      <ShopContext.Provider value={mockContextValue}>
        <ProductDetail product={mockProduct} />
      </ShopContext.Provider>
    );

    const decrementButton = screen.getByText("-");
    const quantityDisplay = screen.getByText("1");
    const incrementButton = screen.getByText("+");

    expect(decrementButton).toBeInTheDocument();
    expect(quantityDisplay).toBeInTheDocument();
    expect(incrementButton).toBeInTheDocument();

    userEvent.click(incrementButton);
    await waitFor(() => {
      expect(quantityDisplay.textContent).toBe("2");
    });

    userEvent.click(decrementButton);

    await waitFor(() => {
      expect(quantityDisplay.textContent).toBe("1");
    });

    const addToCartButton = screen.getByText("Add to Cart");
    expect(addToCartButton).toBeInTheDocument();

    userEvent.click(addToCartButton);

    await waitFor(() => {
      expect(spy).toHaveBeenCalledWith(
        mockProduct,
        parseInt(quantityDisplay.textContent, 10)
      );
    });
  });

  it("displays 'Already in cart' when product is in the cart", () => {
    const mockContextValue = {
      addToCart: vi.fn(),
      cartItems: [{ product: mockProduct, quantity: 1 }],
    };

    render(
      <ShopContext.Provider value={mockContextValue}>
        <ProductDetail product={mockProduct} />
      </ShopContext.Provider>
    );

    const alreadyInCartMessage = screen.getByText("Already in cart");
    expect(alreadyInCartMessage).toBeInTheDocument();

    const decrementButton = screen.queryByText("-");
    const incrementButton = screen.queryByText("+");
    const addToCartButton = screen.queryByText("Add to Cart");

    expect(decrementButton).not.toBeInTheDocument();
    expect(incrementButton).not.toBeInTheDocument();
    expect(addToCartButton).not.toBeInTheDocument();
  });
});
