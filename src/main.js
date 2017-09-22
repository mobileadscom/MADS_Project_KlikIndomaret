/* global window, App_banner */
import Mads from 'mads-custom';
import './main.css';

class AdUnit extends Mads {
  render() {
    this.loadJS(this.resolve('./js/banner.js')).then(() => {
      App_banner.getInstance().init();
    });
    return '';
  }

  style() {
    return '';
  }

  events() {}

  openLandingPage() {
    this.tracker('E', 'landing_page');
    this.linkOpener('http://www.klikindomaret.com/product/insektisida-spray-12?utm_source=IMX&utm_medium=Interstitial&utm_campaign=BaygonAerosol_TeaBlossom_Indomaret');
  }
}

window.ad = new AdUnit();
