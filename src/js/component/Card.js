import React from "react";
import PropTypes from "prop-types";

const Card = ({ person }) => {
	return (
		<div className="card mx-2" style={{ minWidth: "18rem" }}>
			<img src="..." className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">{person.name}</h5>
				{/* <Link to={`/single/${item.id}`} className="btn btn-primary">
					{"ver detalle"}
				</Link> */}
			</div>
		</div>
	);
};

export default Card;

Card.propTypes = {
	person: PropTypes.object
};
