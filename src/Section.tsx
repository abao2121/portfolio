
interface SectionProps{
    title: string;
    content: string;
}

export const Section = ({title, content}: SectionProps) => {
    return (
        <section style = {{ border: '1px solid #ccc', margin: 0, padding: 10 }}>
            <h2>{title}</h2>
            <p>{content}</p>
        </section>
    )
}