import styled from "styled-components";

const Body = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1100px 1fr;
  grid-template-rows: 4em auto 4em;

  & .Parent {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
    display: flex;
    justify-content: center;
    align-items: center;

    & .Child {
      border-radius: 2em;
      padding: 2em;
      margin: 4em 0;
      color: #eaeaea;
      border-radius: 2rem;
      backdrop-filter: blur(50px);
      background: rgba(0, 0, 0, 0.4);

      & h1 {
        color: #00d1cd;
      }

      & div > * {
        padding: 0.5rem;
      }

      & div > h2 {
        padding-top: 2rem;
      }

      & > div:not(:last-child) {
        padding-bottom: 2rem;
        border-bottom: 1px solid #00d1cd;
      }
    }
  }

  @media only screen and (max-width: 1170px) {
    display: flex;
    justify-content: center;
    align-items: center;

    .Parent {
      width: 90%;
    }
  }
`;

const More = () => {
  return (
    <Body>
      <div className="Parent">
        <div className="Child">
          <h1>Lorem Ipsum</h1>
          <div>
            <h2>Lorem Ipsum</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
          <div>
            <h2>Lorem Ipsum</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>
      </div>
    </Body>
  );
};

export default More;
