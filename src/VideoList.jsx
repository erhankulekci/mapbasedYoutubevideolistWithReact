import React, { Component } from "react";
import axios from "axios";

class VideoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prevY: 0,
    };
  }

  componentDidMount() {
    var options = {
      root: null,
      rootMargin: "0px",
      threshold: 1.0,
    };

    this.observer = new IntersectionObserver(
      this.handleObserver.bind(this),
      options
    );
    this.observer.observe(this.loadingRef);
  }

  handleObserver(entities, observer) {
    const y = entities[0].boundingClientRect.y;
    if (this.state.prevY > y) {
      //yeni kayıtların çağrılacağı yer
      this.props.handleChange();
    }
    this.setState({ prevY: y });
  }

  render() {
    const loadingCSS = {
      height: "75px",
      margin: "30px",
    };

    const loadingTextCSS = { display: this.props.loading ? "block" : "none" };

    return (
      <div style={{ width: "600px", height: "400px", overflow: "auto" }}>
        <div style={{ minHeight: "600px" }}>
          {this.props.videos.map((video) => (
            <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.description} height="100px" width="200px" />
          ))}
        </div>
        <div
          ref={(loadingRef) => (this.loadingRef = loadingRef)}
          style={loadingCSS}
        >
          <span style={loadingTextCSS}>Loading...</span>
        </div>
      </div>
    );
  }
}

export default VideoList;
