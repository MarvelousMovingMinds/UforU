import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, DefaultRoute, IndexLink } from 'react-router';
const Header = (props) => {
  return (
    <nav className="navbar navbar-inverse">
      <div className="container-fluid">
        <div className="navbar-header">
          <a href={global.window.location.origin} className="navbar-brand">UforU</a>
        </div>
        <div className="navbar-right navbar-brand">
          <Link to={`favorites`} className="favCols" activeClassName="active">Favorite Universities</Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
