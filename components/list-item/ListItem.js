import React from "react";

const ListItem = ({ id, title }) => {
	return (
		<div className="d-flex justify-content-between align-items-center shadow-sm py-2 px-4">
			<p className="flex-grow-1 m-0">{title}</p>
			<button className="btn btn-outline-primary ms-3">
				<i className="bi bi-eye" />
			</button>
			<button className="btn btn-outline-primary ms-3">
				<i className="bi bi-pencil" />
			</button>
			<button className="btn btn-outline-primary ms-3">
				<i className="bi bi-trash" />
			</button>
		</div>
	);
};

export default ListItem;
