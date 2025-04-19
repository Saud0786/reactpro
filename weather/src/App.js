
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

function App() {
  let [city, setCity] = useState("");
  let [wDetail, setwDetail] = useState("");
  let [isLoading, setisLoading] = useState(false);
  let getData = (event) => {
    if (city === "") {
      alert("enter city name");
    } else {
      setisLoading(true);
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=751d66e130befad396405dc13796a57c&units=metric`
      )
        .then((res) => res.json())
        .then((finalRes) => {
          if (finalRes.cod === "404") {
            setwDetail("");
          } else {
            setwDetail(finalRes);
          }
          setisLoading(false);
        });
    }
    event.preventDefault();
    setCity("");
  };
  return (
    <div className="App">
      <div className="head">
        <h1>Simple weather </h1>
        <form
          onSubmit={getData}
          className="d-flex flex-wrap justify-content-center gap-2 mt-3"
        >
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter City name"
            className="form-control"
            style={{ maxWidth: "300px" }}
          />
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </form>
      </div>
      <div className="bg-white shadow-lg mt-4 weatherbox p-4 position-relative d-flex flex-column align-items-center rounded-5">
        {isLoading && (
          <img
            src="https://cdnl.iconscout.com/lottie/premium/thumb/loading-bar-and-loader-5371059-4510678.gif"
            width={100}
            alt="Loading..."
            className="position-absolute top-50 start-50 translate-middle"
          />
        )}
        {!isLoading && wDetail !== "" ? (
          <>
            <h3 className="fw-bold">
              {wDetail.name} <span>({wDetail.sys.country})</span>
            </h3>
            <h2>{wDetail.main.temp} °C</h2>
            <img
              src={`http://openweathermap.org/img/w/${wDetail.weather[0].icon}.png`}
              alt=""
            />
            <p className="text-capitalize">{wDetail.weather[0].description}</p>
          </>
        ) : (
          !isLoading && <p className="mt-3 text-muted">No Data</p>
        )}
      </div>
    </div>
  );
}

export default App;
