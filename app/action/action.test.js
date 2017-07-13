import * as actions from './index';
import * as key from '../utils/constants';

describe('Action', () => {

  it('01: should create goToMovie', () => {
    const expected = {
      type: key.GOTO_MOVIE,
      id: 1
    }

    expect(actions.goToMovie(1)).toEqual(expected)
  })

  it('02: should create movieFetchSuccess', () => {
    const movies = [{title: 'spider guy'}, {title: 'bat dude'}]
    const expected = {type: key.MOVIES_FETCH_SUCCESS, movies}

    expect(actions.movieFetchSuccess(movies)).toEqual(expected)
  })

  it('03: should create moviesAreLoading', () => {
    const expected = {type: key.MOVIES_ARE_LOADING, isLoading: true}

    expect(actions.moviesAreLoading(true)).toEqual(expected)
  })

  it('04: should create logIn', () => {
    const body = {name: 'bat dude'}
    const expected = {type: 'LOG_IN', body}

    expect(actions.logIn(body)).toEqual(expected)
  })

  it('05: should create signUp', () => {
    const body = {name: 'spider guy', email: 'spiderguy2011@imadummy.com', password: 'supercool'}
    const expected = {type: 'SIGN_UP', body}

    expect(actions.signUp(body)).toEqual(expected)
  })

  it('06: should create userIsLoading', () => {
    const body = {name: 'spider guy', email: 'spiderguy2011@imadummy.com', password: 'supercool'}

    expect(actions.userIsLoading(true)).toEqual({type: 'USER_IS_LOADING', userLoading: true})
  })

  it('07: should create userLogInFail', () => {
    const expected = {type: 'USER_LOGIN_FAIL', userFail: false}

    expect(actions.userLogInFail(false)).toEqual(expected)
  })

})
