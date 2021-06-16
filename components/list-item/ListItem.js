import React from "react";

const ListItem = ({ id, title }) => {
	return (
		<div className="d-flex justify-content-between ">
			<p>{title}</p>
			<div>
				<button className="btn btn-outline-primary">
					<i className="bi bi-eye" />
				</button>
				<button className="btn btn-outline-primary">
					<i className="bi bi-pencil" />
				</button>
				<button className="btn btn-outline-primary">
					<i className="bi bi-trash" />
				</button>
			</div>
		</div>
	);
};

export default ListItem;
