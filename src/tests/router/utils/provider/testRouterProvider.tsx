import { MemoryRouter } from "react-router-dom";
import { CustomRouterProvider } from "../../../../provider/router/CustomRouterProvider";

export const testRouterProvider = (compoenent: any, initialEntries = "/") => {
  return (
    <MemoryRouter initialEntries={[initialEntries]}>
      <CustomRouterProvider />
      {compoenent}
    </MemoryRouter>
  );
};
