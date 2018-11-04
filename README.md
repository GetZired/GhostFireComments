## Ghost Fire Comments for Ghost Blog

Ghost Fire Comments, GFC, uses [Firebase](https://firebase.google.com/)'s [Cloud Store](https://firebase.google.com/docs/firestore/) database for real-time comments.

GFC,  is suited for Ghost Blogs that are self-hosted where a tiny edit will be needed in the `post.hbs` and `screen.css` file. We hope once Ghost Apps becomes a thing, no theme file edits will be required.

GFC uses Twitter authentication to authenticate users. We use Twitter for few reasons:

1. We show a user's Twitter handle: @some-name
2. Their Twitter URL
3. An option to share a comment via a new tweet

To use any of the above, you will need to setup an external server where a `POST` request is made to retrieve data from an endpoint you set up. This is optional.

---

## Installation


The best way to get started is to clone this repo in your Ghost Theme home directory:

    $ cd ghost/content/themes/casper
    git clone ...

    # Add the following to your screen.css in the assets directory:
    @import "../../ghost-fire-comments/components/**/*.css";

    # yarn/npm install

    # Run gulp to add the css files to your existing stylesheet
    $ gulp

---

## Todo

This is just a quick demonstration of a firebase commenting system. Code clean up is heavily needed. We do not recommend this to be used in a production environment crucial components will be changed/replace.

## Contribute

We'd love to have your helping hand on `ghost-fire-comments`. There are many things to do before reaching version 1 such as updating this readme and many refactoring. Feel free to get in touch with me on [Twitter](https://www.twitter.com/mirmayne) if you have any questions.

Thanks!
