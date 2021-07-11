import React from 'react';
import { autobind } from 'core-decorators';
import cookie from 'js-cookie';
import siteConfig from '../../../site_config/site';

@autobind
class Language extends React.Component {
  onLanguageChange(language) {
    window.location = window.location.protocol + '//' + window.location.host;
  }

  getLanguage() {
    return 'zh-cn';
  }
}

export default Language;
