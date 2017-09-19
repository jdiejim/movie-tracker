import React              from 'react';
import { shallow, mount } from 'enzyme';
import Carousel           from './Carousel';
import { movies }         from './carousel_movie_studs';

describe('Carousel', () => {
  it('should render the correct components when it mounts', () => {
    const location = { pathname: '/' }
    const wrapper = mount(<Carousel movies={[]} location={location} />);

    expect(wrapper.find('.carousel').length).toBe(1);
  });

  it('should render the correct movie', () => {
    const location = { pathname: '/' }
    const wrapper = mount(<Carousel movies={[]} location={location} />);
    const expectedPoster = 'url(https://image.tmdb.org/t/p/w500//tPpYGm2mVecue7Bk3gNVoSPA5qn.jpg)'

    wrapper.setProps({ movies });

    const title = wrapper.find('.carousel-title').props().children[0];
    const year = wrapper.find('.carousel-year').props().children[1];
    const poster = wrapper.find('.backdrop-poster').props().style.backgroundImage;

    expect(title).toBe('Spider-Man: Homecoming');
    expect(year).toBe('2017');
    expect(poster).toBe(expectedPoster);
  });

  it('should have a default state', () => {
    const location = { pathname: '/' }
    const wrapper = mount(<Carousel movies={[]} location={location} />);
    const { carouselHistory, position, carouselAnimation } = wrapper.state();
    const result = { carouselHistory, position, carouselAnimation };
    const expected = {
      carouselHistory: [],
      position: 0,
      carouselAnimation: ''
    };

    expect(result).toEqual(expected);
  });

  it('should change position state if button clicked', () => {
    const location = { pathname: '/' }
    const wrapper = mount(<Carousel movies={[]} location={location} />);

    wrapper.setProps({ movies });

    const selector = wrapper.find('#selector-2');

    expect(wrapper.state('position')).toBe(0);

    selector.simulate('click');

    expect(wrapper.state('position')).toBe(1);
  });

  it('should render new poster when position state changes', () => {
    const location = { pathname: '/' }
    const wrapper = mount(<Carousel movies={[]} location={location} />);

    wrapper.setProps({ movies });

    const { position: pos1 } = wrapper.state('position');
    const expected = wrapper.state('carouselHistory');
    const result1 = wrapper.state('carouselHistory')[0];

    const selector = wrapper.find('#selector-2');

    expect(wrapper.state('position')).toBe(0);
    expect(result1).toEqual(expected[0]);

    selector.simulate('click');

    const { position: pos2 } = wrapper.state('position');
    const result2 = wrapper.state('carouselHistory')[1];

    expect(result2).toEqual(expected[1]);
  });
});
