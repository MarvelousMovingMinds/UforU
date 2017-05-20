import Header from './Header.jsx';
import Footer from './Footer.jsx';

const Container = (props) => {
  return (
    <div>
      <Header handleFav={props.route.handleFav} />
      {props.children}
      <Footer />
    </div>
  );
};

export default Container;
