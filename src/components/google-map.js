import React from "react"
import GoogleMapReact from "google-map-react"

const defaultProps = {
  center: { lat: 52.19, lng: -1.71 },
  zoom: 15,
}

const mapStyles = {
  width: "100%",
  height: "400px",
}

const mapPointStyles = {
  color: "white",
  background: "pink",
  padding: "15px 10px",
  display: "inline-flex",
  textAlign: "center",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "100vh",
  transform: "translate(-50%, -50%)",
}

const MapPoint = ({ text }) => <div style={mapPointStyles}>{text}</div>

const GoogleMap = () => (
  <div style={mapStyles}>
    <GoogleMapReact
      bootstrapURLKeys="AIzaSyCyQCRcTBJep0ZJbfOIG3oiuc-0FLPAGnk"
      defaultCenter={defaultProps.center}
      defaultZoom={defaultProps.zoom}
    >
      <MapPoint lat={52.1928894} lng={-1.7120023} text={"Lashes by Charlotte"} />
    </GoogleMapReact>
  </div>
)

export default GoogleMap
