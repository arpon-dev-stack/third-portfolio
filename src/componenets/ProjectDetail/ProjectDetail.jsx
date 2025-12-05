import ProjectCredit from "../ProjectCredit/ProjectCredit"

function ProjectDetail({ projectdetail }) {
    return (
        <div className="w-full h-auto border">
            <img src={projectdetail.src} alt={projectdetail.title} className="w-full h-auto " />
            <h1 className="text-amber-50 text-3xl font-bold">{projectdetail.title}</h1>
            <p className="text-amber-50 text-lg mt-6"><strong>Project Description:</strong> {projectdetail.description}</p>
            <p className="text-amber-50 text-lg mt-2"><strong>Technology Used:</strong> {projectdetail.technology}
            </p>
            <div className="flex items-center py-3 text-amber-50 text-lg">
                {/* {console.log(projectdetail.credit)} */}
                <ProjectCredit projectcredit={projectdetail.credit} />
            </div>
        </div>
    )
}

export default ProjectDetail