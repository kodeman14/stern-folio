import AboutMe from "../layout/AboutMe";
import Resume from "../layout/Resume";
import Skills from "../layout/Skills";
import Projects from "../layout/Projects";
import ContactMe from "../connect/ContactMe";

import {
  personalData,
  projectData,
  resumeData,
  skillsData,
  contactData,
} from "../../data/index";

export default function Home() {
  return (
    <>
      <AboutMe jsonData={personalData} />
      <Resume jsonData={resumeData} />
      <Skills jsonData={skillsData} />
      <Projects jsonData={projectData} />
      <ContactMe jsonData={contactData} />
    </>
  );
}
