import styles, {layout} from "../style"
import{pricing} from '../assets';
import Button from "./Button";

const Billing = () =>
  (
    <section id="product" className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
      <img src={pricing} alt="pricing" className="w-[100%] h-[90%] relative z-[5]" />
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%]
      rounded-full white__gradient"/>
      <div className="absolute z-[0] -left-1/2 bottom-0 
      w-[50%] h-[50%] rounded-full pink__gradient"/>
      </div>

      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}> 
          We offer tutoring rates 
          <br className="sm:block hidden"/> {" "} 
          to suit all budgets.
        </h2>
        
        <p className={`${styles.paragraph} max-w-[470px] mt-6`} >
        The fees usually include the total of everything charged by providing the tutoring.               
        </p>
        <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <Button id="btnBilling" styles="mt-0 rounded-[10px]" text="Simply Get in Touch Today"/>
        </div>
      </div>

    </section>
  )


export default Billing