const ActorCard = ({ name, image, gender, country, birthday, deathday }) => {
  return (
    <div>
      <div>
        <img src={image} alt="Image is not Available"></img>
      </div>
      <h1>
        {name} {!!gender && `(${gender})`}
      </h1>
      <p>{country ? `Come from ${country}` : 'No Country known'}</p>
      {!!birthday && <p>Born {birthday}</p>}
      <p>{deathday ? `Died ${deathday}` : 'Alive'}</p>
    </div>
  );
};

export default ActorCard;
