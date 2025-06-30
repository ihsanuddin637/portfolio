import React from 'react';
import Marquee from 'react-fast-marquee';

const Skill = () => {
    return (
        <div className='flex flex-wrap justify-center items-center'>
            <h1 className="text-center text-5xl">Skill</h1>
            <Marquee pauseOnHover speed={50} gradient={false}>
            <img className='w-24 h-24 mx-[20px]' src="/Skill_Logo/react-1-logo-png-transparent.png" alt="" />
            <img className='w-24 h-24 mx-[20px]' src="/Skill_Logo/tailwindcss-logotype.5d127e1d767d06efa2b03fe4de5f3d84.svg" alt="" />
            <img className='w-24 h-24 mx-[20px]' src="/Skill_Logo/firebase-1-logo-png-transparent.png" alt="" />
            <img className='w-40 h-24 mx-[20px]' src="/Skill_Logo/nodejs-logo-png-transparent.png" alt="" />
            <img className='w-40 h-24 mx-[20px]' src="/Skill_Logo/mongodb-logo-png-transparent.png" alt="" />
            <img className='w-40 h-24 mx-[20px]' src="/Skill_Logo/express-js-seeklogo.png" alt="" />
            </Marquee>
        </div>
    );
};

export default Skill;