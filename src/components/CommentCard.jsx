import React from "react";
import styled from "styled-components";
import moment from "moment";

const CommentContainer = styled.div`
  background: #999;
  padding: 0.25em 0.5em;
  margin: 0.25em 0.5em;
  border-radius: 4px;
  max-width: 820px;
`;

const CommentText = styled.div`
  font-size: 1.2rem;
`;

const CommentAuthor = styled.div``;

const CommentTime = styled.div``;

function CommentCard({ id, by, time, text }) {
  return (
    <CommentContainer>
      <CommentText>"{text}"</CommentText>
      <CommentAuthor>by {by}</CommentAuthor>
      <CommentTime>
        {moment(time).format("MMMM Do YYYY, h:mm:ss a")}
      </CommentTime>
    </CommentContainer>
  );
}

export default CommentCard;
