import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import Spin from "./Spin";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const dmode = { color: " white", borderColor: "white" };
  const wmode = { color: " black", borderColor: "black" };
  const bdmode = { color: " white", borderColor: "white" };
  const bwmode = { color: " black", borderColor: "black" };

  const updateNews = async () => {
    props.setProgress(20);
    setLoading(true);
    let url = `https://newsapi.org/v2/top-headlines?q=${props.pInput}&country=${props.country}&category=${props.category}&apiKey=${props.appKey}&pageSize=${props.pageSize}&page=${page}`;
    props.setProgress(40);
    let data = await fetch(url);
    let parseData = await data.json();
    props.setProgress(60);
    setArticles(parseData.articles);
    setTotalResults(parseData.totalResults);
    setLoading(false);
    props.setProgress(100);
  };

  useEffect(() => {
    updateNews();
  }, []);

  const handleNext = async () => {
    setPage(page + 1);
    updateNews();
  };

  const handlePrevious = async () => {
    setPage(page - 1);
    updateNews();
  };

  const fetchMoreData = async () => {
    setLoading(true);
    let url = `https://newsapi.org/v2/top-headlines?q=${props.pInput}&country=${props.country}&category=${props.category}&apiKey=${props.appKey}&pageSize=${props.pageSize}&page=${page}`;
    let data = await fetch(url);
    let parseData = await data.json();
    setArticles(articles.concat(parseData.articles));
    setTotalResults(parseData.totalResults);
    setLoading(false);
    setPage(page + 1);
  };

  return (
    <div
      style={props.mode === "on" ? dmode : wmode}
      className='d-flex justify-content-center '>
      <div className='row d-flex justify-content-center pad'>
        <h3
          className='text-center headd '
          style={props.mode === "on" ? dmode : wmode}>
          Head Lines on {props.currentRoute.charAt(0).toUpperCase()}
          {props.currentRoute.slice(1)}
        </h3>
        {props.scrollMode ? (
          !loading &&
          articles.map((ele, index) => {
            return (
              <div className='col-auto mx-2 my-2' key={index}>
                {console.log(ele)}
                <NewsItem
                  title={ele.title}
                  description={ele.description}
                  url={ele.urlToImage}
                  newsUrl={ele.url}
                  pubAt={ele.publishedAt}
                  author={ele.author}
                  name={ele.source.name}
                  mode={props.mode}
                />
              </div>
            );
          })
        ) : (
          <InfiniteScroll
            dataLength={articles.length}
            next={fetchMoreData}
            hasMore={articles.length <= totalResults}
            loader={<Spin />}
            style={{ overflowX: "hidden" }}>
            <div className='row justify-content-center'>
              {articles.map((ele, index) => (
                <div className='col-auto mx-2 my-2' key={index}>
                  <NewsItem
                    title={ele.title}
                    description={ele.description}
                    url={ele.urlToImage}
                    newsUrl={ele.url}
                    pubAt={ele.publishedAt}
                    author={ele.author}
                    name={ele.source.name}
                    mode={props.mode}
                  />
                </div>
              ))}
            </div>
          </InfiniteScroll>
        )}

        {props.scrollMode ? (
          <div className='d-flex justify-content-between'>
            <button
              type='button'
              className={
                props.mode === "on"
                  ? "btn bt btn-light m-2"
                  : "btn bt btn-dark m-2"
              }
              disabled={page === 1}
              onClick={handlePrevious}>
              &larr; previous
            </button>
            <div style={{ height: "20px" }}>{loading && <Spin />}</div>
            <button
              type='button'
              className={
                props.mode === "on"
                  ? "btn bt btn-light m-2"
                  : "btn bt btn-dark m-2"
              }
              onClick={handleNext}
              disabled={page >= Math.ceil(totalResults / props.pageSize)}>
              next &rarr;
            </button>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default News;
