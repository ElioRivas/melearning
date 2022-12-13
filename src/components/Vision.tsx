import { vision } from "../constants"
import styles, { layout } from "../style"
import Button from "./Button"

const VisionCard = ({ icon, title, content, index }:{icon: string, title: string, content: string, index: number}) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== vision.length -1 ? "mb-6":"mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain"/>
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className={`font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1`}>
        {title}
      </h4>
      <p className={`font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1`} >
        {content}
      </p>

    </div>
  </div>
)

const Vision = () => {
  return (
   <section id="vision" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Our vision is to reach all elementary school students 
        <br className="sm:block hidden"/> {" "}
        needing support to become confident readers.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        With suitable tutors, you can improve your skills 
        and feel the confidence of a high level of teaching 
        and experience; therefore, you will succeed in life.
      </p>

        <Button id="btnVision" styles="mt-10 rounded-[10px]" text="Get Started"/>
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      { vision.map((feature, index) =>(
        <VisionCard key={feature.id}{...feature} index={index}/>
      ))}
    </div>

   </section>
  )
}

export default Vision