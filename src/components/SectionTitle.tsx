type SectionTitleProps = {
  kicker?: string
  title: string
  description?: string
}

export default function SectionTitle({ kicker, title, description }: SectionTitleProps) {
  return (
    <div className="section-title">
      {kicker && <p>{kicker}</p>}
      <h2>{title}</h2>
      {description && <span>{description}</span>}
    </div>
  )
}
