import React from "react";
import Link from "next/link";
import deletePost from "../../context/deletePost";

const ListItem = ({ id, title }) => {
	const handleDeletePost = async id => {
		await deletePost(id);
		alert("post eliminado");
		try {
		} catch (error) {
			throw new Error(error);
		}
	};

	return (
		<div className="d-flex justify-content-between align-items-center shadow-sm py-2 px-4">
			<p className="flex-grow-1 m-0">{title}</p>
			<Link href={`post/${id}`}>
				<button className="btn btn-outline-primary ms-3">
					<i className="bi bi-eye" />
				</button>
			</Link>
			<Link href={`post/edit/${id}`}>
				<button className="btn btn-outline-primary ms-3">
					<i className="bi bi-pencil" />
				</button>
			</Link>
			<button
				onClick={() => handleDeletePost(id)}
				className="btn btn-outline-primary ms-3">
				<i className="bi bi-trash" />
			</button>
		</div>
	);
};

export default ListItem;
