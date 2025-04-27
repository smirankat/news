import { Flex, Typography, Image } from "antd";
import { news } from "../data";
import styles from "./Page.module.css";
import flag from "../assets/flag.png";
import earth from "../assets/earth.svg";
import book from "../assets/book.svg";
import person from "../assets/person.svg";
import cube from "../assets/cube.svg";
import building from "../assets/building.svg";
import arrow from "../assets/arrow.svg";
import ria from "../assets/ria.svg";
import down from "../assets/down.svg";

const { Title, Link } = Typography;

const Page: React.FC = () => {
  const toDate = new Date(news[0].DP);
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const newsDate = [
    toDate.getDate(),
    months[toDate.getMonth()],
    toDate.getFullYear(),
  ];
  const issueDate = newsDate.join(" ");

  return (
    <div className={styles.wrapper}>
      <Flex align="center" gap="middle">
        <p className={styles.date}>
          {newsDate[0]}&nbsp;
          <span>{newsDate[1]}</span>&nbsp;
          <span>{newsDate[2]}</span>
        </p>
        <p>
          {news[0].REACH} <span>Reach</span>
        </p>
        <Flex gap="small">
          <p>
            <span>Top Traffic:</span>
          </p>
          <p>
            <span>{news[0].TRAFFIC[0].value}</span>&#32;
            {news[0].TRAFFIC[0].count}%
          </p>
          <p>
            <span>{news[0].TRAFFIC[1].value}</span>&#32;
            {news[0].TRAFFIC[1].count}%
          </p>
          <p>
            <span>{news[0].TRAFFIC[2].value}</span>&#32;
            {news[0].TRAFFIC[2].count}%
          </p>
        </Flex>
        <Flex gap="small" className={styles.right}>
          <div className={styles.sent}>{news[0].SENT}</div>
          <div className={styles.square}>i</div>
          <div className={styles.square}></div>
        </Flex>
      </Flex>
      <Title
        level={3}
        style={{ color: "#008dff", fontWeight: 400, marginTop: 0 }}
      >
        {news[0].TI}
      </Title>
      <Flex gap="middle">
        <Flex gap="small">
          <Image width={20} src={earth} />
          <Link
            style={{
              fontSize: 16,
              textDecoration: "underline",
              textUnderlineOffset: 5,
            }}
            href={news[0].URL}
          >
            Punto-info.it
          </Link>
        </Flex>
        <Flex gap="small">
          <Image width={20} src={flag} />
          <span>{news[0].CNTR}</span>
        </Flex>
        <Flex gap="small">
          <Image width={20} src={book} />
          <span>{news[0].LANG}</span>
        </Flex>
        <Flex gap="small">
          <Image width={15} src={person} />
          <span>{news[0].AU.join(",")}, et al.</span>
        </Flex>
      </Flex>
      <div
        className={styles.highlights}
        dangerouslySetInnerHTML={{ __html: news[0].HIGHLIGHTS.join(";") }}
      />
      <div style={{ color: "#008dff", marginBottom: 20 }}>
        Show more <Image width={15} src={arrow} />
      </div>
      <Flex gap="middle" style={{ marginBottom: 30 }}>
        <div className={styles.kw}>
          <img width={10} src={person} />
          <span>{news[0].KW[0].value} </span>
          <span>{news[0].KW[0].count}</span>
        </div>
        <div className={styles.kw}>
          <img width={15} src={building} />
          <span>{news[0].KW[1].value} </span>
          <span>{news[0].KW[1].count}</span>
        </div>
        <div className={styles.kw}>
          <img width={15} src={cube} />
          <span>{news[0].KW[2].value} </span>
          <span>{news[0].KW[2].count}</span>
        </div>
        <div className={styles.kw}>
          <span>{news[0].KW[3].value} </span>
          <span>{news[0].KW[3].count}</span>
        </div>
        <div className={styles.kw}>
          <span>{news[0].KW[3].value} </span>
          <span>{news[0].KW[3].count}</span>
        </div>
        <div className={styles.kw}>
          <span>{news[0].KW[3].value} </span>
          <span>{news[0].KW[3].count}</span>
        </div>
        <div>
          <div style={{ color: "#008dff" }}>Show All +9 </div>
        </div>
      </Flex>
      <Link
        style={{
          fontSize: 18,
          background: "#302D39",
          padding: 10,
          borderRadius: 10,
        }}
        href={news[0].URL}
      >
        Original Source
      </Link>
      <Flex justify="space-between" style={{ fontSize: 18, marginTop: 30 }}>
        <div>
          <span>Duplicates:</span> 192
        </div>
        <div>
          <span>By Relevance</span> <Image width={15} src={down} />
        </div>
      </Flex>
      <Flex className={styles.card}>
        <div>
          <Flex gap="middle">
            <span>{issueDate}</span>
            <div>{news[0].REACH} Top Reach</div>
          </Flex>
          <Title
            level={3}
            style={{ color: "#008dff", fontWeight: 400, marginTop: 0 }}
          >
            {news[0].AB}
          </Title>

          <Flex gap="middle">
            <Flex gap="small">
              <Image width={20} src={ria} />
              <div style={{ color: "#008dff" }}>ria.ru</div>
            </Flex>
            <Flex gap="small">
              <Image width={20} src={flag} />
              <span>{news[0].CNTR}</span>
            </Flex>
            <Flex gap="small">
              <Image width={20} src={person} />
              <span>{news[0].AU.join(",")}, et al.</span>
            </Flex>
          </Flex>
        </div>
        <Flex gap="small" className={styles.right}>
          <div className={styles.square}>i</div>
          <div className={styles.square}></div>
        </Flex>
      </Flex>
      <div className={styles.duplicates}>
        <Image width={15} src={down} /> View Duplicates
      </div>
    </div>
  );
};

export default Page;
