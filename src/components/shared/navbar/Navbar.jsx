import React from 'react';
import Container from '../Container';
import Logo from './Logo';
import Search from './Search';
import MenuDropdown from './MenuDropdown';

const Navbar = () => {
    return (
        <div className='fixed w-full bg-[#fff5f7]'>
           <div className='mt-6 py-4'>
            <Container>
                <div className='flex flex-row items-center justify-between gap-3 md:gap-0'>
                    <Logo />
                    <Search />
                    <MenuDropdown />
                </div>
            </Container>
           </div> 
        </div>
    );
};

export default Navbar;