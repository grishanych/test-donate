import { Link, useLocation } from "react-router-dom";


function ActiveLink({ label, to, className }) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link to={to} style={{ color: isActive ? "#5d640b" : null }} className={className} onClick={null}>
      {label}
    </Link>
  );
}

export default ActiveLink;
