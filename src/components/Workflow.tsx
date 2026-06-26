import Reveal from './Reveal'

const steps = ['观察与定位', '关键词与情绪板', '草图与 AI 发散', '视觉系统设计', '输出与优化']

export default function Workflow() {
  return (
    <div className="workflow-list">
      {steps.map((step, index) => (
        <Reveal key={step} className="workflow-step" delay={index * 0.04}>
          <span>{String(index + 1).padStart(2, '0')}</span>
          <h3>{step}</h3>
        </Reveal>
      ))}
    </div>
  )
}
