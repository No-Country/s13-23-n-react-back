import React, { useState } from 'react';

const Equipo = ({ nombre, logo }) => (
	<div className='equipo'>
		<img src={logo} alt={`Logo de ${nombre}`} />
		<p>{nombre}</p>
	</div>
);

const EquipoForm = ({ onSubmit }) => {
	const [nombre, setNombre] = useState('');
	const [logo, setLogo] = useState('');

	const handleSubmit = e => {
		e.preventDefault();
		onSubmit({ nombre, logo });
		setNombre('');
		setLogo('');
	};

	return (
		<form onSubmit={handleSubmit}>
			<h2>Nuevo Equipo</h2>
			<input
				type='text'
				placeholder='Nombre del equipo'
				value={nombre}
				onChange={e => setNombre(e.target.value)}
				required
			/>
			<input
				type='url'
				placeholder='URL del logo'
				value={logo}
				onChange={e => setLogo(e.target.value)}
				required
			/>
			<button type='submit'>Crear Equipo</button>
		</form>
	);
};

const EquiposList = ({ equipos }) => (
	<div>
		<h2>Equipos creados</h2>
		<div className='equipos-list'>
			{equipos.map((equipo, index) => (
				<Equipo key={index} nombre={equipo.nombre} logo={equipo.logo} />
			))}
		</div>
	</div>
);

export default function AdminTeam() {
	const [equipos, setEquipos] = useState([]);

	const handleEquipoSubmit = equipo => {
		setEquipos([...equipos, equipo]);
	};

	return (
		<section className=' py-[117px] text-base-100'>
			<div className='flex items-center justify-center gap-[11px]'>
				<img src='images/copa.png' alt='' />
				<h1 className='text-xl font-semibold font-Roboto'>Copa Las Condes</h1>
			</div>

			<h2>Administrar Equipos</h2>
			<EquipoForm onSubmit={handleEquipoSubmit} />
			<EquiposList equipos={equipos} />
		</section>
	);
}
