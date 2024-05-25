import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import Button from '~/components/Button';
import styles from './AccountPreview.module.scss';

const cx = classNames.bind(styles);

function AccountPreview({ avatarSize, showFollowButton, showHeart }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <div className={cx('avatar-wrapper')}>
                    <img
                        className={cx('avatar')}
                        src="hi.jpg"
                        alt=""
                        style={{ width: avatarSize, height: avatarSize }}
                    />
                </div>
                {showFollowButton && (
                    <Button className={cx('follow-btn')} primary>
                        Follow
                    </Button>
                )}
            </div>
            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>Btpmai203</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>Phương Mai</p>

                <div className={cx('analytics')}>
                    {showHeart && (
                        <div className={cx('analytics-item')}>
                            <strong className={cx('value')}>8.2M </strong>
                            <span className={cx('label')}>Following</span>
                        </div>
                    )}
                    <div className={cx('analytics-item')}>
                        <strong className={cx('value')}>8.2M </strong>
                        <span className={cx('label')}>Followers</span>
                    </div>
                    <div className={cx('analytics-item')}>
                        <strong className={cx('value')}>8.2M </strong>
                        <span className={cx('label')}>Likes</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AccountPreview;
