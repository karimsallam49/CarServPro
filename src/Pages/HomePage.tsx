import AnimatedCard from "../components/AnimatedCard/AnimatedCard"
import BenefitsSection from "../components/BenefitsSection/BenefitsSection"
import BookAdemoComponen from "../components/BookAdemoComponent/BookAdemoComponen"
import CardiacSolution from "../components/Cardiac Solution/CardiacSolution"
import HeroSection from "../components/HeroSection/HeroSection"
import LogoSlider from "../components/LogoSlider/LogoSlider"
import PremiumPackageCard from "../components/PremiumPackage/PremiumPackage"
// import ReelsSlider from "../components/ReelsSlider/ReelsSlider"

const HomePage = () => {
  return (
<>
        <HeroSection />
         <AnimatedCard/>
        <CardiacSolution/>
        <LogoSlider/>
        <BookAdemoComponen/>
        <PremiumPackageCard/>
        {/* <ReelsSlider/> */}
        <BenefitsSection/>
      
    </>
  )
}

export default HomePage
