import React from "react";
import "./Blog.css";
import ScrollToTop from "../scrollToTop/ScrollToTop";
import { useNavigate } from "react-router-dom";

const Blog = () => {
  const nav = useNavigate();
  const handleNav = (navVal) => {
    if (navVal=== "blogone"){
      nav("/blog/blogone")
    }else if (navVal=== "blogtwo"){
      nav("/blog/blogtwo")
    }else if (navVal=== "blogthree"){
      nav("/blog/blogthree")
    }else if (navVal=== "blogfour"){
      nav("/blog/blogfour")
    }
  };
  return (
    <>
      <ScrollToTop />
      <div className="blogPage__container">
        <div className="blog__hero--container">
          <p>BOOKS</p>
        </div>

        <div className="blogPost__wrapper">
          <div className="article__container">
            <div className="article__image" onClick={()=>handleNav("blogone")}>
              <div className="article__image--tag">News!</div>
              <div className="article__image--arrow--container">
                <div className="article__image--arrow">
                  <img
                    className="blog__arrowImage"
                    src="/icons/arrow.png"
                    alt=""
                  />
                </div>
              </div>
              <img
                src="https://media.istockphoto.com/id/1221479375/photo/young-woman-working-from-home.jpg?s=612x612&w=0&k=20&c=1LkJT2Row2eePDsH9uqSwtgKhX-VHbJXtJYNO9G2xiQ="
                alt=""
              />
            </div>
            <div className="article__content--holder">
              <h1 className="article__heading" onClick={()=>handleNav("blogone")}>
                5 Ways to help English Language Learners
              </h1>
              <p className="article__subHeading">books, stories</p>
              <div className="article__writeUp">
                Firstly, incorporating visual aids and realia into lessons can
                significantly enhance comprehension and retention for ELLs.
                Visuals help bridge the gap between new vocabulary and concepts,
                making abstract ideas more concrete...
              </div>
              {/* <div className="article__writeUp">
              Secondly, leveraging technology in the classroom opens up a world
              of interactive opportunities for language acquisition. Digital
              tools and online resources can provide personalized learning
              experiences, enabling ELLs to progress at their own pace.
            </div> */}
            </div>
            {/* <div className="article__writeUp">
              Peer interactions play a crucial role in the linguistic
              development of ELLs. Creating a classroom environment that
              promotes collaboration and communication among students encourages
              language practice in a natural setting.
            </div>
            <div className="article__writeUp">
              Differentiated instruction is another key strategy. Recognizing
              the diverse backgrounds and learning styles of ELLs, educators can
              tailor lessons to meet varied needs.
            </div>
            <div className="article__writeUp">
              Lastly, cultivating a supportive classroom culture is essential.
              ELLs often face significant emotional and social challenges, such
              as culture shock and adaptation to new educational systems.
            </div> */}
          </div>

          <div className="article__container">
            <div className="article__image" onClick={()=>handleNav("blogtwo")}>
              <div className="article__image--tag">News!</div>
              <div className="article__image--arrow--container">
                <div className="article__image--arrow">
                  <img
                    className="blog__arrowImage"
                    src="/icons/arrow.png"
                    alt=""
                  />
                </div>
              </div>
              <img
                src="https://media.istockphoto.com/id/1386479427/photo/interpreters-and-secretaries-working-in-an-office.jpg?s=612x612&w=0&k=20&c=kQQnp8tlrXcO-Ivu7RQ6m2Q0JGPuVlKwWpE1EiF4vlU="
                alt=""
              />
            </div>
            <div className="article__content--holder">
              <h1 className="article__heading" onClick={()=>handleNav("blogtwo")}>
                Translation Vs. Localization Vs. Transcreation
              </h1>
              <p className="article__subHeading">books, stories</p>
              <div className="article__writeUp">
                Translation serves as the foundational process among the three,
                primarily focusing on converting text from a source language to
                a target language while maintaining the original meaning as
                closely as possible...
              </div>
              {/* <div className="article__writeUp">
                Localization goes a step beyond translation by adapting the
                product or content to suit the cultural, legal, and linguistic
                expectations of a specific region or market. It encompasses a
                broader range of elements, including currency, date formats,
                regulatory requirements, and cultural sensitivities...
              </div> */}
            </div>
          </div>
        </div>

        <div className="blogPost__wrapper">
          <div className="article__container">
            <div className="article__image" onClick={()=>handleNav("blogthree")}>
              <div className="article__image--tag">News!</div>
              <div className="article__image--arrow--container">
                <div className="article__image--arrow">
                  <img
                    className="blog__arrowImage"
                    src="/icons/arrow.png"
                    alt=""
                  />
                </div>
              </div>
              <img
                src="https://media.istockphoto.com/id/1843999583/photo/individuals-use-the-internet-and-advanced-holographic-graphics-and-ai-technology-for-smooth.jpg?s=612x612&w=0&k=20&c=peGVnkjlFKv5wLkth2VoRrj0hLhOn4MHSitNQY3738M="
                alt=""
              />
            </div>
            <div className="article__content--holder">
              <h1 className="article__heading" onClick={()=>handleNav("blogthree")}>
                Legal Translation Guide: What You Need to Know
              </h1>
              <p className="article__subHeading">books, stories</p>
              <div className="article__writeUp">
                Legal translation is a highly specialized field that demands
                precision, expertise, and a deep understanding of both the
                source and target legal systems...
              </div>
            </div>
          </div>

          <div className="article__container">
            <div className="article__image" onClick={()=>handleNav("blogfour")}>
              <div className="article__image--tag">News!</div>
              <div className="article__image--arrow--container">
                <div className="article__image--arrow">
                  <img
                    className="blog__arrowImage"
                    src="/icons/arrow.png"
                    alt=""
                  />
                </div>
              </div>
              <img
                src="https://media.istockphoto.com/id/1357265563/photo/young-woman-using-mobile-phone-for-working-at-home.jpg?s=612x612&w=0&k=20&c=XTQADI7lbzyQLgpLRInVkfKH7c0lQqQbRO2HtbMBDlE="
                alt=""
              />
            </div>
            <div className="article__content--holder">
              <h1 className="article__heading" onClick={()=>handleNav("blogfour")}>
                Different Spanish: Latin American vs Spain
              </h1>
              <p className="article__subHeading">books, stories</p>
              <p className="article__writeUp">
                The Spanish language, known as Español or Castellano, showcases
                a rich tapestry of linguistic diversity across the globe...
              </p>
            </div>
          </div>
        </div>
        <hr className="blog__post--hr" />
      </div>
    </>
  );
};

export default Blog;
