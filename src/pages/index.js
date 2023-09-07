import Head from "next/head";
import RootLayout from "@/components/Layouts/RootLayout";
import AllNews from "@/components/UI/AllNews";
import { useGetNewsQuery } from "@/redux/api/api";
import dynamic from "next/dynamic";
import Loader from "@/components/Loader/Loader";

const HomePage = ({ allNews }) => {
  const DynamicBanner = dynamic(() => import("@/components/UI/Banner"), {
    loading: () => <Loader />,
    ssr: false,
  });

  return (
    <>
      <Head>
        <title>PH-News Portal</title>
        <meta
          name="description"
          content="This is news portal of programming hero made by next-js"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DynamicBanner />
      <AllNews allNews={allNews} />
    </>
  );
};
export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getServerSideProps = async () => {
  // const res = await fetch("http://localhost:5000/news");
  const res = await fetch("http://localhost:3000/api/news");
  const data = await res.json();

  return {
    props: {
      allNews: data.data,
    },
  };
};

// export const getStaticProps = async () => {
//   const res = await fetch("http://localhost:5000/news");
//   const data = await res.json();

//   return {
//     props: {
//       allNews: data,
//     },
//     revalidate: 10,
//   };
// };
