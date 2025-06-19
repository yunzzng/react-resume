import { FC } from "react";
import styles from "./resume.module.css";
import certifications from "./data/certifications";
import portfolios from "./data/portfolios";
import educationAndExperience from "./data/educationAndExperience";
import skills from "./data/skills";
import profileImg from "/img/yunseul.jpg";
import notionIcon from "/icons/skill/notion.png";
import githubIcon from "/icons/skill/github.png";
import aboutMe from "./data/about";

const Resume: FC = () => {
  return (
    <div className={styles.container}>
      <aside className={styles.sidebar}>
        <img src={profileImg} alt="Profile" className={styles.profileImage} />
        <h2 className={styles.name}>이윤슬</h2>
        <p className={styles.title}>Front-End Developer</p>

        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>연락처</h3>
          <ul className={styles.list}>
            <li>yun.zzang9.me@gmail.com</li>
            <li>
              <a
                href="https://github.com/yunzzng?tab=repositories&q=&type=public&language=&sort="
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={githubIcon} alt="GitHub" className={styles.icon} />
              </a>
              <a
                href="https://leeyunseul.notion.site/1a023f8c54e680b4965deb2b1706fe03"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={notionIcon} alt="Notion" className={styles.icon} />
              </a>
            </li>
          </ul>
        </div>

        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>교육</h3>
          <ul className={styles.list}>
            {educationAndExperience.education.map((edu, index) => (
              <li key={index} className={styles.eduItem}>
                <div className={styles.school}>{edu.school}</div>
                <div className={styles.degree}>{edu.degree}</div>
                <div className={styles.period}>{edu.period}</div>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>자격증 및 수상</h3>
          <ul className={styles.list}>
            {certifications.map((cert, index) => (
              <li key={index}>
                <div className={styles.certificationName}>{cert.name}</div>
                <div className={styles.period}>({cert.date})</div>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>스킬</h3>
          <div className={styles.skillIconsContainer}>
            {skills.map((skill, index) => (
              <img
                key={index}
                src={skill.icon}
                alt={skill.name}
                className={styles.skillIcon}
              />
            ))}
          </div>
        </div>
      </aside>

      <main className={styles.mainContent}>
        <h1 className={styles.mainHeading}>이윤슬</h1>
        <p className={styles.subtitle}>{aboutMe.introduction}</p>
        <p className={styles.subtitle}>{aboutMe.details}</p>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>경력</h2>
          <div className={styles.timeline}>
            {educationAndExperience.experience.map((exp, index) => (
              <div key={index} className={styles.timelineItem}>
                <h3 className={styles.jobTitle}>{exp.role}</h3>
                <p className={styles.jobCompany}>
                  {exp.company} ({exp.period})
                </p>
                <p className={styles.jobDescription}>{exp?.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>프로젝트</h2>
          <div className={styles.portfolioGrid}>
            {portfolios.map((portfolio, index) => (
              <div
                key={index}
                className={styles.portfolioCard}
                onClick={() => window.open(portfolio.output, "_blank")}
              >
                <div className={styles.portfolioContent}>
                  <div className={styles.portfolioText}>
                    <div className={styles.portfolioHeader}>
                      <h3 className={styles.portfolioTitle}>
                        {portfolio.title}
                        <span className={styles.portfolioDate}>
                          {portfolio.date}
                        </span>
                      </h3>
                    </div>

                    <p className={styles.portfolioDescription}>
                      <strong className={styles.projectLabel}>
                        {portfolio.subtitle}
                      </strong>
                      <span className={styles.projectText}>
                        {portfolio.description}
                      </span>
                    </p>

                    <hr></hr>

                    <p className={styles.portfolioField}>
                      <strong>기여도:</strong>
                      <span className={styles.portfolioValue}>
                        {portfolio.contribution}
                      </span>
                    </p>

                    {portfolio.dataset && (
                      <div className={styles.portfolioField}>
                        <strong>데이터셋:</strong>
                        <ul className={styles.portfolioList}>
                          {portfolio.dataset.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {portfolio.analysis && (
                      <div className={styles.portfolioField}>
                        <strong>분석결과:</strong>
                        <ul className={styles.portfolioList}>
                          {portfolio.analysis.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {portfolio.insight && (
                      <div className={styles.portfolioField}>
                        <strong>인사이트:</strong>
                        <ul className={styles.portfolioList}>
                          {portfolio.insight.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  <div className={styles.portfolioImageBox}>
                    <img
                      src={portfolio.image}
                      alt={`${portfolio.title} 썸네일`}
                      className={styles.portfolioImage}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* <section className={styles.section}>
          <h2 className={styles.sectionTitle}>자격증 & 수상</h2>
          <ul className={styles.list}>
            {certifications.map((cert, index) => (
              <li key={index}>
                <span className={styles.certificationName}>{cert.name}</span>
                <span className={styles.certificationDate}>({cert.date})</span>
              </li>
            ))}
          </ul>
        </section> */}
      </main>
    </div>
  );
};

export default Resume;
