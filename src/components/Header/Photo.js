import './Photo.scss';

import NanlalPhoto from '../../Images/Nandlal_Kumar.jpg'

const Photo = () =>{
    return(
        <div className='myPhoto'>
            <img src={NanlalPhoto} alt="Nandlal Kumar" />
        </div>
    );
}

export default Photo;