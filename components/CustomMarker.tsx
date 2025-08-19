import React from 'react'
import { View } from './Themed'
import { MonoText } from './StyledText'
import { Marker } from 'react-native-maps'

const CustomMarker = ({ apartment }) => {
  const priceText = `$${apartment.price}`;
  const markerWidth = Math.max(50, priceText.length * 8 + 16);
  
  return (
    <Marker
      coordinate={{
        latitude: apartment.latitude,
        longitude: apartment.longitude
      }}
      title={apartment.title}
      description={apartment.description}
    >
      <View
        style={{
          backgroundColor: 'white',
          paddingHorizontal: 8,
          paddingVertical: 4,
          borderWidth: 1,
          borderColor: 'gray',
          borderRadius: 10,
          alignItems: 'center',
          justifyContent: 'center',
          width: markerWidth,
          height: 24,
        }}
      >
        <MonoText 
          className='font-bold'
          style={{
            fontSize: 12,
            textAlign: 'center',
          }}
        >
          {priceText}
        </MonoText>
      </View>
    </Marker>
  )
}

export default CustomMarker