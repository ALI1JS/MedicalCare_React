import { motion } from "framer-motion";
import './doctorinfoslider.css'
const Sliderinfo=()=>{
    return(
          <motion.div className="carousel">
             <motion.div drag="x" dragConstraints={{right:0}} className="inner-carousel">
                    <motion.dev className="item">
                              <p>
                              Published by Elsevier and originating from 
                              London, England, The Lancet is one of the world’s 
                              top medical journals with notably high impact. Like 
                              other influential journals, The Lancet publishes several
                              </p>
                              <h4>john deo</h4>
                              <span>patient</span>
                        
                    </motion.dev>
                    <motion.dev className="item">
                              <p>
                              Published by Elsevier and originating from 
                              London, England, The Lancet is one of the world’s 
                              top medical journals with notably high impact. Like 
                              other influential journals, The Lancet publishes several
                              </p>
                              <h4>john deo</h4>
                              <span>patient</span>
                          
                    </motion.dev>
                    <motion.dev className="item">
                              <p>
                              Published by Elsevier and originating from 
                              London, England, The Lancet is one of the world’s 
                              top medical journals with notably high impact. Like 
                              other influential journals, The Lancet publishes several
                              </p>
                              <h4>john deo</h4>
                              <span>patient</span>
                    </motion.dev>
             </motion.div>
              
          </motion.div>
    )
}

export default Sliderinfo;