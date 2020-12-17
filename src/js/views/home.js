import React, { useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import Card from "../component/Card";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="text-center mt-5 d-flex flex-column align-items-center">
			<div className="d-flex w-100 text-center m-4">
				<h2 className="display-4 w-100 text-center">{"Characters"}</h2>
			</div>
			<div className="card-holder d-flex justify-content-start col-10">
				{store.people.map((person, index) => {
					return <Card key={person.url} person={person} />;
				})}
			</div>
		</div>
	);
};
