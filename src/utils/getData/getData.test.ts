import { beforeAll, describe, expect, test, vi } from "vitest";
import { getData } from "./getData";
import axios from "axios";

vi.mock("axios");

type User = { id: number; name: string; username: string; email: string };

describe("getData ", () => {
  let response: { data: User[] };

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

  test("reques user", async () => {
    axios.get.mockResolvedValue(response);
    const data = await getData();
    expect(axios.get).toBeCalledTimes(1);
    expect(data).toEqual(["1", "2"]);
    expect(data).toMatchSnapshot();
  });
});
