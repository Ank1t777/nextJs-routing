interface ProjectDetailsProps {
    params: {
        name: string;
    };
}

export default function ProjectDetails({ params }: ProjectDetailsProps) {
    return (
        <main>
            <h1>Project {params.name}</h1>
        </main>
    )
}