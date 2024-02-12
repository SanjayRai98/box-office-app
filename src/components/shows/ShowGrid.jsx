import { useStarredShows } from '../../lib/useStarredShows';
import ShowCard from './ShowCard';
import { FlexGrid } from '../../common/FlexGrid';
import NotFoundImg from '../../lib/not-found-image.png';

const ShowGrid = ({ shows }) => {
  const [starrredShows, dispatchStarred] = useStarredShows();

  const onStarMeClick = showId => {
    const isStarred = starrredShows.includes(showId);

    if (isStarred) {
      dispatchStarred({ type: 'UNSTAR', showId });
    } else {
      dispatchStarred({ type: 'STAR', showId });
    }
  };

  return (
    <FlexGrid>
      {shows.map(data => (
        <ShowCard
          key={data.show.id}
          id={data.show.id}
          name={data.show.name}
          image={data.show.image ? data.show.image.medium : NotFoundImg}
          summary={data.show.summary}
          onStarMeClick={onStarMeClick}
          isStarred={starrredShows.includes(data.show.id)}
        />
      ))}
    </FlexGrid>
  );
};

export default ShowGrid;
