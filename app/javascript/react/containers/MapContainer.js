import React, { Component } from 'react';
import { Link } from 'react-router';
import MapFormContainer from './MapFormContainer'

class MapContainer extends Component {
  constructor(props){
    super(props)
    this.state={
     starting: '',
     ending: ''
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
    loadJS('https://maps.googleapis.com/maps/api/js?key=AIzaSyBO4j3Lhl6mWVDVkk07XJfYIToTGtbLe68&callback=reInitMap')
    console.log('reBuildmap!')
  }

  initMap() {
    if (this.state.starting != '' && this.state.ending != '') {
      let start = this.state.starting;
      let end = this.state.ending;
      let map = new google.maps.Map(document.getElementById('map'), {
        zoom: 8,
        center: {lat: 42.3611, lng: -71.0570}
      });
      let startMarker = new google.maps.Marker({
        position: start,
        map: map
      });
debugger
      let endMarker = new google.maps.Marker({
        position: end,
        map: map
      });
debugger
      console.log('working?')
    } else {
      let map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: {lat: 42.3611, lng: -71.0570}
      });
    }
  }

  reInitMap() {
    let start = this.state.starting
    let end = this.state.ending

    let startMarker = new google.maps.Marker({
      position: {start}
    });
    let endMarker = new google.maps.Marker({
      position: {end}
    });

    startMarker.setMap(map);
    endMarker.setMap(map);
  }

  handleCoordChange(formPayload){
    let sloc = formPayload.start.split(' ').join('+')
    let eloc = formPayload.end.split(' ').join('+')
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${sloc}&key=AIzaSyBO4j3Lhl6mWVDVkk07XJfYIToTGtbLe68`
    )
    .then(response => response.json())
    .then(body => {
      this.setState({
        starting: body.results[0].geometry.location
      })
    })
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${eloc}&key=AIzaSyBO4j3Lhl6mWVDVkk07XJfYIToTGtbLe68`
    )
    .then(response => response.json())
    .then(body => {
      this.setState({
        ending: body.results[0].geometry.location
      })
    })
    console.log(this.state.starting)
    this.buildMap()
  }

  render(){
    return(
      <div>
        <div className="link-tabs">
          <Link className="fa fa-map fa-2x" to={`/maps`}/>
          <Link className="fa fa-comments fa-2x" to={`/posts`} />
          <i className="fa fa-sliders fa-2x"/>
        </div>
        <div className="map-container">
        <div className="map-title">FeRox Route Planner</div>
        <div className="wrap-map">
          <div className="map" id='map'></div>
          <MapFormContainer
          handleCoordChange={this.handleCoordChange}
          />
        </div>
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
