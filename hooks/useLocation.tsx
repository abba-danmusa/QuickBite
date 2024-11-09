import {useEffect, useState} from "react"
import { requestForegroundPermissionsAsync, watchPositionAsync, Accuracy } from 'expo-location'

export default (shouldTrack, callback) => {

  const [err, setErr] = useState(null)

  useEffect(()=> {

    let subscriber
    const startWatching = async() => {
      try {
        await requestForegroundPermissionsAsync()
        subscriber = await watchPositionAsync(
          {
            accuracy: Accuracy.BestForNavigation,
            timeInterval: 1000,
            distanceInterval: 10
          },
          callback
        )
        
      } catch (error) {
        setErr('Please give permission to track your location')
      }
    }

    if (shouldTrack) {
      startWatching()
    } else {
      if (subscriber) {
        subscriber.remove()
      }
      setSubscriber = null
    }
    
    return () => {
      if (subscriber) {
        subscriber.remove()
      }
    }
  }, [shouldTrack, callback])

  return [err]
}