import React from "react";
import "./dashboardInfo.scss";
import imgPopup from "../../../../assets/images/popupImg.svg";
import back from "../../../../assets/images/icons/back.svg";
import ReactModal from "react-modal";

class DashboardInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // facilityActive: this.props.facilityActive
      isOpen: false
    };
  }
  isOpenModal = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    const { facilityName } = this.props.facilityActive.active;
    return (
      <div className="dashboard_blog">
        <div className="dashboard_blog_info">
          <div className="dashboard_blog_info_head">
            <img
              className="dashboard_blog_info-imgName"
              src={imgPopup}
              alt="imgPopup"
            />
            <div className="dashboard_blog_info_head_info">
              <span className="dashboard_blog_info_head_info-title">
                {facilityName}
              </span>
              <span>First Racket</span>
            </div>
            <img
              onClick={this.isOpenModal}
              className="dashboard_blog_info-imgpopup"
              src={imgPopup}
              alt="imgPopup"
            />
          </div>
          <div className="dashboard_blog_date">
            <div className="dashboard_blog_date-block">
              <span className="dashboard_blog_date-block-title">
                Start Date
              </span>
              <span>May 2015</span>
            </div>
            <div className="dashboard_blog_date-block">
              <span className="dashboard_blog_date-block-title">
                Team Members
              </span>
              <span>25 +</span>
            </div>
          </div>
          <div className="dashboard_blog_date">
            <div className="dashboard_blog_date-block">
              <span className="dashboard_blog_date-block-title">Plan Name</span>
              <span>May 2015</span>
            </div>
            <div className="dashboard_blog_date-block dashboard_blog_date-block-modife">
              <span className="dashboard_blog_date-block-title">
                Admin Name
              </span>
              <span>25 +</span>
            </div>
          </div>
        </div>
        <ReactModal
          ariaHideApp={false}
          isOpen={this.state.isOpen}
          className="Modal"
          shouldCloseOnOverlayClick
          onRequestClose={this.isOpenModal}
        >
          <div className="modal">
            <img
              className="modal-back"
              onClick={this.isOpenModal}
              src={back}
              alt="back"
            />
            <div className="modal-head">
              <img
                className="dashboard_blog_info-imgName"
                src={imgPopup}
                alt="imgPopup"
              />
              <div className="dashboard_blog_info_head_info">
                <span className="dashboard_blog_info_head_info-title">
                  {facilityName}
                </span>
                <span>First Racket</span>
              </div>
            </div>
            <div className="modal-desc">
              <div className="modal-desc-title">Description</div>
              <div className="modal-desc-content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure.
              </div>
            </div>
            <div className="modal-content">
              <div className="dashboard_blog_date">
                <div className="dashboard_blog_date-block">
                  <span className="dashboard_blog_date-block-title">
                    Start Date
                  </span>
                  <span>May 2015</span>
                </div>
                <div className="dashboard_blog_date-block">
                  <span className="dashboard_blog_date-block-title">
                    Start Date
                  </span>
                  <span>May 2015</span>
                </div>
                <div className="dashboard_blog_date-block">
                  <span className="dashboard_blog_date-block-title">
                    Start Date
                  </span>
                  <span>May 2015</span>
                </div>
                <div className="dashboard_blog_date-block">
                  <span className="dashboard_blog_date-block-title">
                    Team Members
                  </span>
                  <span>25 +</span>
                </div>
              </div>
              <div className="dashboard_blog_date">
                <div className="dashboard_blog_date-block">
                  <span className="dashboard_blog_date-block-title">
                    Start Date
                  </span>
                  <span>May 2015</span>
                </div>
                <div className="dashboard_blog_date-block">
                  <span className="dashboard_blog_date-block-title">
                    Start Date
                  </span>
                  <span>May 2015</span>
                </div>
                <div className="dashboard_blog_date-block">
                  <span className="dashboard_blog_date-block-title">
                    Start Date
                  </span>
                  <span>May 2015</span>
                </div>
                <div className="dashboard_blog_date-block">
                  <span className="dashboard_blog_date-block-title">
                    Team Members
                  </span>
                  <span>25 +</span>
                </div>
              </div>
            </div>
          </div>
        </ReactModal>
      </div>
    );
  }
}
export default DashboardInfo;
