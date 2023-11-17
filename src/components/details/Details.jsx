import React, { useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import axios from 'axios';
import './Details.css'; 
import { useNavigate } from 'react-router-dom';

const Details = () => {
  const navigate = useNavigate()
  const { id } = useParams();
  const [postalData, setPostalData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://api.zippopotam.us/in/${id}`);
        setPostalData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [id]);

  const handleClearDetails = () => {
    setPostalData({});
  };
  const handlenavigate = () => {
    navigate('/')
  };

  return (
    <div className="details-container">
      <h2>Details for state: {id}</h2>
      <div className="country">{postalData.country}</div>
      {postalData.places &&
        Object.keys(postalData.places).length > 0 && (
          <div className="places-container">
            <h3>Places</h3>
            {Object.values(postalData.places).map((place, index) => (
              <div key={index} className="place">
                Place Name: {place['place name']}
              </div>
            ))}
          </div>
        )}
      <button className="clear-button" onClick={handleClearDetails}>
        Clear Details
      </button>
      <button className="clear-button" onClick={handlenavigate}>
        Go to Main Page
      </button>
    </div>
  );
};

export default Details;
