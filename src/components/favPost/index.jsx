import React from "react";
import styles from "./index.module.css";
import MenuComponent from "../menu";
import SidebarComponent from "../sidebar";
import LinkIcon from "./images/icon--link.png";
import moment from "moment";

const FavPostComponent = props => {
  const { state, handleExpandDesc, handleImageLoaded } = props;
  const menu = {
    title: "Favorites",
    desc: "收藏",
    showBack: true,
    path: "/favorites"
  };

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <MenuComponent menu={menu}></MenuComponent>
        <div className={styles.postWrapper}>
          {state.postList.length ? (
            <div>
              <h2>{state.postList[0].parentTitle}</h2>
              <div className={styles.posts}>
                {state.postList.map((post, index) => {
                  return (
                    <div className={styles.post} key={index}>
                      <div className={styles.top}>
                        {state.imgIsLoaded ? null : (
                          <div className={styles.appIcon}></div>
                        )}
                        <img
                          src={post.appIcon}
                          alt="app icon"
                          className={styles.appIcon}
                          style={state.imgIsLoaded ? {} : { display: "none" }}
                          onLoad={handleImageLoaded}
                        />
                        <div className={styles.topRight}>
                          <h3>{post.title}</h3>
                          <p className={styles.appLink}>
                            {+state.postType === 0 ? (
                              <span>{post.formattedPrice}</span>
                            ) : (
                              ""
                            )}
                            <a
                              href={post.appLink}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <img src={LinkIcon} alt="link" />
                            </a>
                          </p>
                          <p className={styles.date}>
                            {moment(post.createdAt).format("MMMM Do, YYYY")}
                          </p>
                        </div>
                      </div>

                      {post.body ? (
                        <div
                          className={styles.desc}
                          onClick={() => handleExpandDesc(post)}
                        >
                          {post.body.split("\n").map((i, key) => {
                            return key < (post.expandDesc ? 1000 : 3) ? (
                              <div className={styles.descLine} key={key}>
                                {i}
                              </div>
                            ) : (
                              ""
                            );
                          })}
                        </div>
                      ) : null}

                      {+state.postType === 0 ? (
                        post.screenshotUrls ? (
                          <div className={styles.screenshots}>
                            {post.screenshotUrls.map((screenshot, ssIdx) => {
                              return (
                                <img
                                  src={screenshot}
                                  alt="screenshot"
                                  key={ssIdx}
                                />
                              );
                            })}
                          </div>
                        ) : null
                      ) : null}
                    </div>
                  );
                })}
              </div>
            </div>
          ) : null}
        </div>
      </div>
      <SidebarComponent></SidebarComponent>
    </section>
  );
};

export default FavPostComponent;
