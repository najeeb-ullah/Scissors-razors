import React, { Component } from "react";

import Iframe from "react-iframe";

const location = () => {
  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13614.930894464735!2d74.2838725!3d31.4490243!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9ad8d810cb1542a9!2sNomi's%20Salon!5e0!3m2!1sen!2s!4v1606302798390!5m2!1sen!2s"
        width={500}
        height={500}
        frameBorder={0}
        style={{ border: 0 }}
        allowFullScreen
        aria-hidden="false"
        tabIndex={0}
      />
    </div>
  );
};

export default location;

// import GoogleMapReact from "google-map-react";

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

// class SimpleMap extends Component {
//   static defaultProps = {
//     center: {
//       lat: 59.95,
//       lng: 30.33,
//     },
//     zoom: 11,
//   };

//   render() {
//     return (
//       // Important! Always set the container height explicitly
//       <div style={{ height: "70vh", width: "50%" }}>
//         <GoogleMapReact
//           bootstrapURLKeys={{ key: "AIzaSyDKphSUbgqE611SN0Ezy3sl2EMTThSHcoM" }}
//           defaultCenter={this.props.center}
//           defaultZoom={this.props.zoom}
//         >
//           <AnyReactComponent lat={31.449793} lng={74.28383} text="My Marker" />
//         </GoogleMapReact>
//       </div>
//     );
//   }
// }

// export default SimpleMap;
