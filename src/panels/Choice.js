import React from 'react';
import PropTypes from 'prop-types';
import './Choice.css'
import '../Origin.css'

import { Panel, Group } from '@vkontakte/vkui';

const Choice = ({ id, go }) => (
	<Panel id={id}>

	    <Group className='ads'>
		    <section className='OriginSection'>
                <div className='OriginWhiteDiv'>
			        <div className='Choice-buttons'>
                        <p>Вы</p>
				        <button onClick={go} data-to="usermenu"> Пользователь </button>
                        <p>Или</p>
                        <button onClick={go} data-to="mentormenu"> Наставник </button>
			        </div>
                </div>
		    </section>
	    </Group>
	</Panel>
);


export default Choice;