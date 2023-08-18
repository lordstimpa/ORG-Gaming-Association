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
  grid-template-columns: 1fr 1200px 1fr;
  grid-template-rows: 4rem 250px auto 5em;

  & .Title {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
    padding: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;

    & h1 {
      text-align: center;
      font-size: 4rem;
      color: #f30067;
      letter-spacing: 2rem;
      text-shadow: 1px 1px #eaeaea;
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
        border-bottom: 2px solid #f30067;
        box-shadow: 0px 1px #eaeaea;
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
  } = API("https://localhost:7296/api/Posts/all-posts");

  const formatMessage = (message) => {
    return message.replace(/\n/g, "<br>");
  };

  return (
    <Body backgroundImg={Gamer}>
      <div className="Title">
        <h1>SENASTE NYTT!</h1>
      </div>
      <div className="PostOuterContainer">
        {isLoading && <p className="loading">Laddar inlägg...</p>}
        {isError && <p className="error">Inga inlägg hittades.</p>}
        {response &&
          response.map((post) => (
            <div className="PostInnerContainer" key={post.id}>
              <h2>
                {post.start_date} - {post.start_time}
              </h2>
              <p
                dangerouslySetInnerHTML={{
                  __html: formatMessage(post.message || post.story),
                }}
              />
            </div>
          ))}
      </div>
    </Body>
  );
};

export default Posts;
