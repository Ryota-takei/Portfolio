import { Box } from "@chakra-ui/react";
import { VFC } from "react";

import { WorkCard } from "../../organisum/card/WorkCard";

export const Works: VFC = () => {
  return (
    <Box bg="gray.50" minH="100vh" pt={{base:"20px",md:"100px"}} mt="10">
      <WorkCard
        title="MoreCon"
        imageUrl="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/1233228/cbe1a6f0-c672-7577-b96b-30902c0a7bc2.gif"
        description="『実現して欲しいサービスがあると人』と『実現できる人』を結んで、もっと便利で住みやすい国にしたいと思い制作しました。"
        qiitaURL="https://qiita.com/takeiin/items/41c3ade449a72f2dc3fa"
        readmeURL="https://github.com/Ryota-takei/MoreCon#readme"
        skills="TypeScript/React/ReduxToolkit/Amplify/GraphQL"
        githubURL="https://github.com/Ryota-takei/MoreCon"
        siteURL="https://www.morecon.net"
      />
      <WorkCard
        isEven={true}
        title="My Blog"
        imageUrl="./my_blog.png"
        description="学んだことをアウトプットするためのブログサイトを作成しました。本格運用は改めて行う予定です。"
        qiitaURL="https://qiita.com/takeiin/items/1b548fc57d7710876040"
        readmeURL="https://github.com/Ryota-takei/my-blog#readme"
        skills="TypeScript/React/ReduxToolkit/Amplify/GraphQL"
        githubURL="https://github.com/Ryota-takei/my-blog"
        siteURL="https://www.ryota-programming-blog.com/"
      />
      <WorkCard
        title="Weather App"
        imageUrl="./Weather_App.png"
        description="現在地もしくは検索した地域の天気情報を取得して表示するアプリです。外部API(OpenWeatherAPI,GoogleMapAPI)に慣れる一環で作成しました。"
        qiitaURL="https://qiita.com/takeiin/items/e4cbc29be1c359eeee10"
        readmeURL="https://github.com/Ryota-takei/weather_app#readme"
        skills="TypeScript/React/ReduxToolkit/Amplify（デプロイ）"
        githubURL="https://github.com/Ryota-takei/weather_app"
        siteURL="https://main.d3ie72edj5o6du.amplifyapp.com/"
      />
      <WorkCard
        isEven={true}
        title="ポートフォリオサイト"
        imageUrl="./portfolio.png"
        description="React＋Amplifyを用いて作成した本サイトになります。作成したポートフォリオを順次上げていきたいと思います。"
        qiitaURL="https://qiita.com/takeiin/items/9cd76550f8fb9b4311f7"
        readmeURL="https://github.com/Ryota-takei/Portfolio#readme"
        skills="TypeScript/React/Amplify（デプロイ）"
        githubURL="https://github.com/Ryota-takei/Portfolio"
        siteURL="https://www.ryota-portfolio.com/"
      />
    </Box>
  );
};
