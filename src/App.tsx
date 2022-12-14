import styles from "./style"
import { Navbar, Hero, Stats, Vision, Pricing, CardDeal, Testimonials, Clients, CTA, Footer } from "./components"

const App = () => {

  return ( 
    <div className='bg-primary w-full overflow-hidden'>

      {/* Navbar color changes*/}
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar/>
        </div>
      </div>

      {/* Hero Section  */}
      <div className={`bg-hero-pattern bg-no-repeat bg-cover bg-center bg-fixed ${styles.flexStart}`} >
        <div className={`${styles.boxWidth}`}>
          <Hero/>
        </div>      
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`} >
        <div className={`${styles.boxWidth}`}>
          <Stats/>
          <Vision/> 
          <Pricing/>
          <CardDeal/> 
          <Testimonials/>
          <Clients/>
          <CTA/>
          <Footer/>
        </div>      
      </div>
      
    </div>
  )
}
export default App

// CardDeal
// https://www.youtube.com/watch?v=_oO4Qi5aVZs&t=5185s&ab_channel=JavaScriptMastery
// 1.35.34