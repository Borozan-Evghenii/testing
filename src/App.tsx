import { CustomRouterProvider } from "./provider/router/CustomRouterProvider";
import { Navigation } from "./components/navigation/Navigation";

export const App = () => {
  return (
    <>
      <Navigation />
      <CustomRouterProvider />
    </>
  );
};
