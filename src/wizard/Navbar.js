import React from 'react';

export const Navbar = ( props ) => {

		const { index, handle, component, styles } = props;


		return (
				<li
						className={ 'navbarProgress-' + styles[index] }
						onClick={ handle }
						value={ index }>
						<em>{ index + 1 }</em>
						<span>{ component.name }</span>
				</li>
		);

};