import React from 'react';
import { Link } from 'react-router-dom';
import { Main } from './styles';

const Header = () => (
  <Main>
    <Link to="/">Gazin Tech </Link>
    <div>
      <Link to="/">Desenvolvedores </Link>
      <Link to="/level">Níveis </Link>
    </div>
  </Main>
);

export default Header;
