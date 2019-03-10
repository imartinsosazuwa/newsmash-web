import React from 'react';
import MixItem from './MixItem';
import LoadingSpinner from './LoadingSpinner';

const Mix = props => {
  const { stories, loading } = props.mix;

  let mixDisplay;
  if (loading) {
    mixDisplay = <LoadingSpinner />;
  } else if (stories.length) {
    mixDisplay = <div className="brick-grid">
      { stories.map(story => {
        return (
          <MixItem
            key={story.url}
            headline={story.title}
            source={story.name}
            description={story.description}
            url={story.url}
            urlToImage={story.urlToImage}
          />
        );
      }) };
    </div>;
  } else {
    mixDisplay = (
      <div className="loading-message">
        Hmm, no stories found. Try searching again.
      </div>
    );
  }

  return <div class="main-content">{mixDisplay}</div>;
};

export default Mix;
