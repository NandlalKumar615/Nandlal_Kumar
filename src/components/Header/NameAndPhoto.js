import './NameAndPhoto.scss';

import NanlalPhoto from '../../Images/Nandlal_Kumar.jpg'

const NameAndPhoto = () =>{
    return(
        <div className='name_and_photo'>
            <h1 className='name_and_photo-name'>Nandlal Kumar</h1>
            <img src={NanlalPhoto} alt="Nandlal Kumar" />
        </div>
    );
}

export default NameAndPhoto;