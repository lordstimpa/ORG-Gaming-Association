import { useParams } from "react-router-dom";
import API from "../API/API";

const EventInfo = () => {
  const { id } = useParams();
  const {
    data: eventInfo,
    isError,
    isLoading,
  } = API(`https://localhost:7296/api/Events/all-event-information/${id}`);

  return (
    <>
      <div className="Title">
        <h1>EVENT</h1>
      </div>
      <div className="Info">
        <div>
          <h2>Event</h2>
        </div>
        {isLoading && (
          <div className="Loading">
            <p>Laddar event information...</p>
          </div>
        )}
        {isError && (
          <div className="Error">
            <p>Ingen event information hittades.</p>
          </div>
        )}
        {eventInfo && (
          <>
            <div>
              <h4>{eventInfo.name}</h4>
            </div>
            <div>
              <p>
                {eventInfo.start_date} - {eventInfo.start_time}
              </p>
              <p>{eventInfo.description}</p>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default EventInfo;
