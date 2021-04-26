<template>
  <div class="home">
    <p>{{location.data.aqi}}</p>
  </div>
</template>

<script>
// @ is an alias to /src
import LocationService from '@/services/LocationService.js'

export default {
  name: 'Home',
  components: {
    
  },

  data(){
    return {
      location: []
    }
  },

  created() {
    LocationService.getLocation()
      .then(response => {
        this.location = response.data
      })
  }
}
</script>
