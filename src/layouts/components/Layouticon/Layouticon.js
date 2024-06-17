import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames/bind';
import Header from '~/layouts/components/Header';
import Sidebar from '~/layouts/components/Sidebar';
import styles from './Layouticon.module.scss';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('backgrout')}>
            <div className={cx('wrapper')}>
                <Header />
                <div className={cx('container')}>
                    <Sidebar />
                    <div className={cx('content')}>{children}</div>
                </div>
            </div>
        </div>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DefaultLayout;