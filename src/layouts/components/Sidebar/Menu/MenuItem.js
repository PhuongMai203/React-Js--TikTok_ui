import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ title, to, icon, activeIcon, onClick }) {
    const handleClick = (event) => {
        if (onClick) {
            event.preventDefault(); // Ngăn chặn điều hướng mặc định nếu có onClick
            onClick(event);
        }
    };

    return (
        <NavLink className={(nav) => cx('menu-item', { active: nav.isActive })} to={to} onClick={handleClick}>
            <span className={cx('icon')}>{icon}</span>
            <span className={cx('active-icon')}>{activeIcon}</span>
            <span className={cx('title')}>{title}</span>
        </NavLink>
    );
}

MenuItem.propTypes = {
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
    activeIcon: PropTypes.node.isRequired,
    onClick: PropTypes.func,
};

export default MenuItem;
