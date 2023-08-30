import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getItem } from "../utility/api";
import CommentCard from "./CommentCard";
import Loading from "./Loading";
import styled from "styled-components";

const CommentsPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 1em;
`;

const Title = styled.div`
  font-size: 1.8rem;
  font-weight: 800;
  text-decoration: underline;
`;

const UserName = styled.a`
  font-size: 1.4rem;
  text-dexoration: none;
  color: #387cc7;
`;

function Comments() {
  const search = useLocation().search;
  let id = new URLSearchParams(search).get("id");

  const [comments, setComments] = useState([]); // to get the comments id
  const [title, setTitle] = useState();
  const [url, setUrl] = useState();
  const [by, setBy] = useState();
  const [commentsObj, setCommentsObj] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getItem(id)
      .then((res) => {
        console.log(res);
        setComments(res.kids);
        setTitle(res.title);
        setBy(res.by);
        setUrl(res.url);
        setLoading(false);
      })
      .catch(() => "Somenthing went wrong while fetching comments.");
  }, []);

  useEffect(() => {
    comments.forEach((el) =>
      getItem(el)
        .then((res) => {
          setCommentsObj((prev) => [...prev, res].slice(0, 30));
        })
        .catch(() => "Somenthing went wrong while fetching comments.")
    );
  }, [comments]);

  console.log(commentsObj);

  if (loading) return <Loading text="Fetching Comments" />;

  return (
    <CommentsPage>
      <Title>{title}</Title>

      <UserName>by {by}</UserName>
      <Title> Comments </Title>
      {commentsObj.map((el) => (
        <CommentCard key={el.id} by={el.by} time={el.time} text={el.text} />
      ))}
    </CommentsPage>
  );
}

export default Comments;
