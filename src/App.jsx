import "./App.css";
import "./index.css";
import Hero from "./components/Hero";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import {
  fetchExperiences,
  fetchPageInfo,
  fetchProjects,
  fetchSkills,
  fetchSocials,
} from "./components/functions";
import { useEffect, useState } from "react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Portfolio } from "./components/Portfolio";
import Footer from "./components/Footer";

function App() {
  const [pageInfo, setPageInfo] = useState(null);
  const [skills, setSkills] = useState(null);
  const [experiences, setExperiences] = useState(null);
  const [projects, setProjects] = useState(null);
  const [socials, setSocials] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const init = async () => {
      const pageInfoRes = await fetchPageInfo();
      const skillsRes = await fetchSkills();
      const experiencesRes = await fetchExperiences();
      const projectsRes = await fetchProjects();
      const socialsRes = await fetchSocials();

      setPageInfo(pageInfoRes);
      setSkills(skillsRes);
      setExperiences(experiencesRes);
      setProjects(projectsRes);
      setSocials(socialsRes);
      setLoading(false);
    };

    init();
  }, []);

  return (
    <div className="bg-gray-50">
      <Header />
      <Hero loading={loading} />
      {pageInfo && skills && experiences && projects && socials && (
        <>
          <Skills skills={skills} pageInfo={pageInfo} socials={socials} />
          <Experience experiences={experiences} />
          <Portfolio projects={projects} />
          <Footer />
        </>
      )}
        
    </div>
  );
}

export default App;
