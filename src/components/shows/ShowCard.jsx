import { Link } from 'react-router-dom';

const ShowCard = ({ name, id, image, summary }) => {
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
        <Link to={`/show/${id}`}>Read More</Link>
        <button type="button">Star Me</button>
      </div>
    </div>
  );
};

export default ShowCard;
