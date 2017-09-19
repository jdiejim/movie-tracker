import Movie from './Movie';
import { getImageURL } from '../utils/constants';

describe('Movie', () => {
  it('should return a new', () => {
    const expected = { "backdrop": undefined,
                       "id": undefined,
                       "overview": undefined,
                       "poster": undefined,
                       "releaseDate": undefined,
                       "title": undefined,
                       "vote_average": undefined}

    expect(new Movie({expected})).toEqual(expected)
    expect(typeof new Movie({expected})).toEqual('object')
  })
})
