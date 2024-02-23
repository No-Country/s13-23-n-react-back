import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import IconUser from './componentHeader/IconUser';

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};
	const handleModalContainerClick = e => e.stopPropagation();


	return (
		<nav className='bg-primary text-white p-4 flex justify-between items-center sticky top-0 z-10 h-[90px]'>
			{/* Menú hamburguesa */}
			<div className='flex items-center'>
				<div className='sm:hidden '>
					<button
						onClick={toggleMenu}
						className='text-white focus:outline-none'
					>
						<FiMenu className='h-6 w-10' />
					</button>
					{/* Menú hamburguesa desplegable */}
					{isOpen && (
						<div
							onClick={toggleMenu}
							className='absolute top-0 left-0 w-full h-screen bg-black bg-opacity-50 z-50 flex justify-start items-center '
						>
							<div
								onClick={handleModalContainerClick}
								className='absolute top-[90px] bg-secondary text-white w-1/2 h-[423px]   '
							>
								<ul className='text-white font-Roboto flex flex-col items-start pt-[47px]  '>
									<li className='flex items-center hover:bg-neutral/20 w-full pl-[30px] h-[47px]'>
										<a>Inicio</a>
									</li>
									<li className='flex items-center hover:bg-neutral/20 w-full pl-[30px] h-[47px] '>
										Resultados 
									</li>
									<li className='flex items-center hover:bg-neutral/20 w-full pl-[30px] h-[47px] '>
										Torneos 
									</li>
									<li className='flex items-center hover:bg-neutral/20 w-full pl-[30px] h-[47px] '>
										Partidos
									</li>
									<li className='flex items-center hover:bg-neutral/20 w-full pl-[30px] h-[47px]'>
										Equipo
									</li>
								</ul>
							</div>
						</div>
					)}
				</div>

				{/* Logo */}
				<div className='flex items-center justify-center sm:justify-start w-64'>
					<img
						src='/images/logo-hori-2.png'
						alt='Logo'
						className='h-14 sm:h-16 ml-10 '
					/>
				</div>
			</div>

			{/* Menú de navegación para pantallas grandes */}
			<div className='hidden sm:flex space-x-4'>
				<a href='#' className='hover:text-neutral/20'>
					Inicio
				</a>
				<a href='#' className='hover:text-neutral/20'>
					Torneos 
				</a>
				<a href='#' className='hover:text-neutral/20'>
					Resultados 
				</a>
				<a href='#' className='hover:text-neutral/20'>
					Partidos
				</a>
				<a href='#' className='hover:text-neutral/20'>
					Equipo
				</a>
			</div>
			{/* Icono de usuario y menú desplegable */}
			<IconUser/>			
		</nav>
	);
};

export default Navbar;
