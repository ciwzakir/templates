// import {
//   FacebookFilled,
//   LinkedinFilled,
//   GoogleSquareFilled,
//   TwitterSquareFilled,
// } from "@ant-design/icons";
// import { Layout, Menu, Button } from "antd";
// import styles from "@/styles/Home.module.css";
// import Link from "next/link";

// const RootLayout = ({ children }) => {
//   const { Header, Content, Footer } = Layout;
//   return (
//     <Layout>
//       <Header
//         style={{
//           display: "flex",
//           justifyContent: "space-between",
//         }}
//       >
//         <div className="demo-logo">
//           <Link
//             href="/"
//             style={{
//               textDecoration: "none",
//               color: "white",
//               fontSize: "25px",
//             }}
//           >
//             NEXT AUTH
//           </Link>
//         </div>
//         <Menu
//           theme="dark"
//           mode="horizontal"
//           style={{
//             width: "20%",
//             display: "flex",
//             fontSize: "20px",
//             justifyContent: "space-between",
//           }}
//         >
//           <Link
//             style={{ textDecoration: "none", color: "white" }}
//             href="/contact"
//           >
//             <items>Contact</items>
//           </Link>
//           <Link
//             style={{ textDecoration: "none", color: "white" }}
//             href="/about"
//           >
//             <items>About</items>
//           </Link>
//           <Link
//             style={{ textDecoration: "none", color: "white" }}
//             href="/profile"
//           >
//             <items>Profile</items>
//           </Link>
//           <Link
//             style={{ textDecoration: "none", color: "white" }}
//             href="/login"
//           >
//             <items>Login</items>
//           </Link>
//           <items>
//             <Button type="primary" danger>
//               Logout
//             </Button>
//           </items>
//         </Menu>
//       </Header>

//       <Footer
//         style={{
//           position: "fixed",
//           left: "0",
//           bottom: "0",
//           width: "100%",
//           textAlign: "center",
//         }}
//       >
//         <div className={styles.line}></div>
//         <h2
//           style={{
//             fontSize: "28px",
//           }}
//         >
//           PH-NEWS PORTAL
//         </h2>
//         <p className={styles.social_icons}>
//           <Link href="https://web.facebook.com/groups/programmingherocommunity">
//             <FacebookFilled />
//           </Link>
//           <Link href="www.twitter.com">
//             <TwitterSquareFilled />
//           </Link>
//           <Link href="https://web.programming-hero.com/home/">
//             <GoogleSquareFilled />
//           </Link>
//           <Link href="www.linkedin.com">
//             <LinkedinFilled />
//           </Link>
//         </p>
//         News Portal ©2023 Created by Programming Hero
//       </Footer>
//     </Layout>
//   );
// };
// export default RootLayout;

import {
  ProfileOutlined,
  MobileOutlined,
  UserOutlined,
  FacebookFilled,
  LinkedinFilled,
  GoogleSquareFilled,
  TwitterSquareFilled,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
const { Header, Content, Footer } = Layout;
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Navbar from "./Navbar";

const RootLayout = ({ children }) => {
  return (
    <Layout>
      <Navbar></Navbar>
      <Content
        style={{
          padding: "0 24px",
          minHeight: "100vh",
        }}
      >
        {children}
      </Content>

      <Footer
        style={{
          textAlign: "center",
        }}
      >
        <div className={styles.line}></div>
        <h2
          style={{
            fontSize: "28px",
          }}
        >
          PH-NEWS PORTAL
        </h2>
        <p className={styles.social_icons}>
          <Link href="https://web.facebook.com/groups/programmingherocommunity">
            <FacebookFilled />
          </Link>
          <Link href="www.twitter.com">
            <TwitterSquareFilled />
          </Link>
          <Link href="https://web.programming-hero.com/home/">
            <GoogleSquareFilled />
          </Link>
          <Link href="www.linkedin.com">
            <LinkedinFilled />
          </Link>
        </p>
        News Portal ©2023 Created by Programming Hero
      </Footer>
    </Layout>
  );
};
export default RootLayout;
