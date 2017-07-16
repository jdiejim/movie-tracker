import { signUp,
         logIn,
         userIsLoading,
         userLogInFail,
         addFavoriteSuccess,
         moviesAreLoading,
         favoritesFetchSuccess,
         deleteFavoriteSuccess,
         movieFetchSuccess,
         detailFetchSuccess,
         detailLoading,
       } from '../action';
import Movie from './Movie'
import { getNowPlaying, getMovieDetail, getCast } from '../utils/constants'

export default class FetchCalls {
  fetchMovies() {
    return (dispatch) => {
      dispatch(moviesAreLoading(true))

      fetch(getNowPlaying(1))
      .then(res => {
        dispatch(moviesAreLoading(false))
        return res;
      })
      .then(res => res.json())
      .then(({ results }) => {
        const movies = results.map( movie => new Movie(movie))
        return dispatch(movieFetchSuccess(movies))
      });
    }
  }

  fetchMovieDetail(id){
    return (dispatch) => {
      dispatch(detailLoading(true))
      fetch(getMovieDetail(id))
        .then(res => {
          dispatch(detailLoading(false))
          return res;
        })
        .then(res => res.json())
        .then(data => this.fetchCast(data))
        .then(movieDetail => {
          console.log(movieDetail);
          return dispatch(detailFetchSuccess(movieDetail))
        })
        .catch(err => console.log(err))
    }
  }

  fetchCast(movieDetail) {
    const { id } = movieDetail;
    console.log(movieDetail);
    return fetch(getCast(id))
      .then(res => res.json())
      .then(data => Object.assign({}, movieDetail, {cast: data}))
      .catch(err => console.log('err at cast'))
  }


  createUser(body) {
    return (dispatch) => {
      dispatch(userIsLoading(true));

      fetch('/api/users/new', {
        method: 'POST',
        body,
        headers: { 'Content-Type': 'application/json' }
      })
      .then(res => {
        dispatch(userIsLoading(false))
        return res;
      })
      .then(res => res.json())
      .then(data => dispatch(signUp(data)))
      .catch(err => dispatch(userLogInFail(true)));
    }
  }

  logInUser(body) {
    return (dispatch) => {
      dispatch(userIsLoading(true));

      fetch('/api/users', {
        method: 'POST',
        body,
        headers: { 'Content-Type': 'application/json' }
      })
      .then(res => {
        dispatch(userIsLoading(false))

        return res;
      })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        return dispatch(logIn(data))
      })
      .catch(err => dispatch(userLogInFail(true)))
    }
  }

  addFavorite(movie, user_id) {
    return (dispatch) => {
      dispatch(userIsLoading(true))


      fetch('/api/users/favorites/new', {
        method: 'POST',
        body: JSON.stringify(Object.assign({}, movie, {user_id})),
        headers: {'Content-Type': 'application/json'},
      })
      .then(res => {
        dispatch(userIsLoading(false))
        return res;
      })
      .then(res => res.json())
      .then(msg => {
        console.log(movie)
        dispatch(addFavoriteSuccess(movie))
      })
      .catch(err => console.log(err))
    }
  }

  fetchFavorites(id) {
    return (dispatch) => {
      dispatch(moviesAreLoading(true))

      fetch(`/api/users/${id}/favorites`)
      .then(res => {
        dispatch(moviesAreLoading(false))
        return res;
      })
      .then(res => res.json())
      .then(({ data }) => {
        const movies = data.map( movie => new Movie(movie))
        return dispatch(favoritesFetchSuccess(movies))
      });
    }
  }

  deleteFavorite(movie_id, user_id) {
    return (dispatch) => {
      dispatch(userIsLoading(true))

      fetch(`/api/users/${user_id}/favorites/${movie_id}`, {
        method: 'DELETE',
      })
      .then(res => {
        dispatch(userIsLoading(false))
        return res;
      })
      .then(res => res.json())
      .then(msg => dispatch(deleteFavoriteSuccess(movie_id)))
      .catch(err => console.log(err))
    }
  }
}
