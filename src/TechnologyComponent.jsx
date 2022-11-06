const TechnologyComponent = ({ name, images, description }) => {
  return (
    <div className='technology'>
      <article className='technology-content'>
        <div className='space-launch'>
          <h2>03 SPACE LAUNCH 101</h2>
          <h1>{name}</h1>
          <p>{description}</p>
        </div>
        <div className='launch-image-container'>
          <img src={images.portrait} alt='' />
        </div>
      </article>
    </div>
  )
}

export default TechnologyComponent
