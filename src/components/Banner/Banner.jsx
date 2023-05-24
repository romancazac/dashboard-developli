import React from 'react';
import cactus from '../../assets/img/img-baner.png'
function Banner() {
    return (
        <div className='relative rounded-xl bg-[#BDD9F5] bg-bgBanner bg-no-repeat bg-cover px-12 py-20 mb-8'>
            <div className="w-[55%]">
                <h2 className='text-xl font-bold mb-5 text-blackColor'>Get your personal growth plan</h2>
                <p className='mb-7 font-semibold'>Here can be any information or stats</p>
                <a href="#" className="btn-block btn-block_gray ">Read more</a>
            </div>
            <img src={cactus} alt="catus"  className='absolute bottom-0 right-0 w-[45%] h-[108%] object-cover object-bottom xl:object-contain'/>
        </div>
    );
}

export default Banner;