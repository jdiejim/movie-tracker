import { connect } from 'react-redux';
import Carousel from '../../components/Carousel/Carousel';

const mapStateToProps = ({ movies }) => ({ movies });

export default connect(mapStateToProps, null)(Carousel);
