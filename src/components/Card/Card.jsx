import React from 'react';
import avatar from '../../assets/img/avatar.png'
import ButtonIcon from '../ui/ButtonIcon';
const Card = () => {
    return (
        <div className='flex-[0_1_calc(50%-10px)] bg-white rounded-xl p-5'>
            <div className="flex justify-between items-center mb-3">
                <span className='w-[55px] h-[55px] bg-[#F5F7FF] flex justify-center items-center overflow-hidden rounded-full'>
                    <img src={avatar} alt="" />
                </span>
                <div className="flex gap-4">
                    <ButtonIcon
                        icon="icon-heart"
                        className="w-[36px] h-[36px]"
                      
                    />
                     <ButtonIcon
                        icon="icon-more"
                        className="w-[36px] h-[36px]"
                        
                    />
                    
                </div>
            </div>
               
                <h3 className="text-blackColor font-semibold mb-5">UI / UX Designer</h3>
                <p className="mb-5">We are looking for a dynamic UI/UX Designer & leader to join our team. We are building guest-experience & online check-in for hotels...</p>
                <div className="flex justify-between">
                    <span className='font-medium'>2 days ago</span>
                    <button className='btn-block btn-block_green'>Detail Information</button>
                </div>
            
        </div>
    );
};

export default Card;