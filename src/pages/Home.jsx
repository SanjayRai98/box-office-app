import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1
        style={{
          textAlign: 'center',
        }}
      >
        Home Page
      </h1>
      <Link to="/starred">Go to the Starred Page</Link>
    </div>
  );
};

export default Home;
