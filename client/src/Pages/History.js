import React, { useState, useEffect } from 'react';
import { fetchApodDataRange } from '../api/ApiService';
import { Grid, IconButton, Typography, Box, Tooltip } from '@material-ui/core';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@material-ui/icons';
import useStyles from '../stylesheet/HistoryStyle';



const DateRangePage = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [apodData, setApodData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [sliderIndex, setSliderIndex] = useState(0); // Index of the first media item to display in the slider
  const IMAGES_PER_ROW = 6; // Number of media items to display in each row

  const classes = useStyles()

  useEffect(() => {
    const today = new Date();
    const formattedEndDate = formatDate(today);
    setEndDate(formattedEndDate);

    const startDate = new Date();
    startDate.setDate(today.getDate() - 5);
    const formattedStartDate = formatDate(startDate);
    setStartDate(formattedStartDate);

    // Fetch data when startDate or endDate changes
    fetchData(formattedStartDate, formattedEndDate);
  }, []);

  useEffect(() => {
    // Fetch data when startDate or endDate changes
    if (startDate && endDate) {
      fetchData(startDate, endDate);
    }
  }, [startDate, endDate]);

  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const fetchData = async (start, end) => {
    setLoading(true);

    try {
      const response = await fetchApodDataRange(start, end);
      setApodData(response);
    } catch (error) {
      console.error('Error fetching data:', error);
    }

    setLoading(false);
  };

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
    // <div>
    <Box className={classes.randomGeneratorContainer}>
      <h1>Date Range Selection</h1>
      <label>
        Start Date:
        <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
      </label>
      <label>
        End Date:
        <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
      </label>
      <br></br>
      <br></br>
      <br></br>
      

      {apodData && (
        <Box>
            <Box display="flex" justifyContent="space-between" alignItems="center">
              <IconButton onClick={() => handleArrowClick('left')}>
                <KeyboardArrowLeft />
              </IconButton>
              <div className={classes.horizontalImagesContainer}>
            {apodData.slice(sliderIndex, sliderIndex + IMAGES_PER_ROW).map((item, index) => (
                <Tooltip title={item.title} key={index}>
                <img
                  src={item.url}
                  alt={item.title}
                  className={classes.thumbnail}
                  onClick={() => handleMediaClick(item)}
                />
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
                <img src={selectedMedia.url} alt={selectedMedia.title}className={classes.selectedMedia}  />
              ) : selectedMedia.media_type === 'video' ? (
                <iframe
                  title={selectedMedia.title}
                  className={classes.selectedMedia} controls
                  src={selectedMedia.url}
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              ):null}
              <Box mt={2}>
                  <Typography variant="h6">{selectedMedia.title}</Typography>
                  <Typography variant="body1">{selectedMedia.explanation}</Typography>
              </Box>
             </Box>
          )}
        </Box>
      )}
    </Box>
  );
};

export default DateRangePage;