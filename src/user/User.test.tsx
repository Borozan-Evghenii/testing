import { test, expect, describe, vi, beforeAll } from "vitest";
import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";
import axios from "axios";

vi.mock("axios");

import { User } from "./User";

describe("User compoenent", () => {
  let response: {
    data: { id: number; name: string; username: string; email: string }[];
  };

  beforeAll(() => {
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

  test("Test User component", async () => {
    axios.get.mockResolvedValue(response); //mock will be setted before render component
    render(<User />);
    screen.debug();
    const items = await screen.findAllByTestId("user-item");
    expect(items.length).toBe(2); //check if 2 elements is rendered
    expect(axios.get).toBeCalledTimes(1);
  });
});
