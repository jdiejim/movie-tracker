import { GOTO_MOVIE } from '../utils/constants';

export const goToMovie = (id) => {
  return {type: GOTO_MOVIE, id}
}
