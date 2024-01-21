import { Link } from 'react-router-dom';

const Nav = () => {
  const LINK = [
    {
      text: 'Home',
      to: '/',
    },
    {
      text: 'Starred',
      to: '/starred',
    },
  ];

  return (
    <div>
      <ul>
        {LINK.map(item => (
          <li key={item.to}>
            <Link to={item.to}>{item.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Nav;
