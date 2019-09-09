import styles from "./index.module.css";
import React, { Component } from "react";
import bindAll from "lodash.bindall";
import GithubIcon from "./images/icon--github.png";
import GithubIconHvred from "./images/icon--github-hovered.png";
import InstagramIcon from "./images/icon--instagram.png";
import InstagramIconHvred from "./images/icon--instagram-hovered.png";
import LinkedInIcon from "./images/icon--linkedin.png";
import LinkedInIconHvred from "./images/icon--linkedin-hovered.png";

class SidebarComponent extends Component {
  constructor() {
    super();

    this.state = {
      menus: [
        {
          name: "Instagram",
          icon: InstagramIcon,
          hovered: InstagramIconHvred,
          path: "https://instagram.com/jiajun.yan.travel"
        },
        {
          name: "Github",
          icon: GithubIcon,
          hovered: GithubIconHvred,
          path: "https://github.com/realfrancisyan"
        },
        {
          name: "LinkedIn",
          icon: LinkedInIcon,
          hovered: LinkedInIconHvred,
          path: "https://linkedin.com/in/realfrancisyan"
        }
      ]
    };

    bindAll(this, ["onHover"]);
  }

  onHover(e, src) {
    console.log(e.setAttribute);
    // e.setAttribute('src', src);
  }

  render() {
    return (
      <section className={styles.container}>
        <div className={styles.component}>
          <h3>Ping me on:</h3>
          <ul className={styles.pingMe}>
            {this.state.menus.map((item, index) => {
              return (
                <li key={index}>
                  <a href={item.path} target="_blank" rel="noopener noreferrer">
                    <img
                      src={item.icon}
                      alt="icon"
                      onMouseOver={e => (e.currentTarget.src = item.hovered)}
                      onMouseOut={e => (e.currentTarget.src = item.icon)}
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    );
  }
}

export default SidebarComponent;
