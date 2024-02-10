import { useQuery } from '@tanstack/react-query';
import { useStarredShows } from '../lib/useStarredShows';
import { getShowByIds } from '../api/tvmaze';
import ShowGrid from '../components/shows/ShowGrid';
import { TextCenter } from '../common/TextCenter';

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

  if (starrredShows?.length === 0) {
    return <TextCenter>No shows were Starred</TextCenter>;
  }

  if (starrredShows?.length > 0) {
    return <ShowGrid shows={starrredShows} />;
  }

  if (starrredShowsError) {
    return <TextCenter>Error: {starrredShowsError.message}</TextCenter>;
  }

  return <TextCenter>Show is loading</TextCenter>;
};

export default Starred;
