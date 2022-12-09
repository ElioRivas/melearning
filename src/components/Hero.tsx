import styles from "../style";
import { discount, tutor, scholarships } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">20%</span> Discount For{" "}
            <span className="text-white">1 Month</span> Account
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            The Best <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Reading</span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          Tutoring Agency
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Our team of experts uses innovating teaching methodologies to help elementary school students improve their skills!!
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        {/* <img src={robot} alt="billing" className="w-[100%] h-[100%] relative z-[5]" /> */}
          <div className="card-container w-[100%] h-[100%] relative z-[5] ">
        <div className='card-info'>
          <div className='left-column background1-left-column'>
            <h6>Reading</h6>      
            <h2>Kinder to fifth grade</h2>
            <img src={tutor} alt="image-reading" className='image-card'/>            
          </div>

          <div className='right-column'>
            <div>
            </div>
            
            <p className={`${styles.paragraph}`}>
            We help students master essential foundational literacy 
            skills to empower their learning and become 
            successful readers.</p>
            <button className='button  background1-left-column' id="IdButtonReadMore">Read More</button>
          </div>
        </div>
        <div className='card-info'>
          <div className='left-column background2-left-column'>
            <h6>Scholarships</h6>      
            <h2>Accepting applications!</h2>
            <img src={scholarships} alt="image-scholarships" className='image-card'/>            
          </div>

          <div className='right-column'>
            <div>
            </div>
            
            <p className={`${styles.paragraph} `}>
            Students from Florida public schools might be eligible for a scholarship.
            Talk to one of our specialists for more information. 
            </p>
            <button className='button  background2-left-column' id="IdButtonScholarship">Read More</button>
          </div>
        </div>         
      </div>   

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;