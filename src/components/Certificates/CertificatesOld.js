import React, { useEffect, useRef, useState } from "react";

import './CertificatesOld.scss';

import C1 from '../../Images/C1.jpg';
import C2 from '../../Images/C2.jpg';
import C3 from '../../Images/C3.jpg';
import C4 from '../../Images/C4.jpg';
import C5 from '../../Images/C5.jpg';

import { gsap } from 'gsap';
import { Flip } from 'gsap/Flip';
gsap.registerPlugin(Flip);



const Certificates = () => {
    
   
useEffect(()=>{
    let certificatesArray = document.querySelectorAll('figure');
    let bigCertificate = certificatesArray[0];

    certificatesArray.forEach((certificate) => {
        // const imagePart = certificate.querySelector('img')
        certificate.addEventListener('click',() => changeGrid(certificate))
    })

    const changeGrid=(certificate)=>{

        let state = Flip.getState(".certificates-Each")
        const imageBig= bigCertificate.querySelector('img');
        const imageSmall = certificate.querySelector('img');
        // bigCertificate.innerHtml ="";
        // smallCertificateContainer.appendChild(bigCertificate);
        // const tempDiv = document.createElement('div');
        // tempDiv.appendChild(imageFound)
        // bigCertificate.appendChild(imageFound2);
        // certificate.appendChild(tempDiv.firstChild);

        bigCertificate.appendChild(imageSmall);
        certificate.appendChild(imageBig);
        
            Flip.from(state, {
                duration:10,
                ease:"power1.out"
        })

        // const imageFound2 = bigCertificate.querySelector('img')[0];
        // let state2 = Flip.getState(imageFound2)
        //     certificate.appendChild(imageFound2);
        //     // smallCertificateContainer.appendChild(bigCertificate);
        //     Flip.from(state, {
        //         duration:1,
        //         ease:"power1.out"
        // })

    //     const bImageFound = bigCertificate.querySelector('img');
    //    bigCertificate.replaceChild(imageFound,bImageFound);
    // //    certificate.replaceChild(bImageFound,imageFound);

    }
},[])

    return (
        <div className="certificates">
            <h2 className="certificates-Title">Certificates</h2>
            <div className="certificates-All">
                <figure className="certificates-Box_1" data-grid="img1" >
                    <img className="certificates-Each" src={C1} alt="C1" />
                </figure>
                <div className="certificates-Other">
                    <figure className="certificates-Box_2" data-grid="img2">
                        <img className="certificates-Each" src={C2} alt="C2"/>
                    </figure>
                    <figure className="certificates-Box_3" data-grid="img3">
                        <img className="certificates-Each" src={C3} alt="C3"/>
                    </figure>
                    <figure className="certificates-Box_4" data-grid="img4">
                        <img className="certificates-Each" src={C4} alt="C4"/>
                    </figure>
                    <figure className="certificates-Box_5" data-grid="img5">
                        <img className="certificates-Each" src={C5} alt="C5"/>
                    </figure>
                </div>
            </div>

        </div>
    )
}

export default Certificates;



























// const Certificates = () => {
    
//     // const [box1,setBox1] = useState (C1);
//     // const [box2,setBox2] = useState (C2);
//     // const [box3,setBox3] = useState (C3);
//     // const [box4,setBox4] = useState (C4);
//     // const [box5,setBox5] = useState (C5);
    
//     // const [box2Clicked,setbox1Clicked] = useState(false);
    
//     // let mainBox = document.querySelector(".certificates-Box_1");

//     // const animateCertificate = useRef(null);

//     // useEffect(() => {
//     //     const el = animateCertificate.current;
//     //     let state = Flip.getState(el);
//     //     if(box2Clicked){
//     //         setBox1(C2)
//     //         setBox2(box1)
//     //     }
//     //     Flip.from(state, {duration: 1, ease: "power1.out"}) 
//     // },[box2Clicked])

//     // const selectBox2 =()=>{
//     //     setBox1(C2)
//     //     setBox2(box1)
//     // }
//     // const selectBox3 =()=>{
//     //     setBox1(C3)
//     //     setBox3(box1)
//     // }
//     // const selectBox4 =()=>{
//     //     setBox1(C4)
//     //     setBox4(box1)
//     // }
//     // const selectBox5 =()=>{
//     //     setBox1(C5)
//     //     setBox5(box1)
//     // }



    


//     const img1 = <img className="certificates-Each" src={C1} alt="C1"/>;
//     const img2 = <img className="certificates-Each" src={C2} alt="C2"/>;
//     const img3 = <img className="certificates-Each" src={C3} alt="C3"/>;
//     const img4 = <img className="certificates-Each" src={C4} alt="C4"/>;
//     const img5 = <img className="certificates-Each" src={C5} alt="C5"/>;

//     const [imgArray,setImgArray] = useState([img1,img2,img3,img4,img5]);

//     // const bigCertificateContainer = useRef(null);
//     // const smallCertificateContainer = useRef(null);
//     // const bigCertificate = useRef(null);
//     // const smallCertificate = useRef(null);
    
//     useEffect(()=>{
//         const bigCertificateContainer = document.querySelector(".certificates-Box_1")
//         const smallCertificateContainer2 = document.querySelector(".certificates-Box_2")
//         const smallCertificateContainer3 = document.querySelector(".certificates-Box_3")
//         const smallCertificateContainer4 = document.querySelector(".certificates-Box_4")
//         const smallCertificateContainer5 = document.querySelector(".certificates-Box_5")


//         const bigCertificate = document.querySelector(".certificates-Image_1")
//         const smallCertificate = document.querySelector(".certificates-Image_2")

        
        
//         const smallCertificate1Clicked = () =>{
//             let state = Flip.getState(".certificates-Each")
//             bigCertificateContainer.appendChild(smallCertificate);
//             smallCertificateContainer.appendChild(bigCertificate);
//             Flip.from(state, {
//                 duration:1,
//                 ease:"power1.out"
//             })
//         }
//         smallCertificateContainer.addEventListener('click',smallCertificate1Clicked);
        
//     })


//     return (
//         <div className="certificates">
//             <h2 className="certificates-Title">Certificates</h2>
//             <div className="certificates-All">
//                 <div className="certificates-Box_1" >
//                     <img className="certificates-Each certificates-Image_1" src={C1} alt="C1" />
//                 </div>
//                 <div className="certificates-Other">
//                     <div className="certificates-Box_2" >
//                     <img className="certificates-Each certificates-Image_2" src={C2} alt="C2"/>
//                     </div>
//                     <div className="certificates-Box_3">
//                    {imgArray[2]}
//                     </div>
//                     <div className="certificates-Box_4">
//                    {imgArray[3]}
//                     </div>
//                     <div className="certificates-Box_5">
//                    {imgArray[4]}
//                     </div>
//                 </div>
//             </div>

//         </div>
//     )
// }

// export default Certificates;