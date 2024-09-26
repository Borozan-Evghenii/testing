import { Route, Routes } from "react-router-dom";
import { Index } from "../../pages/index/Index";
import { About } from "../../pages/about/About";
import { Users } from "../../pages/users/Users";
import { UserDetails } from "../../pages/userDetails/UserDetails";
import { NotFound } from "../../pages/notFound/NotFound";

export const CustomRouterProvider = () => {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/about" element={<About />} />
      <Route path="/users" element={<Users />} />
      <Route path="/users/:id" element={<UserDetails />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};
