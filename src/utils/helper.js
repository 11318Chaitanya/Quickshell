import { BiRadioCircle } from 'react-icons/bi';
import { LuMoreHorizontal } from 'react-icons/lu';
import { TbProgress } from 'react-icons/tb';
import { IoCheckmarkDoneCircle } from 'react-icons/io5';
import { AiFillCloseCircle, AiFillWarning } from 'react-icons/ai';
import { BiSignal2, BiSignal3, BiSignal4 } from 'react-icons/bi';
import Todo from '../assets/icons/todo.svg';
import Backlog from '../assets/icons/backlog.svg';
import Cancelled from '../assets/icons/cancelled.svg';
import InProgress from '../assets/icons/in-progress.svg';
import Done from '../assets/icons/Done.svg'; 
import NoPriority from '../assets/icons/noPriority.svg';
import LowPriority from '../assets/icons/lowPriority.svg';
import MediumPriority from '../assets/icons/mediumPriority.svg';
import HighPriority from '../assets/icons/highPriority.svg';
import UrgentPriority from '../assets/icons/urgentPriorityColor.svg';

export const getPriorityIcon = (priority) => {
    switch (priority) {
        case "No priority": return <img src={NoPriority} alt="" />
        case "Low": return <img src={LowPriority} alt="" />
        case "Medium": return <img src={MediumPriority} alt="" />
        case "High": return <img src={HighPriority} alt="" />
        case "Urgent": return <img src={UrgentPriority} alt="" />
        default: return <img src={NoPriority} alt="" />
    }
}

export const getStatusIcon = (priority) => {
    switch (priority) {
        case "Backlog": return <img src={Backlog} alt="" />
        case "Todo": return <img src={Todo} alt="" />
        case "In progress": return <img src={InProgress} alt="" />
        case "Done": return <img src={Done} alt="" />
        case "Canceled": return <img src={Cancelled} alt="" />
        default: return <AiFillCloseCircle color='#94a2b3' size={16} />
    }
}