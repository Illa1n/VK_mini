import React from 'react';
import PropTypes from 'prop-types';
import '../Origin.css'
import'./UserMenu.css'

import kolokol from './Userimg/kolokol.png'
import arhiv from './Userimg/arhiv.png'
import chat from './Userimg/chat.png'
import kalendar from './Userimg/kalendar.png'
import shop from './Userimg/shop.png'
import profil from './Userimg/profil.png'
import home from './Userimg/home.png'
import zadachi from './Userimg/zadachi.png'

import { Panel, Group } from '@vkontakte/vkui';

const UserMenu = ({ id, go }) => (
	<Panel id={id}>

	    <Group className='ads'>
		    <section className='UserMenuSection'>
                <div className='UserMenuWhiteDiv-1'>
                    <header className='UserHeader'>
                        <div className='UserHeader-div1'>
                            <p className='OsnUserMenu'>Основное меню</p>
                            <img onClick={go} data-to='home' src={kolokol}/>
                        </div>
                        <div>
                            <button>Моя статистика</button>
                        </div>
                    </header>
                    <section className='UserMain'>
                        <div className='UserMain-div'>
                            <div className='UserMain-secdiv'><img src={arhiv}></img>Архив задач</div>
                            <div className='UserMain-secdiv'><img src={kalendar}></img>Календарь задач</div>
                        </div>

                        <div className='UserMain-div'>
                            <div className='UserMain-secdiv'><img src=  {shop}></img>Магазин</div>
                            <div className='UserMain-secdiv'><img src=  {chat}></img>Чат</div>
                        </div>
                    </section>
                    <div>
                        <button className='Katbtn'>Каталог наставников</button>
                    </div>
                </div>

                <div className='UserMenuWhiteDiv-2'>
                    <div className='UserMain-secdiv2'><img src={profil}></img>Профиль</div>
                    <div className='UserMain-secdiv2'><img src={home}></img>Меню</div>
                    <div className='UserMain-secdiv2'><img src={zadachi}></img>Мои задачи</div>
                </div>
		    </section>
	    </Group>
	</Panel>
);


export default UserMenu;


