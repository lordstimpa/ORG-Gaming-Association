import { useParams } from "react-router-dom";
import API from "../API/API";

const EventInfo = () => {
  const { id } = useParams();
  const {
    data: eventInfo,
    isError,
    isLoading,
  } = API("https://localhost:7296/get-all-post-dates-company-page");

  return (
    <>
      <div className="Title">
        <h1>EVENT</h1>
      </div>
      <div className="Info">
        <div>
          <h2>Event Information</h2>
        </div>
        {isLoading && <p className="loading">Laddar event information...</p>}
        {isError && <p className="error">Ingen event information hittades.</p>}
        {eventInfo.map((info) => (
          <div>
            <p></p>
          </div>
        ))}
      </div>
    </>
  );
};

export default EventInfo;
