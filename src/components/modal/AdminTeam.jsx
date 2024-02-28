import { useState } from 'react';

const Equipo = ({ nombre, logo }) => (
	<div className='w-full mt-10 bg-secondary px-[20px] py-4 rounded-2xl flex justify-between'>
		<div className='flex items-center gap-[10px]'>
			<img src={logo} alt={`Logo de ${nombre}`} />
			<p className=' font-SourceSansPro text-[20px] leading-[29.208px]'>
				{nombre}
			</p>
		</div>

		<div className='flex gap-7'>
			<button>
				<img src='images/addPlayerIcon.png' alt=' Add Player Icon' />
			</button>
			<button>
				<img src='images/deletePlayerIcon.png' alt=' Delete Player Icon' />
			</button>
		</div>
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
		<form
			className='flex flex-col justify-center mt-8 px-[30px]'
			onSubmit={handleSubmit}
		>
			<h2 className=' font-Roboto font-bold text-[22px] leading-[26.4px]'>
				Nuevo Equipo
			</h2>
			<div className='flex flex-col-reverse gap-3 mt-[39px]'>
				<input
					className='w-full  bg-secondary h-[60px] rounded-2xl placeholder:font-SourceSansPro placeholder:text-neutral pl-[36.28px] focus:placeholder:text-neutral focus:placeholder:font-SourceSansPro'
					type='text'
					placeholder='Nombre del equipo'
					value={nombre}
					onChange={e => setNombre(e.target.value)}
					required
				/>

				<div className='flex justify-center w-full'>
					<input
						accept='image/*'
						className='sr-only'
						id='team-logo'
						type='file'
					/>
					<label
						className='flex flex-col items-center cursor-pointer'
						htmlFor='team-logo'
					>
						<img src='images/addTeamLogo.png' alt='Add Team Image' />
					</label>
				</div>
			</div>
			<button
				className=' bg-accent w-[260px] py-3 rounded-2xl mt-[37px] mx-auto'
				type='submit'
			>
				Crear Equipo
			</button>
		</form>
	);
};

const EquiposList = ({ equipos }) => (
	<div className=' px-[30px]'>
		<h2 className=' font-Roboto font-bold text-[22px] leading-[26.4px]'>
			Equipos creados
		</h2>
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

			<hr className='border-[#545458] mt-[17px]' />

			<div className=' px-[30px] mt-8'>
				<h2 className=' font-Roboto font-bold text-[32px] leading-[38.4px]'>
					Administrar Equipos
				</h2>
			</div>

			<EquipoForm onSubmit={handleEquipoSubmit} />
			<hr className='border-[#545458] mt-[66px] mb-[47.5px]' />
			<EquiposList equipos={equipos} />
		</section>
	);
}
