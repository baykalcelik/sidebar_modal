import { FaTimes } from 'react-icons/fa';
import './modal.css';


export default function Modal(props){


    return(
        <div className='modalCover'>
            <div className='modalPanel'>
                <span className='micover'>
                    <FaTimes className='modalClose' onClick={()=>{
                        props.setModalgoster(false);
                    }}/>
                </span>
                
                <p className='modalText'>Modal Content</p>
            </div>
        </div>
    )
}