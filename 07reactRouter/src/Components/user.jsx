import React from "react";
import { useParams } from "react-router";

export default function User() {
	const params = useParams();


	return <div className='text-white'>{params.userid} </div>;
}
