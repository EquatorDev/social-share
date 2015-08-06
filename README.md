# social-share
Very simple social share plugin that allows to share a page on facebook, twitter, google plus, linkedin, pinterest and email.
No styling is applied to these as they are intended to be custom social buttons.

This is the basis of the share functionality that you can customise on a project basis.

## Usage

There is a demo page that shows the implementation of each social button.

Any element on the page can be a social button given that it has at least the class "sharepage-btn" and the data attribute data-social="(channel-name)".

The social channels values accepted are:
    "facebook"
    "twitter"
    "google"
    "pinterest"
    "linkedin"
    "email"

### Attributes

There is a series of attributes used to be passed to the share URL. It is important to notice that these values are for the share posts only, in some cases the social channels servers will crawl through the page and get the meta data content from there (To understand how the meta tags should work please follow this link: http://wordsby.pacienciacanda.com/social-sharing-through-meta-tags-part-i/)

    data-social : social channel name (as mentioned above)
    data-url : the page url
    data-text : the post text (for twitter it will be part of the tweet text)
    data-image : image to appear in the post
    data-hashtags : the hashtags to appear on the tweet (please remember this will affect the 140 character limit) - Twitter only
    data-related : the twitter usernames that will be shown as following suggestions after a tweet is sent - Twitter only
    data-source : the source of the page content - LinkedIn only
    data-mail : the email address used as sender - Email only
    data-subject : the subject of the email - Email only
    data-body: the body text of the email - Email only
