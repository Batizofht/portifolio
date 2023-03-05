import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
const Hero = () => {
    const[loop, isLopp] = useState(0);
    const [isverlydeleting, setIsveryde] = useState(false);
    const[Text, setText] = useState("");
    const [delta, SetDe] = useState(300 -Math.random() * 100);
    const [index, setIndex] = useState(1);

    //
    const[visi, setVisible] = useState(true)
    ///


    const period = 500 ;
    const rotate = ["Web Developer", "Mobile Developer", "AI Developer(TensorFlow)","Web Developer", "Mobile Developer", "AI Developer(TensorFlow)","Web Developer", "Mobile Developer", "AI Developer(TensorFlow)","Web Developer", "Mobile Developer", "AI Developer(TensorFlow)","Web Developer", "Mobile Developer", "AI Developer(TensorFlow)"];
    useEffect(()=>{
        const tickle = setInterval(()=>{
               tick();
          },delta)
          return () => { clearInterval(tickle); }
        },[Text])
    const tick = () =>{
        let i = loop & rotate.length;
        const fullText = rotate[i];
        let updatedText = isverlydeleting ? fullText.substring(0, Text.length - 1) : fullText.substring(0, Text.length + 1);
        setText(updatedText);

    if (isverlydeleting) {
        SetDe(prevDelta => prevDelta);
    }

    if (!isverlydeleting && updatedText === fullText) {
        setIsveryde(true);
      setIndex(prevIndex => prevIndex - 1);
      SetDe(period);
    } else if (isverlydeleting && updatedText === '') {
        setIsveryde(false);
      isLopp(loop + 1);
      setIndex(1);
      SetDe(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
    }
    useEffect(()=>{
      const goway = setInterval(()=>{
        setVisible((prevVisible) => !prevVisible);
      },500)
      return () => {clearInterval(goway)}
    },[])
  return (
    <div className='Hero'>
          <div className="container col-xxl-8 px-4 py-5">
    <div className="row  flex-lg-row-reverse align-items-center g-5 py-5">
      <div className="col-10 col-sm-8 col-lg-6">
        <div className='Images'>
        <img src="https://switchiify.com/u/classes/profile/logogo.jpg" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
        </div>
      </div>
      <div className="col-lg-6 TEXTX" >
       
        <h1 className="display-5 fw-bold lh-1 mb-3 iman"> I'am: <br /><span className='fs-3'>{Text}{visi && <i style={{marginLeft: -20,}} class="bi bi-cursor-text"></i>}</span> </h1>
        
        <p className="lead">Mushizimana Jean Baptiste. This is my official page that represents who I am.</p>
        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
         <Link className='links'>PROJECTS</Link>
         <Link className='links'>SKILLS</Link>
         <Link className='links'>SWITCHIIFY</Link>
        </div>
      </div>
    </div>
  </div>

    </div>
  )
}

export default Hero