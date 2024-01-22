import { useState } from 'react';
import { searchForShows } from '../api/tvmaze';

const Home = () => {
  const [searchStr, setSearchStr] = useState('');
  const [apiData, setApiData] = useState(null);

  const onSearchInputChange = ev => {
    setSearchStr(ev.target.value);
  };

  const onSearch = async ev => {
    ev.preventDefault();

    try {
      const result = await searchForShows(searchStr);
      setApiData(result);
    } catch (error) {
      console.log('error is occurred');
    }
  };

  const renderApiData = () => {
    if (apiData) {
      return apiData.map(data => (
        <div key={data.show.id}>{data.show.name}</div>
      ));
    }

    return null;
  };

  return (
    <div>
      <h1>Home Page</h1>
      <form onSubmit={onSearch}>
        <input type="text" value={searchStr} onChange={onSearchInputChange} />
        <button type="submit">Search</button>
      </form>
      <div>{renderApiData()}</div>
    </div>
  );
};

export default Home;
