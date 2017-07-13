import { userReducer, userFailReducer } from './userReducer';
import * as action from '../../action';

describe('userReducer',  () => {

  it('01: should return initial state', () => {

    expect(userReducer(undefined, {})).toEqual({})
  })

  it('02: should return state with a new user on signUp', () => {
    const state = {}
    const body = {user: {name: "bat dude" , email: "superbatdude69@mail.com"}}
    const actionResult = action.signUp(body)
    const expected = {name: "bat dude" , email: "superbatdude69@mail.com"}

    expect(userReducer(state, actionResult)).toEqual(expected)
  })

  it('03: should return state with a new user on logIn', () => {
    const state = {}
    const body = {user: {name: "bat dude" , email: "superbatdude69@mail.com"}}
    const actionResult = action.logIn(body)
    const expected = {name: "bat dude" , email: "superbatdude69@mail.com"}

    expect(userReducer(state, actionResult)).toEqual(expected)
  })
})

describe('userFailReducer', () => {
  it('01: should return false as initial state', () => {
    expect(userFailReducer(undefined, {})).toBe(false)
  })

  it('02: should return true if user log in fails', () => {
    const actionResult = action.userLogInFail(true)

    expect(userFailReducer(false, actionResult)).toBe(true)
  })

  it('03: should return false if the action doesnt match', () => {
    const actionResult = action.signUp({})

    expect(userFailReducer(true, actionResult)).toBe(false)
  })
})
