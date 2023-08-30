import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Load = styled.div`
  font-size: 2rem;
  display: flex;
  justify-content: center;
  color: var(--bg-main);
`;

function Loading({ text, speed }) {
  const [loading, setLoading] = useState(text);

  useEffect(() => {
    let load = window.setInterval(() => {
      loading === text + "..."
        ? setLoading(text)
        : setLoading((prev) => prev + ".");
    }, speed);

    return () => window.clearInterval(load);
  }, [loading]);
  return <Load>{loading}</Load>;
}

Loading.defaultProps = {
  text: "Loading",
  speed: 500,
};

export default Loading;
