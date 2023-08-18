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

      :hover {
        color: #f30067;
      }
    }
  }
`;

const PostDate = () => {
  const {
    data: datesPosted,
    isError,
    isLoading,
  } = API("https://localhost:7296/get-all-post-dates-company-page");

  return (
    <Body>
      <div className="Links">
        <h2>Inlägg</h2>
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
