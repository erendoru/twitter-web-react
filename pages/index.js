import React from "react";

import Layout from "../components/layout";
import Tweet from "../components/tweet/index";

function HomePage() {
  return (
    <Layout>
      <Tweet
        name="Eren Doru"
        slug="erendoru"
        datetime={new Date("2020-08-21")}
        text={` yeni tweet  merhaba twitter

        ****** merhaba `}
      ></Tweet>
      <Tweet
        name="Business İnsider"
        slug="businessinsider"
        datetime={new Date("2020-08-21")}
        text={` Now could be a great time to learn an in-demand skill: coding.`}
      ></Tweet>
    </Layout>
  );
}
export default HomePage;
