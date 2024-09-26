import { test, expect, describe } from "vitest";
import "@testing-library/jest-dom/vitest";
import { fireEvent, render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { App } from "../../App";

describe("Router tests", () => {
  test("Link routing", () => {
    // MemoryRouter special component for testing
    // fo fix test need to use testGeneralProvider
    //and set default state for rdux provider because
    // we use Counter component in App component an he use redux state
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    const mainLink = screen.getByTestId("home-link");
    const aboutLink = screen.getByTestId("about-link");
    fireEvent.click(aboutLink); //Why fire event work but when i use userEvent event doesn't called
    expect(screen.getByTestId("about-page")).toBeInTheDocument();
    fireEvent.click(mainLink);
    expect(screen.getByTestId("home-page")).toBeInTheDocument();
  });

  test("Not Found routing", () => {
    // MemoryRouter special component for testing
    render(
      <MemoryRouter initialEntries={["/notFoundUrl"]}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByTestId("notFound-page")).toBeInTheDocument();
  });
});
