import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <header style={{ display: "flex", gap: "3rem", paddingBottom: "3rem" }}>
      <Link to="/" data-testid="home-link">
        Homepage
      </Link>
      <Link to="/about" data-testid="about-link">
        About page
      </Link>
      <Link to="/users" data-testid="users-link">
        Users page
      </Link>
    </header>
  );
};
