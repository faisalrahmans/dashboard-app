import Header from "../header/Header";
import SideNavigation from "../sidebar/SideNavigation";
import { Col, Row } from "reactstrap";
import Calendar from "../../assets/calendar/calendar.png";
import Hint from "../../assets/Help/Help.png";
import BestProduct from "../../assets/NoPath-Copy/NoPath-Copy.png";
import ListProduct from "../../assets/NoPath-Copy/NoPath-Copy-small.png";
import '../dashboard/Dashboard.scss';
import { Container } from "@material-ui/core";
import { FaChevronDown, FaChevronUp, FaEllipsisV } from "react-icons/fa";

function Dashboard() {
  const styles = {
    contentDiv: {
      display: "flex",
    },
    contentMargin: {
      marginTop: "30px",
      marginLeft: "24px",
      marginRight: "32px",
      width: "100%",
    },
  };

  const n = 4;

  return (
    <>
      <Row>
        <Col>
          <Header></Header>
        </Col>
      </Row>

      <div className="main-dashboard" style={styles.contentDiv}>
        <SideNavigation></SideNavigation>
        <div style={styles.contentMargin}>
          <Row className="title-line">
            <Col xl="7" className="dashboard-title-box">
              <p className="dashboard-text">Dashboard</p>
            </Col>
            <Col xl="5" className="date-box">
              <Row className="date-content">
                <Col className="calendar-icon"><img src={Calendar} /></Col>
                <Col className="period-text" xl="2">Period</Col>
                <Col className="date-choose" xl="2">11 September 2018 - 14 September 2018</Col>
                <Col className="down-arrow-icon" xl="2"><FaChevronDown /></Col>
              </Row>
            </Col>
          </Row>
          <Row className="market-line">
            <Col>
              <p className="market-text">MARKET INSIGHT</p>
            </Col>
            <Col>
              <Row className="hint-group" >
                <Col className="hint-icon"><img src={Hint} /></Col>
                <Col className="hint-text"><a>Click here for help</a></Col>
                <Col className="up-icon"><FaChevronUp /></Col>
              </Row>
            </Col>
          </Row>
          <Row className="sales-turnover-group" />
          <Row className="main-group">
            <Col className="chart-group">
              <Row>Chart</Row>
            </Col>
            <Col>
              <Row className="detail-group">
                <Col className="best-seller-group">
                  <Row className="title-group">
                    <Col className="title">Best Selling SKU</Col>
                    <Col className="dot-icon"><FaEllipsisV /></Col>
                  </Row>
                  <Row className="first-item-group">
                    <Col><img src={BestProduct} /></Col>
                    <Col className="detail-product">
                      <Row>
                        <Col>
                          <Row className="product-name">[Nama Produk]</Row>
                          <Row className="product-detail">
                            <Col>Rp. XXX</Col>
                            <Col>[jml terjual]</Col>
                          </Row>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  {
                    [...Array(n)].map((elementInArray, index) => (
                      <div key={index}>
                        <Row className="list-item-group">
                          <Col><img src={ListProduct} /></Col>
                          <Col className="detail-product">
                            <Row>
                              <Col>
                                <Row className="product-name">[Nama Produk]</Row>
                                <Row className="product-detail">
                                  <Col>Rp. XXX</Col>
                                  <Col>[jml terjual]</Col>
                                </Row>
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                      </div>
                    )
                    )
                  }
                </Col>
                <Col className="top-competitor-group">
                  <Row className="title-group">
                    <Col className="title">Top Competitor SKU</Col>
                    <Col className="dot-icon"><FaEllipsisV /></Col>
                  </Row>
                  <Row className="first-item-group">
                    <Col><img src={BestProduct} /></Col>
                    <Col className="detail-product">
                      <Row>
                        <Col>
                          <Row className="product-name">[Nama Produk]</Row>
                          <Row className="product-detail">
                            <Col>Rp. XXX</Col>
                            <Col>[jml terjual]</Col>
                          </Row>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  {
                    [...Array(n)].map((elementInArray, index) => (
                      <div key={index}>
                        <Row className="list-item-group">
                          <Col><img src={ListProduct} /></Col>
                          <Col className="detail-product">
                            <Row>
                              <Col>
                                <Row className="product-name">[Nama Produk]</Row>
                                <Row className="product-detail">
                                  <Col>Rp. XXX</Col>
                                  <Col>[jml terjual]</Col>
                                </Row>
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                      </div>
                    )
                    )
                  }
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}

export default Dashboard;