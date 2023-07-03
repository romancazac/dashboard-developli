import { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPopUp, setSavedJob, setSingleJob } from '../../redux/slices/jobsSlice'
import { setAlerts } from '../../redux/slices/alertsSlice';

import { closeAlertAfterDelay } from '../../utils/alertClose';
import ButtonIcon from '../ui/ButtonIcon';

import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { CurrencyDollarIcon, DocumentTextIcon, MapPinIcon, PresentationChartBarIcon } from '@heroicons/react/20/solid';


const CardJob = ({ date, name, author, avatar, country, experience, level, requirements, salary, text, types, id, recommended }) => {
  const dispatch = useDispatch();
  const { savedJobs } = useSelector(state => state.jobs);
  const obj = { avatar, name, text, country, salary, id, date, author, experience, level, requirements, types };

  const isAdded = () => {
    return savedJobs?.some(item => item.id === id);
  };

  const onSaved = () => {

    dispatch(setSavedJob(obj));
    if (!isAdded()) {
      dispatch(setAlerts({ open: true, message: `Job ${name} saved` }));
    } else {
      dispatch(setAlerts({ open: true, message: `Job ${name} removed in saved` }));
    }

    dispatch(closeAlertAfterDelay(dispatch));
  };
  const onDetails = () => {
    dispatch(setSingleJob(obj))
    dispatch(setPopUp('information'))

  };
  const onTest = () => {
    dispatch(setSingleJob({ avatar, name }))
    dispatch(setPopUp('test'))
  }


  return (
    <TransitionGroup component={Fragment}>

      <CSSTransition classNames="card-job" timeout={300} key={id} >
        <div className={`flex flex-col  bg-white rounded-xl p-5  ${recommended ? 'flex-[0_1_calc(50%-10px)] lg:flex-[0_1_100%] ' : 'flex-[0_1_100%] mb-5'}`}>
          <div className="flex justify-between items-center mb-3">
            <span className="w-[55px] h-[55px] bg-[#F5F7FF] flex justify-center items-center overflow-hidden rounded-full">
              <img src={avatar} alt="" />
            </span>
            <div className="flex gap-4">
              <ButtonIcon
                icon="icon-heart"
                className={`w-[36px] h-[36px] ${isAdded() && 'text-green'}`}
                onClick={onSaved}
              />
              {/* <ButtonIcon icon="icon-more" className="w-[36px] h-[36px]" /> */}
            </div>
          </div>

          <h3 className="text-blackColor font-semibold mb-5">{name}</h3>
          {
            !recommended &&
            <div className="flex mb-4 gap-5 sm:hidden">
              <span className="text-xs text-[#1F8FFF] font-bold">Shopify</span>
              <span className="flex items-center gap-2 text-xs text-gray font-bold">
                <MapPinIcon className="w-4" />
                {country}
              </span>
              <span className="flex items-center gap-2 text-xs text-gray font-bold">
                <CurrencyDollarIcon className="w-4" />
                ${salary}/Month
              </span>
              <span className="flex items-center gap-2 text-xs text-gray font-bold">
                <PresentationChartBarIcon className="w-4" />
                Test required
              </span>
            </div>
          }

          <p className="mb-5 flex-[1_1_auto]">{text}</p>
          {
            !recommended &&
            <div className="flex flex-wrap gap-2 mb-5">
              <span className="text-gray px-3 py-2 bg-[#F9F9F9] rounded-xl text-xs">Fulltime</span>
              <span className="text-gray px-3 py-2 bg-[#F9F9F9] rounded-xl text-xs">Code</span>
              <span className="text-gray px-3 py-2 bg-[#F9F9F9] rounded-xl text-xs">React</span>
              <span className="text-gray px-3 py-2 bg-[#F9F9F9] rounded-xl text-xs">Js</span>
              <span className="text-gray px-3 py-2 bg-[#F9F9F9] rounded-xl text-xs">Webflow</span>
            </div>
          }

          <div className={`flex  items-center gap-3 ${recommended ? 'justify-between' : ''}`}>
            {
              recommended ?
                date
                :
                <button
                  onClick={onTest}
                  className="btn-block btn-block_green flex items-center gap-1"
                >
                  <DocumentTextIcon className="w-4" />
                  Take a test
                </button>

            }

            <button
              className="btn-block btn-block_gray"
              onClick={onDetails}
            >
              Detail Information
            </button>
          </div>
        </div>
      </CSSTransition>

    </TransitionGroup>
  );
};

export default CardJob;
