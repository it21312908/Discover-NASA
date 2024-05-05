import React, { useState, useEffect } from 'react';
import { fetchRandomApodData } from '../api/ApiService'; // Update the import path as needed
import { Box, CircularProgress, Typography, makeStyles, IconButton, Tooltip } from '@material-ui/core';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@material-ui/icons';
import useStyles from '../stylesheet/RandomGeneratorStyles'; // Import your styles from the separate file

const RandomGenerator = () => {
  const MIN_COUNT = 1;
  const MAX_COUNT = 10;
  const IMAGES_PER_ROW = 6;

  const getRandomCount = () => {
    const randomCount = Math.floor(Math.random() * (MAX_COUNT - MIN_COUNT + 1)) + MIN_COUNT;
    console.log('Generated Random Count:', randomCount);
    return randomCount;
  };

  const classes = useStyles();

  const [apodData, setApodData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [randomCount, setRandomCount] = useState(getRandomCount());
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [sliderIndex, setSliderIndex] = useState(0);

  const handleFetchRandomData = async () => {
    setLoading(true);

    try {
      const response = await fetchRandomApodData(randomCount);
      setApodData(response);
      setSelectedMedia(response[0]);
    } catch (error) {
      console.error('Error fetching data:', error);
    }

    setLoading(false);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setRandomCount(getRandomCount());
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    handleFetchRandomData();
  }, [randomCount]);

  const handleMediaClick = (media) => {
    setSelectedMedia(media);
  };

  const handleArrowClick = (direction) => {
    if (direction === 'left') {
      const newIndex = sliderIndex === 0 ? apodData.length - 1 : sliderIndex - IMAGES_PER_ROW;
      setSliderIndex(newIndex);
    } else {
      const newIndex = sliderIndex + IMAGES_PER_ROW >= apodData.length ? 0 : sliderIndex + IMAGES_PER_ROW;
      setSliderIndex(newIndex);
    }
  };

  return (
    <Box className={classes.randomGeneratorContainer}>
      <h1>Fetch Random Media</h1>
      <p color='white'>Random Count: {randomCount}</p>
      {loading ? (
        <CircularProgress />
      ) : (
        apodData && (
          <Box>
            <Box display="flex" justifyContent="space-between" alignItems="center">
              <IconButton onClick={() => handleArrowClick('left')}>
                <KeyboardArrowLeft />
              </IconButton>
              <div className={classes.horizontalImagesContainer}>
                {apodData.slice(sliderIndex, sliderIndex + IMAGES_PER_ROW).map((item, index) => (
                  <Tooltip title={item.title} key={index}>
                    {item.media_type === 'image' ? (
                      <img
                        src={item.url}
                        alt={item.title}
                        className={`${classes.thumbnail} ${selectedMedia === item ? classes.selectedMedia : ''}`}
                        onClick={() => handleMediaClick(item)}
                      />
                    ) : item.media_type === 'video' ? (
                      <video
                        src={item.url}
                        title={item.title}
                        className={`${classes.thumbnail} ${selectedMedia === item ? classes.selectedMedia : ''}`}
                        onClick={() => handleMediaClick(item)}
                        controls
                      />
                    ) : null}
                  </Tooltip>
                ))}
              </div>
              <IconButton onClick={() => handleArrowClick('right')}>
                <KeyboardArrowRight />
              </IconButton>
            </Box>
            {selectedMedia && (
              <Box mt={4} className={classes.selectedMediaContainer}>
                {selectedMedia.media_type === 'image' ? (
                  <img src={selectedMedia.url} alt={selectedMedia.title} className={classes.selectedMedia} />
                ) : selectedMedia.media_type === 'video' ? (
                  <video src={selectedMedia.url} title={selectedMedia.title} className={classes.selectedMedia} controls />
                ) : null}
                <Box mt={2}>
                  <Typography variant="h6">{selectedMedia.title}</Typography>
                  <Typography variant="body1">{selectedMedia.explanation}</Typography>
                </Box>
              </Box>
            )}
          </Box>
        )
      )}
    </Box>
  );
};

export default RandomGenerator;
