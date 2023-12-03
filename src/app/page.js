import FeatureProjects from "@/components/FeatureProjects";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Subscribe from "@/components/Subscribe";
import WorkList from "@/components/WorkList";


export default function Home() {
  return (
    <main >
      <Hero/>
      <WorkList/>
      <Stats/>
      <FeatureProjects/>
      <Subscribe/>
  
    </main>
  )
}
