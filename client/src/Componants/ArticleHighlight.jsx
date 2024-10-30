import { useState, useEffect } from "react";
import axios from "axios";
import ArticleCard from "./ArticleCard";

function ArticleHighlight() {
  const [touristLocation, setTouristLocation] = useState([]);
  const [searchText, setSearchText] = useState("");
  console.log(searchText);

  async function dataTouristAttraction() {
    try {
      let response = await axios.get("http://localhost:4001/trips");
      console.log("Data from API:", response.data);
      setTouristLocation(response.data.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    dataTouristAttraction();
  }, []);
  return (
    <>
      <div className="mx-44 mt-10">
        <p>ค้นหาที่เที่ยว</p>
        <div className="search border-b-2">
          <input
            type="text"
            placeholder="หาที่เที่ยวแล้วไปกัน ..."
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            className="w-full outline-none text-center"
          />
        </div>
      </div>

      <div>
        <div className="flex flex-col mt-10 mx-20">
          {touristLocation.slice(0, 3).map((touristLo, index) => {
            return (
              <ArticleCard
                key={index}
                title={touristLo.title}
                url={touristLo.url}
                description={touristLo.description}
                mainPhoto={touristLo.photos[0]}
                tags={touristLo.tags}
                subPhotos={touristLo.photos.slice(1, 4)}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ArticleHighlight;
