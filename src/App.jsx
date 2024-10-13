import React, { useEffect, useState } from "react";
import Gallery from "./Gallery"; // Make sure this component exists

function App() {
  const [data1, setData] = useState([]);
  const [search, setSearch] = useState("");
  const apikey = "636e1481b4f3c446d26b8eb6ebfe7127";

  useEffect(() => {
    if (search.trim() !== "") {
      fetch(
        `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apikey}&tags=${search}&per_page=24&format=json&nojsoncallback=1`
      )
        .then((res) => {
          if (!res.ok) {
            throw new Error("Failed to fetch images.");
          }
          return res.json();
        })
        .then((data) => {
          setData(data.photos.photo); // Check if 'data.photos.photo' exists
        })
        .catch((error) => {
          console.error(`Error fetching Flickr photos: ${error}`);
        });
    }
  }, [search]);

  function handleSearchInput(e) {
    setSearch(e.target.value);
  }

  return (
    <div className="container">
      <form className="form-container">
        <label htmlFor="images" className="label-heading">
          Images Gallery
        </label>
        <input
          type="text"
          required
          name="images"
          placeholder="Search Images"
          onChange={handleSearchInput}
        />
      </form>
      {data1.length >= 1 ? (
        <Gallery data={data1} />
      ) : (
        <p className="center">No image loaded</p>
      )}
    </div>
  );
}

export default App;
