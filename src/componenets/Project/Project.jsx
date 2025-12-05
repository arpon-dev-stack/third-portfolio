import { Fragment } from "react"
import { assets } from "../../assets/assets"
import ProjectDetail from "../ProjectDetail/ProjectDetail"

function Project() {
  return (
    <section className="min-h-screen h-auto w-full bg-[#E01D1D] sm:px-20 px-5 flex flex-col sm:flex-row pt-16 gap-4">
      {
        assets.project.map((projectdetail) => (
          <Fragment key={projectdetail.id}>
          <ProjectDetail projectdetail={projectdetail} />
          </Fragment>
        ))
      }

    </section>
  )
}

export default Project