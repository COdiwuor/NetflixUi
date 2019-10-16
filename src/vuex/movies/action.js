import axios from 'axios';
import router from '../../router';
import {movies_url} from '../url'

export default{
    viewAllMovies(context){
        axios.get('https://springbootapi.herokuapp.com/movies')
        .then((response) => {
            console.log(response)
            context.commit('GET_ALL_MOVIES', response);
        }).catch((error) => {
            console.log("The error is " + error);
        });
    }
}