import styles from "../style";
import Button from "./Button";

const CTA = () => 
  (  
    <section id="cta" className={`${styles.flexCenter} 
      ${styles.marginY} ${styles.padding}
      sm:flex-row flex-col bg-black-gradient-2 rounded-[20px]
       box-shadow
    `}>
      <div className="flex-1 flex flex-col">
        <h2 className={`${styles.heading2}`}>
        Let's try our tutoring service now!</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Everything you need to start enhancing your skills 
          and grow in your classes.
        </p>
      </div>
      <div className={`${styles.flexCenter} 
      sm:ml-10 ml-0 sm:mt-0 mt-10 `}>
        <Button id ="IdbtnCTA" text="Get Started" styles="mt-10 rounded-[10px]" />
      </div>

    </section>
  )


export default CTA