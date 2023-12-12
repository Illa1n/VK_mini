import React from 'react';
import PropTypes from 'prop-types';
import './UserMenu.css'
import "../Origin.css"

import kolokol from './Userimg/kolokol.png'
import chat from './Mentorimg/chat.png'
import menu from './Mentorimg/menu.png'
import opit from './Mentorimg/opit.png'
import profil from './Mentorimg/profil.png'
import shop from './Mentorimg/shop.png'
import statuser from './Mentorimg/statuser.png'
import statwork from './Mentorimg/statwork.png'

import { Panel, Group } from '@vkontakte/vkui';

const MentorMenu = ({ id, go }) => (
	<Panel id={id}>

	    <Group className='ads'>
		    <section className='UserMenuSection'>
                <div className='UserMenuWhiteDiv-1'>
                    <header className='UserHeader'>
                        <div className='UserHeader-div1'>
                            <p className='OsnUserMenu'>Основное меню</p>
                            <img src={kolokol}/>
                        </div>
                        <div>
                            <button className='katusers'>Каталог пользователей</button>
                        </div>
                    </header>

                    <section className='UserMain'>
                        <div className='UserMain-div'>
                            <div className='UserMain-secdiv'><img src={opit}></img>Опыт</div>
                            <div className='UserMain-secdiv'><img src={statuser}></img>Статистика пользователя</div>
                        </div>

                        <div className='UserMain-div'>
                            <div className='UserMain-secdiv'><img src={statwork}></img>Статистика работы</div>
                            <div className='UserMain-secdiv'><img src={shop}></img>Магазин</div>
                        </div>
                    </section>
                </div>

                <div className='UserMenuWhiteDiv-2'>
                    <div className='UserMain-secdiv2'><img src={profil}></img>Профиль</div>
                    <div className='UserMain-secdiv2'><img src={menu}></img>Меню</div>
                    <div className='UserMain-secdiv2'><img src={chat}></img>Чат</div>
                </div>
		    </section>
	    </Group>
		
	</Panel>
);


export default MentorMenu;