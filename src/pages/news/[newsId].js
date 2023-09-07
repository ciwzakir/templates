import RootLayout from "@/components/Layouts/RootLayout";
import { Col, Row } from "antd";
import {
  UserOutlined,
  CalendarOutlined,
  CommentOutlined,
  ProfileOutlined,
} from "@ant-design/icons";
import Image from "next/image";

const NewsDetails = ({ singleNews }) => {
  return (
    <Row style={{ marginTop: "80px", alignItems: "center" }}>
      <Col md={6} lg={12}>
        <Image
          alt="example"
          src={singleNews?.image_url}
          width={500}
          height={300}
          responsive
        />
      </Col>
      <Col md={6} lg={12} style={{ paddingLeft: "20px" }}>
        <h1 style={{ fontSize: "30px" }}>{singleNews?.title}</h1>
        <span
          style={{
            color: "gray",
            display: "block",
            fontSize: "20px",
          }}
        >
          <UserOutlined /> {singleNews?.author}
        </span>
        <div
          className="line"
          style={{
            height: "5px",
            margin: "20px 0",
            background: "#000",
            width: "100%",
          }}
        ></div>

        <p
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            color: "gray",
            margin: "10px 0px",
            fontSize: "20px",
          }}
        >
          <span>
            <CalendarOutlined /> {singleNews?.release_date}
          </span>
          <span>
            <CommentOutlined /> {singleNews?.comment_count} Comments
          </span>
          <span>
            <ProfileOutlined /> {singleNews?.category}
          </span>
        </p>

        <p style={{ fontSize: "25px", fontWeight: "lighter" }}>
          {singleNews?.description}
        </p>
      </Col>
    </Row>
  );
};

export default NewsDetails;

NewsDetails.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

// export const getStaticPaths = async () => {
//   const res = await fetch(`http://localhost:5000/news`);
//   const newsData = await res.json();
//   const paths = newsData.map((news) => ({
//     params: { newsId: news.id },
//     // newsId = file name
//   }));
//   return { paths, fallback: false };
//   //   return { paths, fallback: true }; feedback true load first some  data for large data
//   //   return { paths, fallback: "blocking" }; feedback blocking no data load and not redirect to 404page
// };
//  //   getStaticProps getStaticPats is Static Side Generation (SSG)

// export const getStaticProps = async (context) => {
//   const { params } = context;
//   const res = await fetch(`http://localhost:5000/news/${params.newsId}`);
//   const data = await res.json();

//   return {
//     props: {
//       singleNews: data,
//     },
//   };
// };

export const getServerSideProps = async (context) => {
  const { params } = context;
  const res = await fetch(`http://localhost:3000/api/news/${params.newsId}`);
  // const res = await fetch(`http://localhost:5000/news/${params.newsId}`);
  const data = await res.json();

  return {
    props: {
      singleNews: data,
    },
  };
};
