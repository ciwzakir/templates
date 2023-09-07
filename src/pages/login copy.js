import { useForm } from "react-hook-form";
import { GoogleOutlined, GithubOutlined } from "@ant-design/icons";
import Head from "next/head";
import styles from "@/styles/Login.module.css";
import RootLayout from "@/components/Layouts/RootLayout";
import { signIn } from "next-auth/react";
import auth from "@/firebase/firebase.auth";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";
import React from "react";
import { Alert } from "antd";

const LoginPage = () => {
  const router = useRouter();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  console.log(user, "user");

  if (user) {
    <Alert message="User Register Successfully" type="success" />;
    router.push("/");
  }
  if (error) {
    <Alert message="Something Wrong!!!" type="success" />;
  }
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    // console.log(data, "Data");
    createUserWithEmailAndPassword(data.email, data.password);
  };

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
        </div>
        <hr />
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="">Your Email</label>
          <input {...register("email", { required: true })} type="email" />
          <label htmlFor="">Your Password</label>
          <input
            {...register("password", { required: true })}
            type="password"
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;

LoginPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
