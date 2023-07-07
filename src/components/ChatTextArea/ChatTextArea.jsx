import { useEffect, useState } from 'react'
import { PaperAirplaneIcon } from '@heroicons/react/20/solid'
import axios from 'axios';
import { BASE_URL } from '../../constants';
import { useSelector } from 'react-redux';
export const ChatTextArea = ({ setMessages }) => {
  const { messages } = useSelector(state => state.chat)
  const [message, setMessage] = useState('');
  const { user } = useSelector(state => state.auth)
  const [isPolling, setIsPolling] = useState(false);

  const longPolling = async () => {

    try {
      const response = await fetch(`${BASE_URL}/messages`);
      const data = await response.json();
      setMessages(data);
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };

  useEffect(() => {
    const pollInterval = setInterval(() => {
      if (isPolling) {
        longPolling();
      }
    }, 5000); // Intervalul de 5 secunde pentru a simula cererile periodice

    return () => {
      clearInterval(pollInterval);
    };
  }, []);

  const sendMessage = async () => {
    try {
      const newMessage = {
        idUser: user.id,
        message: message,
        time: new Date().toISOString()
      };
     
      await axios.patch(`${BASE_URL}/messages/${messages.idn}`, {
        ...messages,
        chats: [newMessage, ...messages.chats]
      });
      setMessage('');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className='flex items-center bg-white rounded-xl p-1 sticky bottom-5'>
      <textarea value={message} onChange={(e) => setMessage(e.target.value)} name="message" placeholder='Type your message here...' className='w-full outline-none p-2 resize-none' />
      <button onClick={sendMessage} className='rounded-xl h-[52px] w-[52px] flex items-center justify-center bg-green text-white'>
        <PaperAirplaneIcon className='w-5' />
      </button>
    </div>
  )
}
