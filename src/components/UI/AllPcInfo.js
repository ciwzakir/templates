import { Card, Col, Row } from "antd";
import Image from "next/image";
import {
  ArrowRightOutlined,
  CommentOutlined,
  ProfileOutlined,
} from "@ant-design/icons";
import Link from "next/link";

const AllPcInfo = ({ allPcData }) => {
  const { Meta } = Card;
  const shuffledData = allPcData
    .map((item) => ({ item, rand: Math.random() }))
    .sort((a, b) => a.rand - b.rand)
    .map((a) => a.item)
    .slice(0, 6);

  return (
    <>
      <h1
        style={{
          textAlign: "center",
          fontSize: "50px",
          margin: "30px 0px",
        }}
      >
        #TODAY Updates
      </h1>
      <Row
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
      >
        {shuffledData?.map((pc) => (
          <Col key={pc.id} className="gutter-row" span={8}>
            <Card
              hoverable
              cover={
                <Image
                  src={pc?.image_url}
                  width={500}
                  height={400}
                  responsive
                  alt="PC image"
                />
              }
            >
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
                <span>
                  <Meta title={pc?.name} />
                </span>
                <span>Price : {pc?.price}</span>
              </div>
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
                  fontSize: "14px",
                }}
              >
                <span>
                  <CommentOutlined /> {pc?.category}
                </span>
                <span>
                  <ProfileOutlined /> {pc?.status}
                </span>
              </p>

              <p style={{ fontSize: "15px" }}>
                {pc?.description.length > 100
                  ? pc?.description.slice(0, 120) + "..."
                  : pc?.description}
              </p>
              <Link href={`/pc/${pc?.id}`}>
                <p
                  style={{
                    fontSize: "15px",
                    marginTop: "20px",
                    backgroundColor: "black",
                    color: "white",
                    width: "100%",
                    padding: "2px 5px ",
                    fontWeight: "300",
                    letterSpacing: "3px",
                    textAlign: "center",
                  }}
                >
                  See Details <ArrowRightOutlined />
                </p>
              </Link>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default AllPcInfo;
