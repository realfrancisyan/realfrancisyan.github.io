import React, { Component } from 'react';
import bindAll from 'lodash.bindall';
import IndexComponent from '../components/index/index';
import { faMediumM, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faBook } from '@fortawesome/free-solid-svg-icons';

class Index extends Component {
  constructor() {
    super();

    this.state = {
      content: {
        title: 'A Warm Welcome.',
        content: [
          'Hey, I am Jiajun Yan, a junior Web Developer currently based in Guangzhou, China with strong interests in React, Vue and JavaScript performance.',
          'Graduated from Cardiff University, Wales with a Master’s degree in Computing (Distinction), where I found myself truly passionate about Web Technologies, travel and making friends.',
          'I am active on social media and also in love with writing blog posts and taking notes. Feel free to ping me on any of the following platforms below.'
        ]
      },
      links: [
        {
          href: 'https://medium.com/@realfrancisyan',
          icon: faMediumM
        },
        {
          href: 'https://www.instagram.com/jiajun.yan.travel',
          icon: faInstagram
        },
        {
          href: 'https://www.instapaper.com/p/realfrancisyan',
          icon: faBook
        }
      ]
    };

    bindAll(this, []);
  }

  render() {
    return <IndexComponent state={this.state} />;
  }
}
export default Index;
