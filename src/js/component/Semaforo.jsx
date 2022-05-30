// import { func } from 'prop-types';
import React from "react";
import { useState } from "react";
import "../../styles/Semaforo.css";

const Semaforo = () => {
	const [claseRojo, setClaseRojo] = useState("luz-semaforo");
	const [claseAmbar, setClaseAmbar] = useState("luz-semaforo");
	const [claseVerde, setClaseVerde] = useState("luz-semaforo");

	const cambiarClase = (e) => {
		console.log(e.target.className);
		if (e.target.className.includes("luz-roja")) {
			claseRojo === "luz-semaforo"
				? setClaseRojo("luz-semaforo semaforo-iluminado-rojo")
				: setClaseRojo("luz-semaforo");
			// if(claseAmbar.classLis)
		} else if (e.target.className.includes("luz-ambar")) {
			claseAmbar === "luz-semaforo"
				? setClaseAmbar("luz-semaforo semaforo-iluminado-ambar")
				: setClaseAmbar("luz-semaforo");
		} else if (e.target.className.includes("luz-verde")) {
			claseVerde === "luz-semaforo"
				? setClaseVerde("luz-semaforo semaforo-iluminado-verde")
				: setClaseVerde("luz-semaforo");
		}
	};

	return (
		<div className="container-semaforo">
			<div
				onClick={cambiarClase}
				className={`luz-roja ${claseRojo}`}></div>
			<div
				onClick={cambiarClase}
				className={`luz-ambar ${claseAmbar}`}></div>
			<div
				onClick={cambiarClase}
				className={`luz-verde ${claseVerde}`}></div>
		</div>
	);
};

export default Semaforo;
