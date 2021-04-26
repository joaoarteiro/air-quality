import axios from 'axios'

const apiClient = new axios.create({
    baseURL: 'https://api.waqi.info/feed',
    params: {
        token: 'myToken'
    }
    
})

export default {
    getLocation() {
        return apiClient.get('/lisbon/')
    }
}