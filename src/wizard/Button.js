import React from 'react';

export const Button = ( { cls, position, title, handle } ) => {

		const className = `${ cls } ${ position }`;
		return (
				<input className={ className }
				       value={ title }
				       type={ 'submit' }
				       onClick={ handle } />
		);
};

Button.propTypes = {};