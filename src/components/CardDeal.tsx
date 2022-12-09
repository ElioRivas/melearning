import { card } from "../assets";
import styles, {layout} from "../style";
import Button from "./Button";

const CardDeal = () => 
  (
    <section id="CardDeal" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Find the best tutoring <br className="sm:block hidden" /> 
          in a few easy steps.          
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        We recruit top-class educators. <br className="sm:block hidden" />
        <span className="text-gradient font-bold">ME Learning</span>{" "}
        recruits outstanding educators to work as private tutor with families 
        in Florida. 
        </p>
      <Button styles="mt-10 rounded-[10px]" id="IdCardDeal" text="Get Started" />
      </div>
      <div className={layout.sectionImg}>
        <img src={card} alt="card" className="w-[100%] h-[100%]" />

      </div>
    </section>
  )


export default CardDeal