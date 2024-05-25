import classNames from 'classnames/bind';
import styles from './Following.module.scss';
import FollowingPreviews from './FollowingPreview/FollowingPreviews';
import Video from '~/Videos/Video/Video.js';
import YourComponent from '~/pages/Home/Icon/Link.js';

const cx = classNames.bind(styles);
function Following() {
    return (
        <div>
            <div className={cx('item')}>
                <FollowingPreviews />
                <FollowingPreviews />
                <FollowingPreviews />
                <FollowingPreviews />
            </div>

            <Video />
            <YourComponent />
        </div>
    );
}

export default Following;
