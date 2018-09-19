import React, { Component } from 'react';
import { ScrollView, View, Text, StyleSheet, Dimensions,Image } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MapView from 'react-native-maps';
import places from './locations';
import geolib from 'geolib';


export default class LocationTab  extends Component {
  
  static navigationOptions = {
   tabBarIcon:<MaterialIcons name="location-on" style={{color:'#fff'}}  size={24} />,    
   title:'Lojas'  
 }

 state = {
  places,
  initialPosition: {
    coords:{ accuracy: 0,altitude: 0, altitudeAccuracy: 0, heading: 0, latitude: 0, longitude: 0, speed: 0 },
    timestamp: 0
  },
  
};

 componentDidMount(){
  navigator.geolocation.getCurrentPosition(
    (initialPosition) => {
      this.setState({initialPosition})
    },
    (error) => {
      this.setState({error: error.message})
    },
    {enableHighAccuracy: true, timeout: 25000, maximumAge: 3600000 }
  )
 }

_mapReady = () => {
  const {key} = geolib.findNearest({latitude:this.state.initialPosition.coords.latitude,longitude:this.state.initialPosition.coords.longitude}, this.state.places, 1);
  console.log(key);   
  this.state.places[0].mark.showCallout();


  /* console.log(geolib.findNearest(this.state.initialPosition.coords, this.state.places, 1)) */
};

render() {
  
  const { latitude, longitude } = this.state.initialPosition.coords;
  
  return (
    <View style={styles.container}>
      <MapView
        ref={map => this.mapView = map}
        initialRegion={{
          latitude,
          longitude,
          latitudeDelta: 0.0142,
          longitudeDelta: 0.0231,
        }}
        style={styles.mapView}
        rotateEnabled={false}
        scrollEnabled={true}
        zoomEnabled={true}
        showsPointsOfInterest={false}
        showBuildings={false}
        onMapReady={this._mapReady}
      >
        { this.state.places.map(place => (
          <MapView.Marker
          
            ref={mark => place.mark = mark}
            title={place.title}
            description={place.description}
            
            key={place.id}
            coordinate={{
              latitude: place.latitude,
              longitude: place.longitude,
            }}
          />
        ))}
      </MapView>
      <ScrollView
        style={styles.placesContainer}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={(e) => {
          const place = (e.nativeEvent.contentOffset.x > 0)
            ? e.nativeEvent.contentOffset.x / Dimensions.get('window').width
            : 0;

          const { latitude, longitude, mark } = this.state.places[place];

          this.mapView.animateToCoordinate({
            latitude,
            longitude
          }, 500);

          setTimeout(() => {
            mark.showCallout();
          }, 500)
        }}
      >
        { this.state.places.map(place => (
          <View key={place.id} style={styles.place}>

            <Text style={styles.title}>Unidade - { place.title }</Text>
            {/*<Text style={styles.description}>{ place.description }</Text>*/}
            <Image source = {{uri:`${place.imagem}` }}  style={{width:null,height:100,flex:1}} />
          </View>
        )) }
      </ScrollView>
    </View>
  );
}
}

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
container: {
  flex: 1,
  justifyContent: 'flex-end',
  alignItems: 'flex-end'
},

mapView: {
  position: 'absolute',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
},

placesContainer: {
  width: '100%',
  maxHeight: 200,
},

place: {
  width: width - 40,
  maxHeight: 200,
  backgroundColor: '#FFF',
  marginHorizontal: 20,
  borderTopLeftRadius: 10,
  borderTopRightRadius: 10,
  padding: 20,
},

title: {
  fontWeight: 'bold',
  fontSize: 10,
  backgroundColor: 'transparent',
  alignSelf:'center'
},

description: {
  color: '#999',
  fontSize: 12,
  marginTop: 5,
},
});