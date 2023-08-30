import React from "react";
import Card from "./Card";
import styled from "styled-components";

const StoryContainer = styled.div`
  padding: 0 2rem;
  @media screen and (min-width: 635px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    max-width: 920px;
    margin: 0 auto;
    gap: 1rem;
  }
`;

const LoadMoreBtn = styled.button`
  margin: 1rem auto;
  display: block;
  background: var(--bg-main);
  border: none;
  border-radius: 4px;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.7);
  position: relative;
  text-transform: uppercase;
  font-size: 1.2rem;
  transition: all 100ms ease-in-out;

  :hover {
    cursor: pointer;
    top: -4px;
    filter: brightness(120%);
    color: white;
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.85);
  }

  :active {
    box-shadow: 0 0 0 0;
    top: 0;
  }
`;

function StoryList({ stories, setIndex }) {
  return (
    <div>
      <StoryContainer>
        {stories.map(({ id, by, descendants, time, title, url }) => (
          <Card
            key={id}
            id={id}
            by={by}
            comments={descendants}
            time={time}
            title={title}
            url={url}
          />
        ))}
      </StoryContainer>
      <LoadMoreBtn onClick={() => setIndex((prev) => prev + 6)}>
        load more
      </LoadMoreBtn>
    </div>
  );
}

export default StoryList;
