import React from "react";
const NewsItem = (props) => {
  const { title, description, url, newsUrl, pubAt, author, name, mode,id } = props;

  const getCardBackgroundColor = () => {
    if (mode === "off") {
      return {
        backgroundColor: "white",
        color: " black",
        borderColor: "black",
      };
    } else {
      return {
        backgroundColor: "#1a1a2e",
        color: " white",
        borderColor: "white",
      };
    }
  };

  const dmode = { color: " white", borderColor: "white", fontSize: "13px" };
  const wmode = { color: " black", borderColor: "black", fontSize: "13px" };
  const dmodee = {
    backgroundColor: "#1a1a2e",
    color: " white",
    borderColor: "white",
  };
  const wmodee = {
    backgroundColor: "#f0f0f0",
    color: " black",
    borderColor: "black",
  };
  const bdmodee = {
    backgroundColor: "#293551",
    color: " white",
    borderColor: "white",
  };
  const bwmodee = {
    backgroundColor: "white",
    color: " black",
    borderColor: "black",
  };

  const cardColor = getCardBackgroundColor();



  


  return (
    <div>
      <div className='card my-2 cards' style={cardColor}>
        <span className='position-absolute top-0 start-50 translate-middle badge bg-danger'>
          {name}
          
        </span>
        
        <img
          src={
            url
              ? url
              : "https://scontent.fblr20-1.fna.fbcdn.net/v/t39.30808-6/347401604_636059861349805_1099354041625818104_n.png?_nc_cat=109&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=MMldMvBP4nsAX9b8L-H&_nc_ht=scontent.fblr20-1.fna&oh=00_AfDIg0g5lVAT-dk0gQZ_MESP_BGqb_f7Acu6MKRkKk65eg&oe=650A03C1"
          }
          alt=''
          className='card-img-top'
          style={{ maxHeight: "200px", minHeight: "200px" }}
        />
        
        <div className='card-body container '>
          
          <div style={{ height: "70px" }}>
            <p
              className='card-title'
              style={{ fontFamily: "Arial, sans-serif", fontSize: "15px" }}>
              <b>
                {title && title.length > 55
                  ? title.slice(0, 55) + "..."
                  : title}
              </b>
            </p>
          </div>
          <div style={{ height: "120px" }}>
            <p
              className='card-text'
              style={{ fontFamily: "Arial, sans-serif", fontSize: "15px" }}>
              {description && description.length > 130
                ? description.slice(0, 130) + "..."
                : description}
            </p>
          </div>
          <div className='d-flex flex-column justify-content-center align-items-center'>
            <p className='card-text' style={mode === "on" ? dmode : wmode}>
              <small className=' text-center d-flex flex-column align-items-center'>
                by {author ? author : "unknown"} <br />
                {new Date(pubAt).toLocaleString(undefined, {
                  timeZone: "Asia/Kolkata",
                })}
                
              </small>
              
            </p>
            
          </div>
    
          <div className='d-flex flex-column justify-content-center align-items-center'>
            
            <a
              href={newsUrl}
              target='_blank'
              rel='noopener noreferrer'
              className={
                mode === "on"
                  ? "btn bt btn-sm m-2 btn-light"
                  : "btn bt btn-sm m-2 btn-dark"
              }>
              read more
              
            </a>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
