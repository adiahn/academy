import './Resources.css'

const Resources = () => {
  const resources = [
    {
      id: 'lessons',
      title: 'Lessons for Learners',
      count: '15417',
      description: 'Self-paced modules on entrepreneurship, business development, financial literacy, and skills training for aspiring entrepreneurs.',
      color: 'blue'
    },
    {
      id: 'assessments',
      title: 'Assessments and Quizzes',
      count: '140',
      description: 'Assessments and quizzes for entrepreneurs and educators to track progress in business skills, financial management, and entrepreneurial development.',
      color: 'green'
    },
    {
      id: 'guides',
      title: 'Tips & Guides',
      count: '20',
      description: 'Informative articles, handouts, and guides for entrepreneurs and educators on topics related to business development, entrepreneurship, and financial literacy.',
      color: 'light-green'
    }
  ]

  return (
    <section className="resources" id="courses">
      <div className="container">
        <div className="resources__header">
          <h2 className="resources__title">Content & Resources for Learners</h2>
        </div>
        <div className="resources__grid">
          {resources.map((resource) => (
            <div key={resource.id} className={`resources__card resources__card--${resource.color}`}>
              <div className="resources__card-icon"></div>
              <div className="resources__card-count">{resource.count}</div>
              <h3 className="resources__card-title">{resource.title}</h3>
              <p className="resources__card-description">{resource.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Resources

