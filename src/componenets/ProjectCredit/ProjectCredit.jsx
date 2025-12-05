
const ProjectCredit = ({projectcredit}) => {
    return (
        <>
            <span className=""><strong>Made Possible By:</strong></span>
            {
                <a href="#hello" key={projectcredit.id} className="flex flex-col items-center mx-2">
                    <img src={projectcredit.src} alt="name" className="w-6 h-8 border rounded-full object-cover" />
                    <span className="text-sm">{projectcredit.name}</span>
                </a>
            }
        </>
    )
}

export default ProjectCredit;