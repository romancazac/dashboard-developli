import React from 'react';
import avatar from '../../assets/img/avatar.png'
import ButtonIcon from '../ui/ButtonIcon';
import { CurrencyDollarIcon, DocumentTextIcon, MapIcon, MapPinIcon, PresentationChartBarIcon } from '@heroicons/react/20/solid';
const CardJob = () => {
    return (
        <div className='flex-[0_1_100%] bg-white rounded-xl p-5 mb-5'>
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
            <div className="flex mb-4 gap-5">
                <span className='text-xs text-[#1F8FFF]  font-bold'>Shopify</span>
                <span className='flex items-center gap-2 text-xs text-gray font-bold'>
                    <MapPinIcon className='w-4' />
                    United Arab Emirates
                </span>
                <span className='flex items-center gap-2 text-xs text-gray font-bold'>
                    <CurrencyDollarIcon className='w-4' />
                    $25,000/Month
                </span>
                <span className='flex items-center gap-2 text-xs text-gray font-bold'>
                    <PresentationChartBarIcon className='w-4' />
                    Test required
                </span>
            </div>
            <p className="mb-5">We are looking for a dynamic UI/UX Designer & leader to join our team. We are building guest-experience & online check-in for hotels...</p>
            <div className="flex flex-wrap gap-2 mb-5">
                <span className="text-gray px-3 py-2 bg-[#F9F9F9] rounded-xl text-xs">Fulltime</span>
                <span className="text-gray px-3 py-2 bg-[#F9F9F9] rounded-xl text-xs">Code</span>
                <span className="text-gray px-3 py-2 bg-[#F9F9F9] rounded-xl text-xs">React</span>
                <span className="text-gray px-3 py-2 bg-[#F9F9F9] rounded-xl text-xs">Js</span>
                <span className="text-gray px-3 py-2 bg-[#F9F9F9] rounded-xl text-xs">Webflow</span>
            </div>
            <div className="flex gap-3">

                <button className='btn-block btn-block_green flex items-center gap-1'>
                    <DocumentTextIcon className='w-4'/>
                    Take a test
                </button>
                <button className='btn-block btn-block_gray'>Detail Information</button>
            </div>

        </div>
    );
};

export default CardJob;