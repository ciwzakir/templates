import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

import Head from "next/head";
import RootLayout from "@/components/Layouts/RootLayout";

const ProfilePage = () => {
  return (
    <div className="">
      <div style={{ textAlign: "center" }}>
        <Head>
          <title>Next Profile</title>
        </Head>
        <h1>User Profile</h1>
        <Avatar size={64} icon={<UserOutlined />} />
      </div>
    </div>
  );
};

export default ProfilePage;

ProfilePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
