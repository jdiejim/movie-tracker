import React              from 'react';
import { shallow, mount } from 'enzyme';
import MovieCard          from './MovieCard';
import ReactDOM           from 'react-dom';
import { Provider }       from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { getImageURL } from '../../utils/constants';


describe('MovieCard', () => {
  const movie = {
    movie_id: 315635,
    title: "Spider-Man",
    overview: "Following the events of Captain America...",
    release_date: "2017-07-05",
    poster_path: "/ApYhuwBWzl29Oxe9JJsgL7qILbD.jpg",
    backdrop_path: "/tPpYGm2mVecue7Bk3gNVoSPA5qn.jpg",
    vote_average: 7.4,
  }

  it('should render the correct components when it mounts', () => {
    const wrapper = shallow(<MovieCard movie={movie} user={{ user: { id: 1 }}} />);

    expect(wrapper.find('.movie-card').length).toBe(1);
  });

  it('should render the correct title and overview of movie', () => {
    const wrapper = shallow(<MovieCard movie={movie} user={{ user: { id: 1 }}} />);
    const title = wrapper.find('h1').props().children;
    const overview = wrapper.find('p').props().children;

    expect(title).toBe('Spider-Man');
    expect(overview).toBe('Following the events of Captain America...');
  });

  it('should render the correct poster of movie', () => {
    const wrapper = shallow(<MovieCard movie={movie} user={{ user: { id: 1 }}} />);
    const expected = 'url(https://image.tmdb.org/t/p/w500//ApYhuwBWzl29Oxe9JJsgL7qILbD.jpg)';
    const poster = wrapper.find('.sub-card').props().style.backgroundImage;

    expect(poster).toBe(expected);
  });

  it('should trigger function on button click', () => {
    const mockFn = jest.fn();
    const wrapper = shallow(<MovieCard movie={movie} user={{ user: { id: 1 }}} postFavorite={mockFn} />);
    const save = wrapper.find('.save-btn');

    save.simulate('click');

    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});
