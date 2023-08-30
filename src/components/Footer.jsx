import React from "react";
import { FaGithub, FaYoutube, FaLinkedin, FaTwitter } from "react-icons/fa";
import styled from "styled-components";

const StyledFooter = styled.div`
  background: var(--bg-main);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.5em;
  position: relative;
  left: 0;
  bottom: 0;
  width: 100%;
`;

const StyledName = styled.p`
  padding: 0.5em 0;
  font-size: 1.1rem;
  font-weight: 800;
`;

const StyledLinks = styled.div`
  font-size: 1.5rem;
  display: flex;

  * {
    margin: 0 4px;
    color: black;

    :hover {
      color: white;
    }
  }
`;

function Footer() {
  return (
    <StyledFooter>
      <StyledName>
        Created by:{" "}
        <span style={{ textDecoration: "underline" }}>Sidharth Sayam</span>
      </StyledName>
      <StyledLinks>
        <a href="https://github.com/sidharthSayam" target="_blank">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/sidharthsayam/" target="_blank">
          <FaLinkedin />
        </a>
        <a>
          <FaYoutube />
        </a>
        <a>
          <FaTwitter />
        </a>
      </StyledLinks>
    </StyledFooter>
  );
}

export default Footer;
