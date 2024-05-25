import classNames from 'classnames/bind';
import styles from './video.module.scss';
import video1 from '~/Videos/a.mp4';
import video2 from '~/Videos/video-1.mp4';
const cx = classNames.bind(styles);
function Myvideos() {
    return (
        <div className={cx('inner')}>
            <video src={video1} controls className={cx('video')} />
            <video src={video2} controls className={cx('video')} />
            <video src={video1} controls className={cx('video')} />
            <video src={video2} controls className={cx('video')} />
        </div>
    );
}

export default Myvideos;
