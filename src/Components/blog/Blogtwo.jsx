import React from "react";
import "./Blogtwo.css";
import ScrollToTop from "../scrollToTop/ScrollToTop";

const Blogtwo = () => {
  return (
    <>
      <ScrollToTop />
      <div className="blogone__body">
        <div className="blogone__heroSection">
          <div className="blogone__hsTitle">
            <p className="blogoneHeroText">
              Translation Vs. Localization Vs. Transcreation
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
                src="https://media.istockphoto.com/id/1386479427/photo/interpreters-and-secretaries-working-in-an-office.jpg?s=612x612&w=0&k=20&c=kQQnp8tlrXcO-Ivu7RQ6m2Q0JGPuVlKwWpE1EiF4vlU="
                alt=""
                className="blogoneContentImage"
              />
            </div>
            <div className="blogoneWriteupContainer">
              <article className="blogoneWriteup">
                <p className="" style={{ marginBottom: "20px" }}>
                  Translation, localization, and transcreation are three
                  distinct processes involved in adapting content from one
                  language and culture to another. Each process serves a
                  different purpose and involves varying degrees of adaptation.
                  Here's an overview of each:
                  {/* <br /> */}
                </p>
                <ol className="blogoneOrderList">
                  <li className="blogoneListItem">
                    <span className="blogoneWriteupTitle">Translation:</span>
                    &nbsp; is the communication of the meaning of a
                    source-language text by means of an equivalent
                    target-language text.[1] The English language draws a
                    terminological distinction (which does not exist in every
                    language) between translating (a written text) and
                    interpreting (oral or signed communication between users of
                    different languages); under this distinction, translation
                    can begin only after the appearance of writing within a
                    language community.
                    <p style={{ marginTop: "10px" }}>
                      A translator always risks inadvertently introducing
                      source-language words, grammar, or syntax into the
                      target-language rendering. On the other hand, such
                      "spill-overs" have sometimes imported useful
                      source-language calques and loanwords that have enriched
                      target languages. Translators, including early translators
                      of sacred texts, have helped shape the very languages into
                      which they have translated.[2]
                    </p>
                    <p style={{ marginTop: "10px" }}>
                      Because of the laboriousness of the translation process,
                      since the 1940s efforts have been made, with varying
                      degrees of success, to automate translation or to
                      mechanically aid the human translator.[3]
                    </p>
                    <p style={{ marginTop: "10px" }}>
                      More recently, the rise of the Internet has fostered a
                      world-wide market for translation services and has
                      facilitated "language localisation".[4]
                    </p>
                  </li>
                  <li className="blogoneListItem">
                    <span className="blogoneWriteupTitle">Localization:</span>
                    &nbsp; Localization is the process of adapting and
                    customizing a product to meet the needs of a specific
                    market, as identified by its language, culture,
                    expectations, local standards and legal requirements.
                    Localization can apply to any type of merchandise or service
                    that targets multiple audiences with different cultural
                    backgrounds. The term localization is often represented as
                    l10n, where 10 is the number of letters between the word's
                    opening L and closing N.
                    <p>
                      A localized product should appear to have been developed
                      specifically for the local culture. It should account for
                      the many subtleties that distinguish one culture from
                      another. To this end, the localization process must
                      consider several factors:
                    </p>
                    <p style={{ marginTop: "10px" }}>
                      <span className="blogoneWriteupTitle">
                        Language. &nbsp;
                      </span>
                      When the primary language of the target audience is
                      something other than the language of origin, all text
                      should be translated into that language. The translation
                      must consider the local culture, while preserving the
                      text's original meaning. This translation, which is a
                      large part of localization, can sometimes be facilitated
                      with machine translation, although additional work is
                      usually needed to fine-tune the text for syntax and idiom.
                      When localizing a product for a market that speaks the
                      same language, the text must still be fine-tuned to
                      address cultural considerations, such as changing Z's to
                      S's for British English.
                    </p>
                    <p style={{ marginTop: "10px" }}>
                      <span className="blogoneWriteupTitle">
                        Presentation. &nbsp;
                      </span>
                      User interfaces, documentation, marketing materials and
                      product labels should be produced in a way that
                      accommodates the language, traditions and expectations of
                      the target audience. For example, languages such as
                      Arabic, Persian, Hebrew and Urdu read from right-to-left,
                      rather than left-to-right, and German words often require
                      much more space than English words, which can affect how
                      text is displayed.
                    </p>
                  </li>
                  <li className="blogoneListItem">
                    <span className="blogoneWriteupTitle">Transcreation:</span>
                    &nbsp; Transcreation, a portmanteau of "translation" and
                    "creation," is a specialized form of adaptation that goes
                    beyond traditional translation to convey the essence,
                    emotional impact, and cultural resonance of a message in a
                    new language and cultural context. Unlike translation, which
                    focuses on accurately conveying meaning, transcreation
                    emphasizes the creative aspect of language adaptation,
                    aiming to evoke the same response and emotional connection
                    in the target audience as the original content does in its
                    source context. This process is particularly common in
                    marketing, advertising, branding, and creative content where
                    cultural nuances, idiomatic expressions, wordplay, and
                    emotional appeal are crucial for effectively engaging and
                    persuading the audience. Transcreators, skilled linguists
                    with a deep understanding of both the source and target
                    cultures, often work closely with marketing teams,
                    copywriters, and creative directors to craft compelling,
                    culturally relevant adaptations that resonate with the
                    target audience while staying true to the core message and
                    brand identity. They may rewrite slogans, taglines,
                    advertisements, and brand names, adapt visual elements, and
                    employ linguistic devices such as puns, metaphors, and
                    rhymes to ensure that the transcreated content captures the
                    intended tone, style, and impact. By harnessing the power of
                    language and creativity, transcreation enables brands to
                    connect with diverse audiences worldwide, effectively convey
                    their brand message, and establish a meaningful and
                    memorable presence in global markets.
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
                    Legal Translation Guide: What You Need to Know
                  </h1>
                </div>
                <img
                  src="https://media.istockphoto.com/id/1843999583/photo/individuals-use-the-internet-and-advanced-holographic-graphics-and-ai-technology-for-smooth.jpg?s=612x612&w=0&k=20&c=peGVnkjlFKv5wLkth2VoRrj0hLhOn4MHSitNQY3738M="
                  alt=""
                  className="otherPostImage"
                />
              </div>
              <div className="otherPost1">
                <div className="article__image--tag">News!</div>
                <div className="otherPostTitle">
                  <h1 className="otherPostTitleText">
                    Different Spanish: Latin American vs Spain
                  </h1>
                </div>
                <img
                  src="https://media.istockphoto.com/id/1357265563/photo/young-woman-using-mobile-phone-for-working-at-home.jpg?s=612x612&w=0&k=20&c=XTQADI7lbzyQLgpLRInVkfKH7c0lQqQbRO2HtbMBDlE="
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

export default Blogtwo;
