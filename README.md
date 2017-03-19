# Playlistify
Create playlists for Spotify the easy way.

### Why?
I find the original way to create spotify playlists overly complicated and repetitive. You have to create a playlist, search for songs and then, click on 'Options' > 'Add To Playlist' > 'Your Playlist Name'. That's for each song. Ouch!

Doing those steps several times is very slow (not to mention boring), so I decided to create an app to add the songs with a single click, and after adding all of the songs, you can just save your playlist.

Think of it as a shopping cart for spotify songs, where the checkout basically saves your playlist.

DISCLOSURE: This is my first VueJS app and I'm pretty sure there's better ways to do some of the things I've done here. I'm still learning Vue, so take it easy.

### How?
```
git clone git@github.com:ivmelo/playlistify.git
cd playlistify
mv .example.env.js env.js
```
Edit env.js and add your client id.
```
php -S localhost:8000
```

You can replace ```php -S``` with the web server of your choice. i.e.: ```python -m SimpleHTTPServer 8000```. You know "how to web server", right?

### What if I'm lazy?
Just head to [http://ivmelo.com/playlistify/](http://ivmelo.com/playlistify). There you go, champs.
