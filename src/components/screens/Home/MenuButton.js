import './MenuButton.css';
import React from 'react';
import {Link} from 'react-router-dom';

const MenuButton = props => <Link to={props.link} className="menu-btn">{props.label}</Link>;

export default MenuButton;