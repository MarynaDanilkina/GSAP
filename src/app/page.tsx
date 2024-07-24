import { ProjectDescriptionDesktop } from "./project-description-desktop";
import { projectData } from "./constants/project"
import "./globals.scss"

export default function Home() {
  //const [requestSectionResponse] = await Promise.all([
  //  RequestSectionService.getAll(),
  //])
  return (
    <ProjectDescriptionDesktop
      projectData={projectData}
      //requestSection={requestSection}
    />
  )
}
