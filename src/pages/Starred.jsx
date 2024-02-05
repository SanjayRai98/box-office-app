import { useQuery } from '@tanstack/react-query';
import { useStarredShows } from '../lib/useStarredShows';
import { getShowByIds } from '../api/tvmaze';
import ShowGrid from '../components/shows/ShowGrid';

const Starred = () => {
  const [starrredShowsIds] = useStarredShows();

  const { data: starrredShows, error: starrredShowsError } = useQuery({
    queryKey: ['search', starrredShowsIds],
    queryFn: () =>
      getShowByIds(starrredShowsIds).then(result =>
        result.map(show => ({ show }))
      ),
    refetchOnWindowFocus: false,
  });

  console.log({ starrredShows });

  if (starrredShows?.length === 0) {
    return <div>No shows were Starred</div>;
  }

  if (starrredShows?.length > 0) {
    return <ShowGrid shows={starrredShows} />;
  }

  if (starrredShowsError) {
    return <div>Error: {starrredShowsError.message}</div>;
  }

  return <div>Show is loading</div>;
};

export default Starred;
