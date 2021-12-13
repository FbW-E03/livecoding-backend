import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <ul>
      <li>
        <Link to="/login">Login</Link>
      </li>
      <li>
        <Link to="/list-users">List Users</Link>
      </li>
    </ul>
  );
}
