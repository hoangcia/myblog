import React from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';

import { Home, About, Page, NewBlogEntry } from '../';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.onLoad = this.onLoad.bind(this);

  }
  componentDidMount() {
    document.body.onload = (() => this.onLoad(jQuery));
  }

  //after body loaded
  onLoad($) {

    /* Mobile Menu
   ------------------------------------------------------ */
    var toggle_button = $("<a>", {
      id: "toggle-btn",
      html: "Menu",
      title: "Menu",
      href: "#"
    });
    
    var nav_wrap = $('nav#nav-wrap')
    var nav = $("ul#nav");

    /* if JS is enabled, remove the two a.mobile-btns 
    and dynamically prepend a.toggle-btn to #nav-wrap */
    nav_wrap.find('a.mobile-btn').remove();
    nav_wrap.prepend(toggle_button);

    toggle_button.on("click", function (e) {
      e.preventDefault();
      nav.slideToggle("fast");
    });

    if (toggle_button.is(':visible')) nav.addClass('mobile');
    $(window).resize(function () {
      if (toggle_button.is(':visible')) nav.addClass('mobile');
      else nav.removeClass('mobile');
    });

    $('ul#nav li a').on("click", function () {
      if (nav.hasClass('mobile')) nav.fadeOut('fast');
    });


    /* Smooth Scrolling
    ------------------------------------------------------ */
    $('.smoothscroll').on('click', function (e) {

      e.preventDefault();

      var target = this.hash,
        $target = $(target);

      $('html, body').stop().animate({
        'scrollTop': $target.offset().top
      }, 800, 'swing', function () {
        window.location.hash = target;
      });

    });


    /*	Back To Top Button
  ------------------------------------------------------- */
    var pxShow = 300; //height on which the button will show
    var fadeInTime = 400; //how slow/fast you want the button to show
    var fadeOutTime = 400; //how slow/fast you want the button to hide
    var scrollSpeed = 300; //how slow/fast you want the button to scroll to top. can be a value, 'slow', 'normal' or 'fast'

    // Show or hide the sticky footer button
    $(window).scroll(function () {

      if ($(window).scrollTop() >= pxShow) {
        $("#go-top").fadeIn(fadeInTime);
      } else {
        $("#go-top").fadeOut(fadeOutTime);
      }

    });
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/page" component={Page} />
        <Route exact path="/newBlogEntry" component={NewBlogEntry} />
      </Switch>
    )
  }
}
export default withRouter(App);
