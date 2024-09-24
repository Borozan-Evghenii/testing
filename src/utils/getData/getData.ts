import axios from "axios";
import { arrToString } from "../arrToString/arrToString";

export const getData = async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    const userId = response.data.map((item: { id: number }) => item.id);
    return arrToString(userId);
  } catch (error) {
    console.log(error);
  }
};
