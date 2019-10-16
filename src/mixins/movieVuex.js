export default {
    computed: {
        allMovies(){
            return this.$store.state.MoviesStore.allmovies;
        }
    }
}