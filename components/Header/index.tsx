import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Icon from "../../components/Icon";
import styles from "./header.module.scss";

const Header = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const router = useRouter();
  return (
    <header>
      <div className="header mt-10 mb-10">
        <div className="flex justify-content-between">
          <Link href="/">
            <a>
              <Icon icon="logoLight" />{" "}
            </a>
          </Link>

          <div className="headerNav">
            <Link href="/privacy-policy">
              <a>
                <div className="headerText">Privacy Policy</div>
                {router.asPath.includes("/privacy-policy") ? (
                  <hr className={styles.headerLine} />
                ) : (
                  ""
                )}
              </a>
            </Link>
            <Link href="/terms-of-service">
              <a>
                <div className="headerText">Terms of service</div>
                {router.asPath.includes("/terms-of-service") ? (
                  <hr className={styles.headerLine} />
                ) : (
                  ""
                )}
              </a>
            </Link>

            <button className="getAppButton">Get App</button>
          </div>
          <div className="sideBar">
            <img onClick={() => setToggle(!toggle)} src="/OpenMenuImg.png" />
            {toggle && (
              <aside className={toggle ? "showMobileNav" : "hideMobileNav"}>
                <>
                  <i onClick={() => setToggle(!toggle)}>
                    <img
                      src="/CloseImg.png"
                      style={{ fill: "#fff" }}
                      className="close"
                    />
                  </i>
                  <Link href="/">
                    <a>
                      <Icon icon="logoLight" />
                    </a>
                  </Link>
                  <div>
                    <Link href="/privacy-policy">
                      <a>
                        <div className="headerText">Privacy Policy</div>
                      </a>
                    </Link>
                    <Link href="/terms-of-service">
                      <a>
                        <div className="headerText">Terms of service</div>
                      </a>
                    </Link>
                    <hr className="mb-20" />
                    <button className="getAppButton">Get App</button>
                  </div>
                </>
              </aside>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
