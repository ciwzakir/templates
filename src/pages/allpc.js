import Head from "next/head";
import RootLayout from "@/components/Layouts/RootLayout";
import AllPcInfo from "@/components/UI/AllPcInfo";

const AllPc = ({ allPcData }) => {
  return (
    <>
      <Head>
        <title> Our PC Info </title>
        <meta
          name="description"
          content="This is news portal of programming hero made by next-js"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AllPcInfo allPcData={allPcData} />
    </>
  );
};
export default AllPc;

AllPc.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getServerSideProps = async () => {
  const res = await fetch("http://localhost:5000/pcdata");
  const data = await res.json();

  return {
    props: {
      allPcData: data,
    },
  };
};
