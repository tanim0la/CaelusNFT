import './App.css';
import {motion} from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import images from './images'

function App() {

  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);
  return (
    <div className="App">
      <h1>匚卂乇ㄥㄩ丂</h1>
      <motion.div ref={carousel} className="carousel" whileTap={{ cursor: "grabbing"}}>
          <motion.div 
              drag="x" 
              dragConstraints={{ right:0, left: -width }} 
              className="inner-carousel">
              {images.map(image => {
                  return(
                    <motion.div className="item" key={image}>
                        <img src={image} alt="" />
                    </motion.div>
                  );
              })}
          </motion.div>
      </motion.div>

      <h3> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- 𝓡𝓮𝓿𝓢𝓱𝓮𝓵𝓵#4941</h3>
    </div>
  );
}

export default App;
