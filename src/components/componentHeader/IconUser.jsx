import React, { useState } from 'react'
import { FiUser } from 'react-icons/fi';
import { FaUserLarge } from 'react-icons/fa6';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { RxExit } from 'react-icons/rx';
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '../../redux/featuresSlice/modalSlice';
import { closeSesion } from '../../redux/featuresSlice/registerSlice';
import { Link } from 'react-router-dom';

const IconUser = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const dispatch = useDispatch();
    const isRegister = useSelector((state) => state.isRegister.isRegister);
    const userData = useSelector((state) => state.userData.userData);

    const toggleDropdown = () => {
		setIsDropdownOpen(!isDropdownOpen);
	};
    const handleModalContainerClick = e => e.stopPropagation();

    const handleOpenModal = () => {
		dispatch(openModal());
	};
    

    
  return (
    
			<>
            <button
                onClick={isRegister?toggleDropdown:handleOpenModal}
                className='w-[35px] flex'
            >                
                <FaUserLarge
						className={`${isRegister?'text-accent':'text-base-100'} `}
					/>
					{isRegister&&<MdKeyboardArrowDown
						className={` ${isDropdownOpen ? 'rotate-180' : 'rotate-0'} transition-all duration-300 ml-2 text-accent`}
					/>}
            </button>
            {/* Dropdown para el menú de usuario */}
            { isDropdownOpen && isRegister && (
                <div className='w-full h-screen absolute top-0 left-0 bg-black/75'
                    onClick={toggleDropdown}>
                   <div className='absolute right-0 top-[90px]  w-[50%] bg-secondary  shadow-lg'
                    onClick={handleModalContainerClick}>
                    <ul className='h-[376px]'>
                    <div className=' w-full  h-[47px]'  >   
            </div>
            <hr className='border-[#545458]'/>
                        <li className='pl-[15px] h-[47px] flex items-center hover:bg-neutral/20'>
                        <FiUser className='h-[20px] w-[20px] mr-[13px]' /><Link to={'/Perfil'}>Perfil</Link>
                        </li>
                        <li className='pl-[48px] h-[47px] flex items-center hover:bg-neutral/20'>
                            <a href='#'>Actividad</a>
                        </li>
                        <li className='pl-[48px] h-[47px] flex items-center hover:bg-neutral/20'>
                            <a href='#'>Torneos</a>
                        </li>
                        <li className='pl-[48px] h-[47px] flex items-center hover:bg-neutral/20'>
                            <a href='#'>Jugador</a>
                        </li>
                        <li className='pl-[48px] h-[47px] flex items-center hover:bg-neutral/20'>
                            <a href='#'>Resultados</a>
                        </li>      
                    </ul>
                    <hr className='border-[#545458]'/>
                    <button onClick={()=>dispatch(closeSesion())} className='text-warning pl-[25px] h-[47px] flex items-center w-full'>
                           <RxExit className='w-[15px] h-[15px] mr-[7px]' /> <div >Cerrar Sesión</div>
                        </button>
                </div> 
                </div>
                
            )}
        </>
  )
}

export default IconUser