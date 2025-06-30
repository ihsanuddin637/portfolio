import React from 'react';
import Marquee from 'react-fast-marquee';

const Skill = () => {
    return (
        <div className='flex flex-wrap justify-center items-center'>
            <h1 className="text-center text-5xl">Skill</h1>
            <Marquee pauseOnHover speed={50} gradient={false}>
            <img className='w-24 h-24 mx-[20px]' src="/assets/Skill_Logo/react.png" alt="" />
            <img className='w-24 h-24 mx-[20px]' src="/assets/Skill_Logo/tailwindcss-logotype.5d127e1d767d06efa2b03fe4de5f3d84.svg" alt="" />
            <img className='w-24 h-24 mx-[20px]' src="/assets/Skill_Logo/firebase.png" alt="" />
            <img className='w-40 h-24 mx-[20px]' src="/assets/Skill_Logo/nodejs.png" alt="" />
            <img className='w-40 h-24 mx-[20px]' src="/assets/Skill_Logo/mongodb.png" alt="" />
            <img className='w-40 h-24 mx-[20px]' src="/assets/Skill_Logo/express.png" alt="" />
            </Marquee>
        </div>
    );
};

export default Skill;