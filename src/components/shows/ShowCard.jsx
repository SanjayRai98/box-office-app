import styled from 'styled-components';
import { SearchCard, SearchImgWrapper } from '../../common/SearchCard';
import { StarIcon } from '../../common/StarIcon';
import { useRef } from 'react';

const ShowCard = ({ name, id, image, summary, onStarMeClick, isStarred }) => {
  const summaryStripped = summary
    ? summary.split(' ').slice(1, 10).join(' ').replace(/<.+?>/g, '') + ' ...'
    : 'No Decription';

  const starBtnRef = useRef();

  const handleStarClick = () => {
    onStarMeClick(id);

    const starBtnEl = starBtnRef.current;

    if (!starBtnEl) return;

    if (isStarred) {
      starBtnEl.classList.remove('animate');
    } else {
      starBtnEl.classList.add('animate');
    }

    hideUnStarShowCard(starBtnEl);
  };

  const hideUnStarShowCard = starBtnEl => {
    if (!isStarred) return;
    starBtnEl.parentElement.parentElement.remove(this);
  };

  return (
    <SearchCard>
      <SearchImgWrapper>
        <img src={image} alt="Image is not Available"></img>
      </SearchImgWrapper>

      <h1>{name}</h1>

      <p>{summaryStripped}</p>

      <ActionSection>
        <a href={`/show/${id}`} target="_blank" rel="noreferrer">
          Read More
        </a>
        <StarBtn ref={starBtnRef} type="button" onClick={handleStarClick}>
          <StarIcon active={isStarred} />
        </StarBtn>
      </ActionSection>
    </SearchCard>
  );
};

export default ShowCard;

const ActionSection = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    text-decoration-color: #000;
    color: #000;
    &:hover {
      text-decoration-color: blue;
      color: blue;
    }
  }
`;

const StarBtn = styled.button`
  outline: none;
  border: 1px solid #8e8e8e;
  border-radius: 15px;
  padding: 5px 20px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
  &.animate {
    ${StarIcon} {
      animation: increase 0.75s ease-in forwards;
      @keyframes increase {
        0% {
          transform: scale(1);
        }
        50% {
          transform: scale(3) rotate(45deg);
        }
        100% {
          transform: scale(1);
        }
      }
    }
  }
`;
