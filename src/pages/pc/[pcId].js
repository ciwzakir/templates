import RootLayout from "@/components/Layouts/RootLayout";
import { Card, Col, Row } from "antd";
import React from "react";

import {
  UserOutlined,
  CommentOutlined,
  ProfileOutlined,
} from "@ant-design/icons";
import Image from "next/image";

const PcDetails = ({ singleItemOfPc }) => {
  return (
    <Row style={{ marginTop: "80px", alignItems: "center" }}>
      <Col md={4} lg={12}>
        <Image
          alt="example"
          src={singleItemOfPc?.image_url}
          width={800}
          height={500}
          responsive
        />
      </Col>
      <Col md={8} lg={12} style={{ paddingLeft: "20px" }}>
        <h1 style={{ fontSize: "30px" }}>{singleItemOfPc?.name}</h1>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            margin: "10px 0px",
            fontSize: "16px",
            fontWeight: 800,
          }}
        >
          <span
            style={{
              display: "block",
              fontSize: "20px",
            }}
          >
            Category: {singleItemOfPc?.category}
          </span>
          <span>
            <UserOutlined /> Price : {singleItemOfPc?.price}
          </span>
        </div>
        <div
          className="line"
          style={{
            margin: "20px 0",
            background: "#000",
            width: "100%",
            fontSize: "20px",
          }}
        ></div>
        <div className="">{singleItemOfPc?.description}</div> <br />
        <div className="">
          <Card
            title="Product Specification"
            bordered={true}
            style={{
              width: 300,
            }}
          >
            <p> {singleItemOfPc?.key_features?.brand}</p>
            <p>{singleItemOfPc?.key_features?.specification}</p>
            <p>{singleItemOfPc?.key_features?.model}</p>
            <p> {singleItemOfPc?.key_features?.port_type}</p>
            <p>{singleItemOfPc?.key_features?.resolution}</p>
            <p>{singleItemOfPc?.key_features?.voltage}</p>
          </Card>
        </div>
        <p style={{ fontSize: "25px", fontWeight: "lighter" }}>
          {singleItemOfPc?.reviews}
        </p>
        <div
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
            <CommentOutlined /> {singleItemOfPc?.status}
          </span>
          <span>
            <ProfileOutlined /> {singleItemOfPc?.average_rating}
          </span>
        </div>
      </Col>
    </Row>
  );
};

export default PcDetails;

PcDetails.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getServerSideProps = async (context) => {
  const { params } = context;
  const res = await fetch(`http://localhost:5000/pcdata/${params.pcId}`);
  const data = await res.json();

  return {
    props: {
      singleItemOfPc: data,
    },
  };
};
