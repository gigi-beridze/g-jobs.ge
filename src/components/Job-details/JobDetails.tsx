import { Link, useParams } from "react-router-dom"
import jobs from '../../data/data.json'
import './JobDetails.scss'

export const JobDetails = () => {
  const {position} = useParams()

  const job = jobs.find(job => job.position === position)

    return (
      <section>
        <div className="container">
          <div className="details__wrapper">
            <div className="details__top">
              <img src={job?.logo} alt="" />
              <div>
                <h1>{job?.company}</h1>
              </div>
              <button>
                <a href={job?.companySite}>Company Site</a>
              </button>
            </div>
            <div className="job__details">
              <div className="about__job">
                <div>
                  <h6>{job?.postedAt} - {job?.contract}</h6>
                  <h1>{job?.position}</h1>
                  <span>{job?.location}</span>
                </div>
                <button className="btn">Apply</button>
              </div>
              <p className="job__desc">{job?.desc}</p>
              <div className="requirements">
                <h1>Requirements</h1>
                <p>{job?.requirements.reqTitle}</p>
                <ul className="requirement__item">
                  {job?.requirements.reqItem.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="responsibility">
                <h1>What you will do?</h1>
                <p>{job?.responsibility.resItem}</p>
                <ol type="1" className="responsibility__item">
                  {job?.responsibility.resItem.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  