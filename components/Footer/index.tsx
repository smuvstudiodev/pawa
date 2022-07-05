import React from "react";

interface IFooter {
  footerFixed: boolean;
}

const Footer = ({footerFixed}: IFooter) => {
  return (
    <footer className={footerFixed ? "footer" : "footer-relative"}>
      <div className="container">
        <div className="column mt-20 mb-20">
          <div>
            <small>support@pawa.ng</small>
          </div>
          <div>
            <small>
              Powered by <b>smuv legacy limited</b>
            </small>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
