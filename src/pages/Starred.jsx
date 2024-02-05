import { useStarredShows } from '../lib/useStarredShows';

const Starred = () => {
  const [starrredShows] = useStarredShows();

  return (
    <div>
      <h1>Starred Page</h1>
      Starred Shows : {starrredShows.length}
    </div>
  );
};

export default Starred;
