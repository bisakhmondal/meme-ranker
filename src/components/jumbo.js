import React from 'react';
import './jumbo.css';
import 'tachyons';
const Hero=()=>{
    return (
        <div class="jumbotron">
        <div class="container pa2">
          <h1 class="display-2">{`Welcome Memers ;)`}</h1>
          <p>This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.</p>
          {/* <p><a class="btn btn-primary btn-lg" href="#" role="button">Learn more &raquo;</a></p> */}
          <div class="pa0-l">
  <div class="bg-animate shadow-5 center mw7  pa4 br3-ns ba b--black-10">
    <div class="cf bn ma0 pa0">
      <legend class="pa0 f5 f4-ns mb3 tc black-80">Contribute another meme</legend>
      <div class="cf ">
        {/* <label class="clip" for="email-address">Email Address</label> */}
        {/* <label for="comment" class="f3 b">Links</label> */}
        <input class="f6 f5-l binput-reset bn fl black-80 bg-white pa3 lh-solid w-80  br2-ns br--left-ns " placeholder="image url" type="text" name="email-address" id="email-address" />
        <input class="f6 f5-l button-reset fl pv3 tc bn bg-animate bg-blue hover-bg-black white pointer w-20   br2-ns br--right-ns " type="submit" value="Submit" />
      </div>
    </div>
  </div>
</div>
        </div>
      </div>

    );
}
export default Hero;