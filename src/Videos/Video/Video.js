import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments, faFlag, faHeart, faShare } from '@fortawesome/free-solid-svg-icons';
import video1 from '~/Videos/a.mp4';
import styles from './Video.module.scss';
const cx = classNames.bind(styles);
function Video() {
    const [heartColor, setHeartColor] = useState('initial');
    const [shareColor, setShareColor] = useState('initial');
    const [heartClicks, setHeartClicks] = useState(0);
    const [shareClicks, setShareClicks] = useState(0);

    function handleClickHeart() {
        setHeartColor((prevColor) => (prevColor === 'initial' ? 'red' : 'initial'));
        setHeartClicks((prevClicks) => (prevClicks % 2 === 0 ? prevClicks + 1 : prevClicks - 1));
    }

    function handleClickShare() {
        setShareColor((prevColor) => (prevColor === 'initial' ? 'red' : 'initial'));
        setShareClicks((prevClicks) => (prevClicks % 2 === 0 ? prevClicks + 1 : prevClicks - 1));
    }
    return (
        <div>
            <div className={cx('inner')}>
                <video src={video1} controls style={{ width: 320, alignItems: 'center' }} />

                <div className={cx('interaction')}>

                <button className={cx('love')} onClick={handleClickHeart}>
                        <FontAwesomeIcon icon={faHeart} style={{ color: heartColor }} />
                    </button>
                    <p className={cx('more-interaction')}>{heartClicks}</p>

                    <button className={cx('comment')}>
                        <FontAwesomeIcon icon={faComments} />
                    </button>
                    <p className={cx('more-interaction')}>6</p>
                    <button className={cx('flag')}>
                        <FontAwesomeIcon icon={faFlag} />
                    </button>

                    <button className={cx('share')} onClick={handleClickShare}>
                        <FontAwesomeIcon icon={faShare} style={{ color: shareColor }} />
                    </button>
                    <p className={cx('more-interaction')}>{shareClicks}</p>
                </div>
            </div>
        </div>
    );
}

export default Video;
