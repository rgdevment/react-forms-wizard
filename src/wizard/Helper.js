export const getNavStyles = ( index, length, error ) => {
		let styles = [];
		for ( let i = 0; i < length; i++ ) {
				if ( i < index ) {
						styles.push( 'done' );
				} else if ( i === index ) {
						styles.push( 'doing' );
				} else {
						styles.push( 'todo' );
				}
		}
		return styles;
};