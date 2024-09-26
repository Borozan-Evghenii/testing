import { test, expect, describe } from "vitest";
import "@testing-library/jest-dom/vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { testRouterProvider } from "../../tests/router/utils/provider/TestRouterProvider";
import { Navigation } from "./Navigation";
import { testGeneralProvider } from "../../tests/router/utils/provider/testGeneralProvider";

describe("Navigation ", () => {
  test("Navigate to home component", () => {
    render(
      testGeneralProvider(<Navigation />, {
        router: { initialEntries: "/about" },
        store: {},
      })
    );
    const main = screen.getByTestId("home-link");
    fireEvent.click(main);
    expect(screen.getByTestId("home-page")).toBeInTheDocument();
  });
  test("Navigate to about component", () => {
    render(testRouterProvider(<Navigation />, "/about"));
    const about = screen.getByTestId("about-link");

    fireEvent.click(about);
    expect(screen.getByTestId("about-page")).toBeInTheDocument();
  });
  test("Navigate to users component", () => {
    render(testRouterProvider(<Navigation />, "/about"));

    const users = screen.getByTestId("users-link");

    fireEvent.click(users);
    expect(screen.getByTestId("users-page")).toBeInTheDocument();
  });
});
