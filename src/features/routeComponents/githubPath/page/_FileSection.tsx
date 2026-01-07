type FileSectionProps = {
    markdown: string
}
const FileSection = ({ markdown }: FileSectionProps) => {
    return <div>{markdown}</div>
}

export default FileSection
