import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getStoriesId } from "../utility/api";
import usePrevious from "../hooks/usePrevious";
import Loading from "./Loading";
import StoryList from "./StoryList";

function Logic() {
  const { type } = useParams();

  const prevType = usePrevious(type);
  const [storyIds, setStoryIds] = useState([]);
  const [index, setIndex] = useState(0);
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("inside this crazy one");
    if (prevType !== type) {
      setStories([]);
    }
  }, [type]);

  useEffect(() => {
    getStoriesId(type).then((res) => {
      setStoryIds(res);
      setLoading(false);
    });
  }, [type]);

  useEffect(() => {
    const getStory = async () => {
      const ids = storyIds.slice(index, index + 6);
      await Promise.all(
        ids.map((id) =>
          axios.get(
            `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`
          )
        )
      )
        .then((res) =>
          setStories((prev) => [...prev, ...res.map((res) => res.data)])
        )
        .catch("something went wrong");
    };

    getStory();
  }, [index, storyIds]);

  if (stories.length === 0) return <Loading />;

  return <StoryList stories={stories} setIndex={setIndex} />;
}

export default Logic;
