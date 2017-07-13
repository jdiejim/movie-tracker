import React              from 'react';
import { shallow, mount } from 'enzyme';
import MovieCard          from './MovieCard';
import ReactDOM           from 'react-dom';
import { Provider }       from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { getImageURL } from '../../utils/constants';


describe('MovieCard', () => {
  it('should', () => {

    const movie = {
      "id": 334521,
      "title": "Free Fire",
      "overview": "A crime drama set in 1970s Boston, about a gun sale which goes wrong.",
      "releaseDate": "2017-03-31",
      "poster": "https://image.tmdb.org/t/p/w500//dbKsjUlJCIE7wYueq0K6y4EdW0A.jpg",
      "backdrop": "https://image.tmdb.org/t/p/w500//le2X3o9uopj1jMcMKFDKQ7MdBxb.jpg"
    }

    const wrapper = shallow(<MovieCard movie={movie}/>)

    expect(MovieCard({movie}).props.children.length).toEqual(2)

    console.log(wrapper.find('.movie-info')  )


    // expect(MovieCard({movie}).props.children[0].props.className).toEqual('sub-card')
    // expect(MovieCard({movie}).props.children[1].props.children).toEqual('Title')
  })

  it('should', () => {

  })
})
