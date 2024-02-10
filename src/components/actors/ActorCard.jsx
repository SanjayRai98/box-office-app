import { SearchCard, SearchImgWrapper } from '../../common/SearchCard';

const ActorCard = ({ name, image, gender, country, birthday, deathday }) => {
  return (
    <SearchCard>
      <SearchImgWrapper>
        <img src={image} alt="Image is not Available"></img>
      </SearchImgWrapper>
      <h1>
        {name} {!!gender && `(${gender})`}
      </h1>
      <p>{country ? `Come from ${country}` : 'No Country known'}</p>
      {!!birthday && <p>Born {birthday}</p>}
      <p>{deathday ? `Died ${deathday}` : 'Alive'}</p>
    </SearchCard>
  );
};

export default ActorCard;
