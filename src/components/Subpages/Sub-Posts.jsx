import styled from "styled-components";
import API from "../API/API";
import Gamer from "../../assets/gamer.jpg";

const Body = styled.div`
  min-height: 100svh;
  min-width: 100%;
  background-image: url(${(props) => props.backgroundImg});
  background-size: cover;
  background-position: center;
  display: grid;
  grid-template-columns: 1fr 1100px 1fr;
  grid-template-rows: 4rem fit-content(200px) auto 5em;

  & .Title {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
    padding: 2rem;

    & h1 {
      text-align: center;
      font-size: 5rem;
      color: #f30067;
    }
  }

  & .PostOuterContainer {
    grid-column: 2 / 3;
    grid-row: 3 / 4;
    display: flex;
    flex-direction: column;
    align-items: center;

    & .PostInnerContainer {
      width: 750px;
      height: fit-content;
      border-radius: 2em;
      backdrop-filter: blur(25px);
      background: rgba(0, 0, 0, 0.4);
      padding: 2em;
      margin: 1em;

      & h2 {
        color: #eaeaea;
        padding-bottom: 1rem;
        margin-bottom: 1rem;
        border-bottom: 1px solid #f30067;
      }

      & p {
        color: #eaeaea;
      }
    }
  }
`;

const Posts = () => {
  const {
    data: response,
    isError,
    isLoading,
  } = API("https://localhost:7296/get-all-posts-company-page");

  const feedPosts = response?.data || [];

  return (
    <Body backgroundImg={Gamer}>
      <div className="Title">
        <h1>Senaste nytt från ORG!</h1>
      </div>
      <div className="PostOuterContainer">
        {isLoading && <p className="loading">Laddar inlägg...</p>}
        {isError && <p className="error">Inga inlägg hittades.</p>}
        {feedPosts &&
          feedPosts.map((post) => (
            <div className="PostInnerContainer" key={post.id}>
              <h2>{post.created_time}</h2>
              <p>{post.message || post.story}</p>
            </div>
          ))}
      </div>
    </Body>
  );
};

export default Posts;
