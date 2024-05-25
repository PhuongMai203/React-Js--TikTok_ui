import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from '~/pages/Home/Home.module.scss';

const cx = classNames.bind(styles);

export default function LightSwitch({ handleclickheart, heartColor }) {
    return (
        <div className={cx('icon-container')}>
            <button className={cx('love')} onClick={handleclickheart}>
                <FontAwesomeIcon icon={faHeart} style={{ color: heartColor }} />
            </button>
        </div>
    );
}
