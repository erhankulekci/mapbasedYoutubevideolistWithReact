import React, { useEffect, useRef } from "react";

export default function GoogleMap(props) {
  const googleMapRef = useRef();
  let googleMap;

  useEffect(() => {
    const googleMapScript = document.createElement("script");
    googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCxI2T4HRhvFFHnHMAIv6rS9QCQ57Q59w8&libraries=places`;
    googleMapScript.async = true;
    window.document.body.appendChild(googleMapScript);
    googleMapScript.addEventListener("load", () => {
      createGoogleMap();
    });
  }, []);

  const createGoogleMap = () => {
    googleMap = new window.google.maps.Map(googleMapRef.current, {
      zoom: 12,
      center: {
        lat: 39.925533,
        lng: 32.866287,
      },
    });

    new window.google.maps.event.addListener(
      googleMap,
      "click",
      function (event) {
        props.getVideos(event.latLng);
      }
    );
  };

  return (
    <div
      id="google-map"
      ref={googleMapRef}
      style={{ width: "100%", height: "300px", border: "5px solid lightgray" }}
    />
  );
}
