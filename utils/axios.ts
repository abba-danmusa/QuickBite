import axios from 'axios'
// import AsyncStorage from '@react-native-async-storage/async-storage'

const instance = axios.create({
  baseURL: process.env.EXPO_PUBLIC_QUICK_BITE_API_BASE_URL
})

instance.interceptors.request.use(
  async (config) => {
    // const token = await AsyncStorage.getItem('token')
    let token = null
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (err) => {
    console.log(err)
    return Promise.reject(err)
  }
)

export default instance