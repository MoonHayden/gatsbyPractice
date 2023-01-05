Gatsby x Notion 연동 Practice

1. 라이브러리 설치

yarn add gatsby-source-notion-api
or
npm install --save gatsby-source-notion-api

2. gatsby_config plugins 적용

   {
   resolve: `gatsby-source-notion-api`,
   options: {
   token: "secret_696MzwD8Myz3yvePJN4UPjano9HGSDDAe8w5QGkWoCo",
   databaseId: "a1d555bed5d349919fda5d239d752e52",
   propsToFrontmatter: true,
   lowerTitleLevel: true,
   },
   },

3. Notion Developers Integration 생성
   @ https://www.notion.so/my-integrations
