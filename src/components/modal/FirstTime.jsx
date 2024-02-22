import React from 'react';

export default function firstTime() {
	return (
		<section className=' pt-[152px] bg-primary px-[60px] pb-[174px]'>
			<div className=' flex justify-center'>
				<img className='' src='/images/logo-vert 1.png' alt='First Time Logo' />
			</div>

			<div className='mt-[68px]'>
				<h2 className=' font-Roboto text-[32px] font-bold leading-[38.4px] text-accent'>
					¿Nuevo Aquí?
				</h2>
				<p className=' text-[#9E9E9E] mt-[30px] font-SourceSansPro leading-[19.2px]'>
					Sumate a un equipo o crea un torneo y accede a la diversion
				</p>
			</div>

			<div className=' mt-[48px] flex items-center gap-[13px]'>
				<button className=' bg-[#2648D1] font-SourceSansPro font-semibold text-base-100 w-[148px] h-[43px] rounded-2xl'>
					Crear Torneo
				</button>
				<button className=' bg-accent w-[155px] h-[43px] rounded-2xl font-SourceSansPro font-semibold text-base-100'>
					Unirme a un equipo
				</button>
			</div>
		</section>
	);
}
