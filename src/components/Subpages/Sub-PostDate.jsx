import styled from "styled-components";
import { Link } from "react-router-dom";
import API from "../API/API";

const Body = styled.div`
  grid-column: 4 / 5;
  grid-row: 3 / 4;
  padding-top: 2rem;

  & .DateLinks {
    display: flex;
    flex-direction: column;
    margin-top: 1rem;

    & .Link {
      margin-bottom: 1rem;
      font-weight: 600;
      text-decoration: none;
      color: #444444;
      width: fit-content;
      margin-bottom: 1rem;
      padding: 0.6rem;
      border-radius: 0.5rem;
      box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
        rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;

      :hover {
        color: #f30067;
      }
    }
  }

  @media only screen and (max-width: 1200px) {
    display: none;
  }
`;

const PostDate = () => {
  const {
    data: datesPosted,
    isError,
    isLoading,
  } = API("https://localhost:7296/api/Posts/all-post-dates");

  return (
    <Body>
      <div className="Links">
        <h2>Senaste nytt</h2>
      </div>
      <div className="DateLinks">
        {isLoading && <p className="loading">Laddar inlägg...</p>}
        {isError && <p className="error">Inga inlägg hittades.</p>}
        {datesPosted.map((post) => (
          <Link key={post.id} className="Link">
            {post.created_date}
          </Link>
        ))}
      </div>
    </Body>
  );
};

export default PostDate;
