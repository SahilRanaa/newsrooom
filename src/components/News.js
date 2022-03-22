import axios from "axios";
import React, { useEffect, useState } from "react";

const News = () => {
  const apiKey = "9c7fe5c64d084729b07d4755764e0544";

  const [newsData, setNewsData] = useState([]);

  const getNews = async () => {
    const { data } = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`
    );

    const newsData = data.articles;
    console.log(newsData);
    setNewsData(newsData);
  };

  useEffect(() => {
    getNews();
  }, []);

  return (
    <div>
      <div class="row row-cols-1 row-cols-md-3 g-4 mx-4">
        {newsData.map((elem, id) => (
          <div class="col" key={id}>
            <div class="card h-100">
              <img src={elem.urlToImage} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">{elem.title}</h5>
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
              <a className="btn btn-primary" href={elem.url}>
                Read More -
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
