import React from 'react';

const Rank = ({ name, entries }) => {
	return (
		<div>
			<div className="white f3">
				{`${name}, tu posicion actual en el conteo de imágenes es...`}
			</div>
			<div className="white f1">
				{entries}
			</div>
		</div>
	);
}

export default Rank;