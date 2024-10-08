import { Provider } from "react-redux";
import { createReduxStore } from "../../../../store/store";

export const testReduxStoreProvider = (component, initialState) => {
  const store = createReduxStore(initialState || {});
  return <Provider store={store}>{component}</Provider>;
};
