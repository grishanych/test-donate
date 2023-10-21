import { Link, useLocation } from 'react-router-dom';


function ActiveLink({ label, to, className }) {
  let location = useLocation();
  let isActive = location.pathname === to;

  return (
    <Link to={to} style={{ color: isActive ? "rgb(70, 163, 88)" : null }} className={className} onClick={null}>
      {label}
    </Link>
  );
}

export default ActiveLink;