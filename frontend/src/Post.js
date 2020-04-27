import React from 'react'

export default function Post(props) {
    return (
        <div class="post">
            
              <h1 class="ui header">{props.post.name}</h1>
              <h2 class="ui header">{props.post.email}</h2>
              <h3 class="ui header">{props.post.message}</h3>


              <div class="ui animated button" tabindex="0" bis_skin_checked="1">
                <div class="visible content" bis_skin_checked="1">Next</div>
                <div class="hidden content" bis_skin_checked="1">
                  <i class="right arrow icon"></i>
                </div>
              </div>
              <div class="ui vertical animated button" tabindex="0" bis_skin_checked="1">
                <div class="hidden content" bis_skin_checked="1">Shop</div>
                <div class="visible content" bis_skin_checked="1">
                  <i class="shop icon"></i>
                </div>
              </div>
              <div class="ui animated fade button" tabindex="0" bis_skin_checked="1">
                <div class="visible content" bis_skin_checked="1">Sign-up for a Pro account</div>
                <div class="hidden content" bis_skin_checked="1">
                  $12.99 a month
                </div>
              </div>

              

            </div>

    )
}

