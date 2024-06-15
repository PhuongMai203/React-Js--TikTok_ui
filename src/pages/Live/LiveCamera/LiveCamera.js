import React, { useState, useRef } from 'react';
import classNames from 'classnames/bind';
import styles from './LiveCamera.module.scss';
import Menu, { MenuItem } from '~/layouts/components/Sidebar/Menu/index';
import { LiveIcon, LiveActiveIcon } from '~/components/Icons';
import config from '~/config';

const cx = classNames.bind(styles);

const LiveCamera = ({ style }) => {
    const [isCameraActive, setIsCameraActive] = useState(false);
    const videoRef = useRef(null);

    const startCamera = async (event) => {
        event.preventDefault(); // Ngăn chặn hành vi mặc định
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            if (videoRef.current) {
                videoRef.current.srcObject = stream;
                setIsCameraActive(true); // Hiển thị video khi camera được truy cập
            }
        } catch (error) {
            console.error('Error accessing camera: ', error);
        }
    };

    return (
        <div className={cx('backrought-cmr')} style={style}>
            {!isCameraActive && (
                <Menu className={cx('menu')}>
                    <MenuItem
                        title="Bắt đầu Live"
                        to={config.routes.live}
                        icon={<LiveIcon />}
                        activeIcon={<LiveActiveIcon />}
                        onClick={startCamera}
                    />
                </Menu>
            )}
            <video ref={videoRef} className={cx('video', { active: isCameraActive })} autoPlay></video>
        </div>
    );
};

export default LiveCamera;
