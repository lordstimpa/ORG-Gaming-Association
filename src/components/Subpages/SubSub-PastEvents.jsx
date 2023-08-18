import API from "../API/API";
import { Link } from "react-router-dom";

const PastEvents = () => {
  const {
    data: events,
    isError,
    isLoading,
  } = API("https://localhost:7296/get-all-past-events-company-page");

  return (
    <>
      <div className="Title">
        <h1>EVENT</h1>
      </div>
      <div className="Info">
        <div>
          <h2>Tidigare event</h2>
        </div>
        {isLoading && <p className="loading">Laddar tidigare event...</p>}
        {isError && <p className="error">Inga tidigare event hittades.</p>}
        {events.map(
          (
            event // Use parentheses to enclose the JSX
          ) => (
            <Link to={event.id} key={event.id}>
              <div className="EventContainer">
                <div className="TextContainer">
                  <h2>{event.name}</h2>
                  <p>Datum: {event.start_date}</p>
                  <p>Tid: {event.start_time}</p>
                </div>
                <img src={event.cover_source} alt="Event Cover" />
              </div>
            </Link>
          )
        )}
      </div>
    </>
  );
};

export default PastEvents;
