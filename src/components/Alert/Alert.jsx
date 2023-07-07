
import { useSelector } from 'react-redux';
import { Transition } from 'react-transition-group';

export const Alert = () => {
   const { message, open } = useSelector(state => state.alerts)
   const duration = 300;
   const defaultStyle = {
      transition:`opacity ${duration}ms ease-in-out`,
      opacity:0
   }
   const transitionStyles = {
      entering: { opacity: 1 },
      entered:  { opacity: 1 },
      exiting:  { opacity: 0 },
      exited:  { opacity: 0 },
    };
      return (
         <Transition in={open} timeout={duration} unmountOnExit>
            {
               state => (
                  <div 
                  className='fixed bottom-3 right-3 btn-block btn-block_green z-[10000]'
                  style={{
                     ...defaultStyle,
                     ...transitionStyles[state]
                  }}
                  >{message}</div>

               )
            }

         </Transition>

      )
  


}
