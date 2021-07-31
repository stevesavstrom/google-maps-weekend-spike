import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import Marker from "./marker.jsx";

// const AnyReactComponent = ({ text }) => <div>{text}</div>;
// const AnyReactComponent = ({ icon }) => <img src="ping.png">{icon}</img>;

const array = [
  {name: "Silverwood Park", lat: 44.99497276974862, lng: -93.41553105850683 },
  {name: "The Hutton House", lat: 45.04800564145538, lng: -93.22312600268164 },
  {name: "Hidden Meadow and Barn", lat: 44.484745529394715, lng: -92.13573074133765},
  {name: "Aria", lat: 44.98495516700579, lng: -93.26840007015348 },
  {name: "McNamara Alumni Center", lat: 44.97508048418076, lng: -93.22747530268451},
  {name: "Minneapolis Event Centers", lat: 44.98716170847079, lng: -93.25373953156898}
];

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 44.977753,
      lng: -93.265,
    },
    zoom: 12,
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyASfoAL7uKRWX0lJbblrkP4LdcQlWXB694" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          {array.map((place, index) => {
            return <Marker key={index} lat={place.lat} lng={place.lng} />
          })}
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
