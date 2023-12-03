import FeatureProjects from "@/components/FeatureProjects";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Subcribe from "@/components/Subcribe";
import WorkList from "@/components/WorkList";


export default function Home() {
  return (
    <main >
      <Hero/>
      <WorkList/>
      <Stats/>
      <FeatureProjects/>
      <Subcribe/>
  
    </main>
  )
}
