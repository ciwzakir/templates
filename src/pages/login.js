import {
  GoogleOutlined,
  GithubOutlined,
  FacebookOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
import Head from "next/head";
import styles from "@/styles/Login.module.css";
import RootLayout from "@/components/Layouts/RootLayout";
import { signIn } from "next-auth/react";
import React from "react";

const LoginPage = () => {
  return (
    <div>
      <Head>
        <title>Next Login</title>
      </Head>
      <div className={styles.form}>
        <h3>LOGIN</h3>
        <div className={styles.social_icons}>
          <GoogleOutlined
            onClick={() =>
              signIn("google", { callbackUrl: "http://localhost:3000/welcome" })
            }
          />
          <GithubOutlined
            onClick={() =>
              signIn("github", { callbackUrl: "http://localhost:3000/welcome" })
            }
          />
          <FacebookOutlined
            onClick={() =>
              signIn("facebook", {
                callbackUrl: "http://localhost:3000/welcome",
              })
            }
          />
          <LinkedinOutlined onClick={() => signIn("linkedin")} />
        </div>
        <hr />
      </div>
    </div>
  );
};

export default LoginPage;

LoginPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
