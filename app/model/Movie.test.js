import Movie from './Movie';
// import { getImageURL } from '../utils/constants';

describe('Movie', () => {
  it('should', () => {
    const expected = {"backdrop": "https://image.tmdb.org/t/p/w500/undefined",
                      "id": undefined,
                      "overview": undefined,
                      "poster": "https://image.tmdb.org/t/p/w500/undefined",
                      "releaseDate": undefined,
                      "title": undefined
                     }

    expect(new Movie({expected})).toEqual(expected)
  })
})
