import React, { Component } from 'react';
import MapFormContainer from './MapFormContainer'

class MapContainer extends Component {
  constructor(props){
    super(props)
    this.state={
     lat: 42.3611,
     lng: -71.0570,
     starting: [],
     ending: []
    }
    this.initMap=this.initMap.bind(this)
    this.reInitMap=this.reInitMap.bind(this)
    this.handleCoordChange=this.handleCoordChange.bind(this)
    this.buildMap=this.buildMap.bind(this)
    this.reBuildMap=this.reBuildMap.bind(this)
  }

  componentDidMount() {
    this.buildMap()
  }

  buildMap(){
    window.initMap = this.initMap;
    loadJS('https://maps.googleapis.com/maps/api/js?key=AIzaSyBO4j3Lhl6mWVDVkk07XJfYIToTGtbLe68&callback=initMap')
    console.log('buildmap!')
  }

  reBuildMap(){
    window.reInitMap = this.reInitMap;
    loadJS('https://maps.googleapis.com/maps/api/js?key=AIzaSyBO4j3Lhl6mWVDVkk07XJfYIToTGtbLe68&callback=initMap')
    console.log('reBuildmap!')
  }

  initMap() {
    let lat = parseFloat(this.state.lat)
    let lng = parseFloat(this.state.lng)
    let map = new google.maps.Map(document.getElementById('map'), {
      zoom: 12,
      center: {lat: lat, lng: lng}
    });
  }

  reInitMap() {
    let slat = parseFloat(this.state.starting[0])
    let slng = parseFloat(this.state.starting[1])
    let elat = parseFloat(this.state.ending[0])
    let elng = parseFloat(this.state.ending[1])
    let map = new google.maps.Map(document.getElementById('map'), {
      zoom: 12,
      center: {lat: slat, lng: slng}
    });
  }

  handleCoordChange(formPayload){
    fetch('/api/v1/maps',
      {
      credentials: 'same-origin',
      headers: {
       'Content-Type': 'application/json',
       'X-Requested-With': 'XMLHttpRequest'
      },
      method: 'POST',
      body: JSON.stringify(formPayload)
    })
    .then(response =>{ debugger
      response.json()})
    .then(body => {
      debugger
      this.setState({
        starting: body.starting,
        ending: body.ending
      })
    })
    this.reBuildMap()
  }

  render(){
    return(
      <div>
        <div className="map-title">FeRox Route Planner
          <div id='map'></div>
        </div>
        <div>
          <MapFormContainer
          handleCoordChange={this.handleCoordChange}
          />
        </div>
      </div>
    )
   }
  }

export default MapContainer;

function loadJS(src) {
  let ref = window.document.getElementsByTagName("script")[0];
  let script = window.document.createElement("script");
  script.src = src;
  script.async = true;
  ref.parentNode.insertBefore(script, ref);
}
