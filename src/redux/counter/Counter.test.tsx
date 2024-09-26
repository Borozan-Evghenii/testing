import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import "@testing-library/jest-dom/vitest";
import { Counter } from "./Counter";
import { Provider } from "react-redux";
import { createReduxStore } from "../../store/store";
import { testReduxStoreProvider } from "../../tests/router/utils/provider/testReduxStoreProvider";
import { testGeneralProvider } from "../../tests/router/utils/provider/testGeneralProvider";

describe("Counter", () => {
  test("increment", () => {
    render(
      // we can set inital data for test
      <Provider
        store={createReduxStore({
          counter: {
            value: 1000,
          },
        })}
      >
        <Counter />
      </Provider>
    );
    const incrementButton = screen.getByTestId("increment");
    const value = screen.getByTestId("value");

    expect(incrementButton).toBeInTheDocument();
    expect(value).toHaveTextContent("1000");

    fireEvent.click(incrementButton);

    expect(value).toHaveTextContent("1001");
  });
  test("decrement", () => {
    render(testReduxStoreProvider(<Counter />, { counter: { value: 0 } }));
    const decrementButton = screen.getByTestId("decrement");
    const value = screen.getByTestId("value");

    expect(decrementButton).toBeInTheDocument();
    expect(value).toHaveTextContent("0");

    fireEvent.click(decrementButton);

    expect(value).toHaveTextContent("-1");
  });
  test("decrement", () => {
    render(
      testGeneralProvider(null, {
        router: { initialEntries: "/" },
        store: { counter: { value: 100 } },
      })
    );
    const decrementButton = screen.getByTestId("decrement");
    const value = screen.getByTestId("value");

    expect(decrementButton).toBeInTheDocument();
    expect(value).toHaveTextContent("0");

    fireEvent.click(decrementButton);

    expect(value).toHaveTextContent("-1");
  });
});
