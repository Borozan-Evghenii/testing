import { Provider } from "react-redux";
import { createReduxStore } from "../../../../store/store";
import { MemoryRouter } from "react-router-dom";
import { CustomRouterProvider } from "../../../../provider/router/CustomRouterProvider";

export const testGeneralProvider = (component, options) => {
  const store = createReduxStore(options?.store?.initialState || {});
  return (
    <Provider store={store}>
      <MemoryRouter initialEntries={[options?.router?.initialEntries && "/"]}>
        <CustomRouterProvider />
        {component}
      </MemoryRouter>
    </Provider>
  );
};
