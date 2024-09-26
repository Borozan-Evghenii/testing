import { test, expect, describe, vi, beforeEach, afterEach } from "vitest";
import "@testing-library/jest-dom/vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import axios from "axios";

vi.mock("axios");

import { Users } from "./Users";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { UserDetails } from "../userDetails/UserDetails";
import { testRouterProvider } from "../../tests/router/utils/provider/TestRouterProvider";

describe("User compoenent", () => {
  let response: {
    data: { id: number; name: string; username: string; email: string }[];
  };

  beforeEach(() => {
    response = {
      data: [
        {
          id: 1,
          name: "Leanne Graham",
          username: "Bret",
          email: "Sincere@april.biz",
        },
        {
          id: 2,
          name: "Ervin Howell",
          username: "Antonette",
          email: "Shanna@melissa.tv",
        },
      ],
    };
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  test("Test Users component", async () => {
    axios.get.mockResolvedValue(response); //mock will be setted before render component
    render(
      <MemoryRouter initialEntries={["/users"]}>
        <Users />
      </MemoryRouter>
    );
    expect(axios.get).toBeCalledTimes(1);
    const items = await screen.findAllByTestId("user-item");
    expect(items.length).toBe(2); //check if 2 elements is rendered
  });
  test("Redirect to user details page", async () => {
    axios.get.mockResolvedValue(response); //mock will be setted before render component
    render(
      <MemoryRouter initialEntries={["/users"]}>
        {/* neeed to add routes here because routes is not declared in rendered component */}
        <Routes>
          <Route path="/users" element={<Users />} />
          <Route path="/users/:id" element={<UserDetails />} />
        </Routes>
      </MemoryRouter>
    );
    const items = await screen.findAllByTestId("user-item");
    fireEvent.click(items[0]);
    expect(screen.getByTestId("user-details")).toBeInTheDocument();
  });
  test("Redirect to user details page", async () => {
    axios.get.mockResolvedValue(response); //mock will be setted before render component
    render(testRouterProvider(null, "/users")); // render by router path using already setted router
    const items = await screen.findAllByTestId("user-item");
    fireEvent.click(items[0]);
    expect(screen.getByTestId("user-details")).toBeInTheDocument();
  });

  test("Redirect to user details page", async () => {
    axios.get.mockResolvedValue(response); //mock will be setted before render component
    render(testRouterProvider(null, "/users/")); // render component using already setted router context
    const items = await screen.findAllByTestId("user-item");
    fireEvent.click(items[0]);
    expect(screen.getByTestId("user-details")).toBeInTheDocument();
  });
});
