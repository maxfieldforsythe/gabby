import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";

const isExternalUrl = (value) => /^https?:\/\//i.test(value);
const getLinkLabel = (link) => (isExternalUrl(link) ? "Link" : "PDF");
const getLinkActionText = (link) =>
  isExternalUrl(link) ? "Open article" : "Open document";
const getItemCategory = (item) => {
  if (item.link && item.video) return "Story + Video";
  if (item.video) return "Video Feature";
  if (item.link) {
    return isExternalUrl(item.link) ? "Published Story" : "PDF Feature";
  }
  return "Selected Work";
};
const formatItemNumber = (index) => String(index + 1).padStart(2, "0");

export const Portfolio = () => {
  return (
    <HelmetProvider>
      <Container className="About-header portfolio_page">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Portfolio </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
            <p className="portfolio_intro">
              A curated archive of reporting, research, and video work.
            </p>
          </Col>
        </Row>
        <div className="mb-5 po_items_ho">
          {dataportfolio.map((data, i) => {
            return (
              <article key={i} className="po_item">
                <div className="content">
                  <div className="po_item_meta">
                    <span className="po_item_index">{formatItemNumber(i)}</span>
                    <span className="po_item_category">{getItemCategory(data)}</span>
                  </div>
                  <h2 className="po_item_title">{data.description}</h2>
                  <div className="po_item_rule" />
                  <div className="po_item_actions">
                    {data.link !== "" && (
                      <a
                        className="po_action"
                        href={data.link}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <span className="po_action_label">{getLinkLabel(data.link)}</span>
                        <span className="po_action_text">{getLinkActionText(data.link)}</span>
                      </a>
                    )}
                    {data.video !== "" && (
                      <a
                        className="po_action"
                        href={data.video}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <span className="po_action_label">Video</span>
                        <span className="po_action_text">Watch clip</span>
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </HelmetProvider>
  );
};
