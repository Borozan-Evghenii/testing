import { test, expect, describe } from "vitest";
import "@testing-library/jest-dom/vitest";
import { fireEvent, render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
import { Index } from "./Index";
import { testGeneralProvider } from "../../tests/router/utils/provider/testGeneralProvider";

describe("Index page compoenent", () => {
  test("Test Index component", () => {
    render(
      testGeneralProvider(
        null,
        testGeneralProvider(null, {
          router: { initialEntries: "/" },
        })
      )
    );
    const title = screen.getByText(/title/i);
    const button = screen.getByRole("button");
    const input = screen.getByPlaceholderText("placeholder");
    const input2 = screen.queryByPlaceholderText("placeholderrrrrrr");

    expect(title).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(input2).toBeNull(); // check if element ins't in
    // expect(input).toMatchSnapshot();
  });

  test("async find", async () => {
    render(
      testGeneralProvider(
        null,
        testGeneralProvider(null, {
          router: { initialEntries: "/" },
        })
      )
    );
    const hiden = await screen.findByText(/data/i);
    expect(hiden).toBeInTheDocument();
    expect(hiden).toHaveClass("hidden");
    expect(hiden).toHaveStyle({ color: "rgb(255, 0, 0)" });
  });
  test("event test", () => {
    render(
      testGeneralProvider(
        null,
        testGeneralProvider(null, {
          router: { initialEntries: "/" },
        })
      )
    );
    const button = screen.getByTestId("button");
    // const hiddenBlock = screen.queryByTestId("hiddenBlock"); request hiddenBlock in each expect because we need to get current state of block
    expect(screen.queryByTestId("hiddenBlock")).toBeNull(); // Check if block is hidden
    fireEvent.click(button);
    expect(screen.queryByTestId("hiddenBlock")).toBeInTheDocument(); // Check if block is showed
    fireEvent.click(button);
    expect(screen.queryByTestId("hiddenBlock")).toBeNull(); // Check if block is showed
  });
  test("input event", () => {
    render(
      testGeneralProvider(
        null,
        testGeneralProvider(null, {
          router: { initialEntries: "/" },
        })
      )
    );
    const input = screen.getByTestId("input");
    expect(input).toContainHTML("");
    fireEvent.input(input, {
      target: {
        value: "borozan",
      },
    });
    expect(input).toContainHTML("borozan");
  });
  // test("input event with userEvent", () => {
  //   render(<App />);
  //   const input = screen.getByTestId("input");
  //   expect(screen.getByTestId("input")).toHaveValue("");
  //   userEvent.type(input, "borozan", );
  //   expect(screen.getByTestId("input")).toHaveValue("borozan");
  // });
});

// fireEvent => syntetic events from js
// userEvent => emulate real user interaction ( onKeyDown , dblClick, paste,  )

// finBy | findAll => use async search =>
// getBy | getAll => if searched element is not found => throw error ( usually used for 100% find element)
// queryBy | queryAll => if searched element is not found => return null | undefined ( usually used for check if element isn't in document )
