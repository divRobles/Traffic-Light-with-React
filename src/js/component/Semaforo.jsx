// import { func } from 'prop-types';
import React from "react";
import { useState } from "react";
import "../../styles/Semaforo.css";

const Semaforo = () => {
	const [claseRojo, setClaseRojo] = useState("luz-semaforo");
	const [claseAmbar, setClaseAmbar] = useState("luz-semaforo");
	const [claseVerde, setClaseVerde] = useState(
		"luz-semaforo semaforo-iluminado-verde"
	);

	const cambiarClase = (e) => {
		const sistemaLuces = (clase, set, set2, set3, claseSemaforo) => {
			clase === "luz-semaforo"
				? set(`luz-semaforo ${claseSemaforo}`)
				: set(`luz-semaforo ${claseSemaforo}`);

			set2("luz-semaforo");
			set3("luz-semaforo");
		};

		if (e.target.className.includes("luz-roja")) {
			sistemaLuces(
				claseRojo,
				setClaseRojo,
				setClaseAmbar,
				setClaseVerde,
				"semaforo-iluminado-rojo"
			);
		} else if (e.target.className.includes("luz-ambar")) {
			sistemaLuces(
				claseAmbar,
				setClaseAmbar,
				setClaseRojo,
				setClaseVerde,
				`semaforo-iluminado-ambar`
			);
		} else if (e.target.className.includes("luz-verde")) {
			sistemaLuces(
				claseVerde,
				setClaseVerde,
				setClaseRojo,
				setClaseAmbar,
				`semaforo-iluminado-verde`
			);
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
