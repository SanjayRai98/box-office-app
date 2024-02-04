const ShowCard = ({ name, id, image, summary, onStarMeClick }) => {
  const summaryStripped = summary
    ? summary.split(' ').slice(1, 10).join(' ').replace(/<.+?>/g, '')
    : 'No Decription';

  return (
    <div>
      <div>
        <img src={image} alt="Image is not Available"></img>
      </div>
      <h1>{name}</h1>
      <p>{summaryStripped}</p>
      <div>
        <a href={`/show/${id}`} target="_blank" rel="noreferrer">
          Read More
        </a>
        <button type="button" onClick={() => onStarMeClick(id)}>
          Star Me
        </button>
      </div>
    </div>
  );
};

export default ShowCard;
