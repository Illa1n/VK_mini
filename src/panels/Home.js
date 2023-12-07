import React from 'react';
import PropTypes from 'prop-types';
import "./Home.css";
import Lazyk from '../img/Lazyk.png'

import { Panel, Header, Group, Cell, Avatar } from '@vkontakte/vkui';

const Home = ({ id, go, fetchedUser }) => (
	<Panel id={id}>

	<Group className='ads'>
		<section className='BeginSection'>
			<div className='BeginWhiteDiv'>
				<h1> Добро пожаловать!</h1>
				<button> Начать </button>
				<img className='Lazyk' src={Lazyk} alt='Lazyk'></img>
			</div>
			
		</section>
	</Group>
		
	</Panel>
);

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Home;
