
import Navbar from './component/Navbar/Navbar'
import MainIntro from './component/Intro/MainIntro'
import IntroGradient from './component/Intro/IntroGradient'
import SubSecion from './component/Intro/SubSecion'
import AboutSection from './component/About/AboutSection'
import HelperSection from './component/HelperSection'
import SkillSection from './component/Skills/SkillSection'
import SubSkills from './component/Skills/SubSkills'
import ExperienceMain from './component/Experiences/ExperienceMain'
import ProjectMain from './component/Project/ProjectMain'
import ContactMain from './component/Contact/ContactMain'
import FooterMain from './component/footer/FooterMain'



const App = () => {
  return (
   <main className='font-body' >
    <Navbar/>
    <MainIntro/>
    <IntroGradient/>
    <SubSecion/>
    <AboutSection/>
    <SkillSection/>
    <SubSkills/>
    <ExperienceMain/>
    <ProjectMain/>
    <ContactMain/>
    <FooterMain/>
    

   </main>
  )
}

export default App