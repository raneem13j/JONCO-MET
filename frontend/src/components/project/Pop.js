import { useEffect, useState } from "react";

const Modal = ({showModal, setShowModal, title, modalimg }) => {
  
  const [index, setIndex] = useState(0)
 

  useEffect(() => {
    const handleKeyDown = (event) => {
      console.log(modalimg)
      if (event.keyCode === 27) {
        close();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const next = () =>{
    if(index === modalimg.length - 1){
      setIndex(0)
    }else{
      setIndex(index + 1)
    }
  }
  const prev = () => {
     console.log([index])
    if(index === 0){
      setIndex(modalimg.length - 1)
    }else{
      setIndex(index - 1)
    }
  }
  const close = () => {
    setShowModal(prev => !prev );
    
  };

  return (
<div className={`modal ${showModal ? '' : 'closed'}`}>
      <div className="modal-content">
        <span onClick={close} className="close">&times;</span>
        <span className="next" onClick={next}> &#10094; </span>
        <span className="prev" onClick={prev}> &#10095; </span>
        {showModal ?  <div> <img className='modal-img' src={`../../assets/Images/Projects/${modalimg[index]}`}/>   
          <h3>{title}</h3> 
        </div> : null }  
      </div>
    </div>
  );
};

export default Modal;