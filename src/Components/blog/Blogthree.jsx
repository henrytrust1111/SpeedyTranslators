import React from "react";
import "./Blogthree.css";
import ScrollToTop from "../scrollToTop/ScrollToTop";

const Blogthree = () => {
  return (
    <>
      <ScrollToTop />
      <div className="blogone__body">
        <div className="blogone__heroSection">
          <div className="blogone__hsTitle">
            <p className="blogoneHeroText">
              5 Ways to help English Language Learners
            </p>
          </div>
          <img
            src="https://prolingua.themerex.net/wp-content/uploads/2017/10/blog-single_header.jpg?id=558"
            alt="blogone__Img"
            className="blogone__heroImg"
          />
        </div>

        <section className="blogoneContentSection">
          <div className="blogoneContentSectionContainer">
            <div className="blogoneContentImageHolder">
              <img
                src="https://prolingua.themerex.net/wp-content/uploads/2017/10/image-3.jpg?id=963"
                alt=""
                className="blogoneContentImage"
              />
            </div>
            <div className="blogoneWriteupContainer">
              <article className="blogoneWriteup">
                <p className="" style={{ marginBottom: "20px" }}>
                  Helping English Language Learners (ELLs) can be a rewarding
                  experience, and there are many effective strategies to support
                  their language acquisition and overall academic success. Here
                  are five ways to assist ELLs:
                  {/* <br /> */}
                </p>
                <ol className="blogoneOrderList">
                  <li className="blogoneListItem">
                    <span className="blogoneWriteupTitle">
                      Provide Language-rich Environment:
                    </span>
                    &nbsp; Surround ELLs with opportunities to hear and use
                    English in authentic contexts. This can include labeling
                    objects in the classroom, incorporating visuals and gestures
                    into instruction, and encouraging peer interactions in
                    English. Additionally, expose them to a variety of language
                    forms, such as formal and informal speech, written texts,
                    and multimedia resources.
                  </li>
                  <li className="blogoneListItem">
                    <span className="blogoneWriteupTitle">
                      Differentiated Instruction:
                    </span>
                    &nbsp; Recognize that ELLs come with diverse language
                    backgrounds and proficiency levels. Differentiate
                    instruction by adapting content, language, and assessment to
                    meet their needs. This might involve using simplified
                    language, providing bilingual support materials, or offering
                    additional explanations and scaffolding for complex tasks.
                  </li>
                  <li className="blogoneListItem">
                    <span className="blogoneWriteupTitle">
                      Cultural Sensitivity and Inclusivity:
                    </span>
                    &nbsp; Foster a welcoming and inclusive classroom
                    environment that values cultural diversity. Acknowledge and
                    respect students' cultural backgrounds, traditions, and
                    experiences. Incorporate multicultural perspectives into the
                    curriculum, and encourage ELLs to share their own cultural
                    insights and contributions with their peers.
                  </li>
                  <li className="blogoneListItem">
                    <span className="blogoneWriteupTitle">
                      Explicit Language Instruction:
                    </span>
                    &nbsp; Be intentional about teaching English language skills
                    explicitly. Focus on key language components such as
                    vocabulary, grammar, pronunciation, and communication
                    strategies. Use a variety of instructional techniques, such
                    as modeling, guided practice, and explicit language
                    feedback. Incorporate language development activities into
                    everyday lessons across subject areas.
                  </li>
                  <li className="blogoneListItem">
                    <span className="blogoneWriteupTitle">
                      Promote Language Development Beyond the Classroom:
                    </span>
                    &nbsp; Encourage ELLs to practice English outside of school
                    through meaningful activities and interactions. Recommend
                    resources like books, websites, language-learning apps, and
                    community programs that support language development.
                    Encourage families to engage in English language activities
                    at home and to maintain regular communication with the
                    school to support their child's language learning journey.
                  </li>
                </ol>
              </article>
            </div>
            <div className=""></div>
          </div>
        </section>

        <div className="otherPostContainer">
          <div className="otherPostWrapper">
            <div className="otherPostHeader">
              <h1 className="otherPostHeaderText">You May Also Like</h1>
            </div>
            <div className="otherPostMainContent">
              <div className="otherPost1">
                <div className="article__image--tag">News!</div>
                <div className="otherPostTitle">
                  <h1 className="otherPostTitleText">
                    Translation Vs. Localization Vs. Transcreation
                  </h1>
                </div>
                <img
                  src="https://media.istockphoto.com/id/1386479427/photo/interpreters-and-secretaries-working-in-an-office.jpg?s=612x612&w=0&k=20&c=kQQnp8tlrXcO-Ivu7RQ6m2Q0JGPuVlKwWpE1EiF4vlU="
                  alt=""
                  className="otherPostImage"
                />
              </div>
              <div className="otherPost1">
                <div className="article__image--tag">News!</div>
                <div className="otherPostTitle">
                  <h1 className="otherPostTitleText">
                    Legal Translation Guide: What You Need to Know
                  </h1>
                </div>
                <img
                  src="https://media.istockphoto.com/id/1843999583/photo/individuals-use-the-internet-and-advanced-holographic-graphics-and-ai-technology-for-smooth.jpg?s=612x612&w=0&k=20&c=peGVnkjlFKv5wLkth2VoRrj0hLhOn4MHSitNQY3738M="
                  alt=""
                  className="otherPostImage"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogthree;
