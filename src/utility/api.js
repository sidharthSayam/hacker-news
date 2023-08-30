import axios from "axios";

export const getStoriesId = async (story) => {
  const response = await axios.get(
    `https://hacker-news.firebaseio.com/v0/${story}stories.json?print=pretty`
  );
  const result = await response;

  return result.data;
};

export const getItem = async (item) => {
  const response = await axios.get(
    `https://hacker-news.firebaseio.com/v0/item/${item}.json?print=pretty`
  );
  const result = await response;

  return result.data;
};
