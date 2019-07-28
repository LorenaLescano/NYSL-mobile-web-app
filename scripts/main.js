var app = new Vue({
  el: '#app',
  data: {
    games: data.matches,
    locations: data.locations,
    matchId: "",
    menu: 'home',
  },
    
  methods: {
      gameDetails: function(id){
          this.matchId = id
          this.menu = 'game-detail'
      }    
    },
    
  components: {
        loc:{
            props: ['location'],
            template: '<iframe :src="location"></iframe>'
        }   
    }
});// fin Vue