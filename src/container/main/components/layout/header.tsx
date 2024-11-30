import React from 'react';
import { Link } from 'react-router-dom';
import { getNavigationsValue } from '@brojs/cli';

const navigations: Array<{ name: string; href: string }> = [
    {
        name: 'Главная',
        href: getNavigationsValue('sber_web.main')
    },
    {
        name: 'Детальная информация',
        href: getNavigationsValue('sber_web.detail')
    },

    {
        name: 'Редактировать',
        href: getNavigationsValue('sber_web.edit')
    }
];

const Header = (): React.ReactElement => {
    return (
        <header>
            <ul>
                {navigations.map((item) => {
                    return (
                        <li key={item.name}>
                            <Link to={item.href}>{item.name}</Link>
                        </li>
                    );
                })}
            </ul>
        </header>
    );
};

export default Header;