import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './AdminNavbar';

const AdminIndex = () => {
return (
	<>
	<Nav>
		<Bars />

		<NavMenu>
		<NavLink to='/AdminPg' activeStyle>
			Home
		</NavLink>
		<NavLink to='/AdminProduct' activeStyle>
			Products
		</NavLink>
		<NavLink to='/AdminCustomer' activeStyle>
			Customer
		</NavLink>
		{/* Second Nav */}
		{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
		</NavMenu>
	</Nav>
	</>
);
};

export default AdminIndex;
