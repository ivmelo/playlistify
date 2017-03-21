# Playlistify
The easiest way to create Spotify playlists.

![App Demo](http://i.imgur.com/JWrVHX9.png)

[http://ivmelo.com/playlistify/](http://ivmelo.com/playlistify)

### Why did you build this???
I find the original way to create Spotify playlists overly complicated and repetitive. First you have to create a playlist, search for songs and then, click on 'Options' > 'Add To Playlist' > 'Your Playlist Name'. That's for each song. Ouch!

Doing those steps several times is very slow (not to mention boring), so I decided to create an app to add the songs with a single click, and after adding all of the songs, you can just save your playlist.

Think of it as a shopping cart for Spotify songs, where the checkout basically saves your playlist.

DISCLOSURE: This is my first VueJS app and I'm pretty sure there are better ways to do some of the things I've done here. I'm still learning Vue, so take it easy.

### How do I run it locally?
First you have to create a [Spotify App](spotify developers).

```
git clone git@github.com:ivmelo/playlistify.git
cd playlistify
mv .example.env.js env.js
```
Edit env.js and add your app's client id.
```
php -S localhost:8000
```

In this example I used PHP's built-in web server. But you can use any web server you want, or host it anywhere.

### How can I just use it?
Just head to [http://ivmelo.com/playlistify/](http://ivmelo.com/playlistify).

### License
The MIT License (MIT)

Copyright (c) 2017 Ivanilson Melo

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
