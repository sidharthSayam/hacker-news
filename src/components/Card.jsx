import React from "react";
import moment from "moment";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledCard = styled.div`
  display: block;
  border: solid 1px var(--bg-main);
  border-radius: 1rem;
  text-align: center;
  margin-bottom: 1rem;
  padding: 0.25em 0.5em;
  background: linear-gradient(to right, var(--bg-gradient), var(--bg-white));
  transition: all 100ms ease-in-out;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.8);
  text-decoration: none;
  color: black;
  position: relative;

  :hover {
    background: linear-gradient(to left, var(--bg-gradient), var(--bg-white));
    top: -4px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.85);
  }

  :active {
    top: 0;
    box-shadow: 0 0 0 0;
  }
`;

const Title = styled.a`
  font-size: 1.2rem;
  font-weight: 800;
  text-decoration: underline;
  color: black;

  :hover {
    position: relative;
    top: -1.5px;
  }
`;

const Author = styled.p``;

const Time = styled.p``;

const Comment = styled.p`
  color: black;
  text-decoration: none;
`;
function Card({ id, by, comments, time, title, url }) {
  return (
    <StyledCard>
      <Title href={url} target="_blank">
        {" "}
        {title}
      </Title>
      <Author> created by: {by}</Author>
      <Time> at : {moment(time).format("DD MMM YYYY hh:mm a")}</Time>
      {comments ? (
        <Link to={`/post?id=${id}`}>
          <Comment> {comments ?? "0"} comments</Comment>
        </Link>
      ) : (
        <Comment> No comments </Comment>
      )}
    </StyledCard>
  );
}

export default Card;
