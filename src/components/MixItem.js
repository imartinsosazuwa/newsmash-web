import React from 'react';

export default ({ url, urlToImage, headline, source, description }) => {

  const imgSrc = urlToImage
    ? <img src={urlToImage ? urlToImage : null} alt={headline}></img>
    : null;
  
  return (
    <div className="mix-item">
      <div className="news-source">{source}</div>
      <div className="mix-headline">
        <a href={url}>{headline}</a>
      </div>
      <span>{imgSrc}</span>
      <span className="news-content">{description}</span>
    </div>
  );
};
