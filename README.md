# Masilotti.com, built with Jekyll and Tailwind CSS

This repo holds the code for [Masilotti.com](https://masilotti.com).

The site is built with Jekyll and styled with Tailwind CSS.

## Install

```bash
sudo docker pull timbru31/ruby-node:2.7
sudo docker run -i -v "$PWD":/usr/src/app -p 4000:4000 -t timbru31/ruby-node:2.7  /bin/bash

git clone git@github.com:joemasilotti/masilotti.com-tailwind masilotti.com
cd masilotti.com
bin/bootstrap

ldtuyen@pc:~/develop$ sudo docker ps -a
CONTAINER ID        IMAGE                    COMMAND             CREATED             STATUS                     PORTS               NAMES
c904c5948332        timbru31/ruby-node:2.7   "/bin/bash"         4 weeks ago         Exited (130) 3 weeks ago                       festive_panini

sudo docker start c904c5948332 && sudo docker attach $_
```

## Usage

```bash
# Start the server on http://localhost:5000
bin/start

# JEKYLL_ENV=production bundle exec jekyll serve --livereload --drafts --future --port 4000 --livereload_port 35729 "$@"

# Create a new post
bin/new POST_TITLE
```

## To-do list
[] _includes/newsletter.html
[x] remove content about.md
[] mugshotbot
[] _includes/xcode.html
[] View page source > find `masilotti.com`
[] New line in `class="highlight"`
[-] Build slow
    [] [Cause of slow](https://github.com/joemasilotti/masilotti.com/commit/d543b7eb2ba5a5ee8bc2a7b35f8616d2c801a274)
    [] Alternative
        [] https://github.com/purifycss/purifycss
        https://github.com/giakki/uncss
        https://github.com/FullHuman/purgecss

[x] [2021-02-07 06:13:51] ERROR `/about/icons/favicon-16x16.png` not found. 
[x] [2021-02-07 06:13:51] ERROR `/about/icons/apple-touch-icon.png` not found.
[x] logo
    [x] images/author.png