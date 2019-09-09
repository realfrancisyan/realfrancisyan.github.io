import styles from "./index.module.css";
import React, { Component } from "react";
import BackIcon from "./images/icon--back.png";
import bindAll from "lodash.bindall";
import { withRouter } from "react-router-dom";

class MenuComponent extends Component {
  constructor() {
    super();

    bindAll(this, ["handleGoBack"]);
  }

  handleGoBack() {
    if (this.props.menu.path) {
      this.props.history.push(this.props.menu.path);
    } else {
      this.props.history.goBack();
    }
  }

  render() {
    return (
      <div className={styles.container}>
        {!this.props.menu.showBack ? (
          <h2>
            {this.props.menu.title} · {this.props.menu.desc}
          </h2>
        ) : (
          <h2 onClick={this.handleGoBack}>
            <img src={BackIcon} alt="back"></img>
            <span>Back</span>
          </h2>
        )}
      </div>
    );
  }
}

export default withRouter(MenuComponent);
