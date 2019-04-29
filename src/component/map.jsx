import React, { Component } from 'react';
import { connect} from 'react-redux';

class Map extends Component {

  setMapView = () => {
    const map = new window.google.maps.Map(
      document.getElementById(this.props.id),
      this.props.options
    ); 
    this.props.onMapLoad(map);
  }
 componentDidUpdate(){
    return this.setMapView()
 }
  componentDidMount(){
    if (!window.google) {
      let script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDifJCm3p_ecgrUuydWuezf0wYYiqeYsOg`;
      let s = document.getElementsByTagName('script')[0];
      s.parentNode.insertBefore(script, s);
      //We cannot access google.maps until it's finished loading
      script.addEventListener('load', event => {
        this.setMapView()
      })
    } else {
      this.setMapView()
    }
  }
  render() {
    return (
      <div className='map' id={this.props.id}></div>
    )
  }
}
const mapStateToProps = (state) => ({
  locations: state.location
})
export default connect(mapStateToProps, null)(Map)
