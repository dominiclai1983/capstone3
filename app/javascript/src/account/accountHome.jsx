import React from 'react';
import { CartState } from '@src/context';

const AccountHome = () => {
	const { username } = CartState();
	return <div>AccountHome {username}</div>;
};

export default AccountHome;
