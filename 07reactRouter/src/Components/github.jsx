import React from "react";
import { useState, useEffect } from "react";

export default function Github() {
	const [name, setname] = useState("heyswayam");
	const [inputValue, setinputValue] = useState(name);
	const [username, setusername] = useState("");
	const [avatar, setAvatar] = useState("");
	useEffect(() => {
		fetch(`https://api.github.com/users/${name}`)
			.then((res) => res.json())
			.then((res) => {
				console.log(res);
				setusername(res.login);
				setAvatar(res.avatar_url);
				return res;
			});
	}, [name]);

	return (
		<div>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					setname(inputValue);
				}}
			>
				<textarea
					onChange={(e) => {
						setinputValue(e.target.value);
					}}
					value={inputValue}
					name='getName'
					id='getName'
					cols='30'
					rows='10'
					className='border-2 border-spacing-3 border-gray-500'
				></textarea>
				<button
					className=''
					type='submit'
					onClick={() => {
						setname(inputValue);
					}}
				>
					Submit
				</button>
			</form>
			<div>Name: {username}</div>
			<img src={avatar} alt='' srcSet='' />
		</div>
	);
}
