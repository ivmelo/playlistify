var app = new Vue({
    el: '#app',
    data: {
        clientId: null,
        userId: null,
        accessToken: null,
        spotifyEndpoint: 'https://api.spotify.com/v1/',
        playlistName: 'Your Playlist',
        playlistUrl: null,
        savePlaylistButtonLabel: 'Save Playlist',
        playlistId: '',
        isEditingplaylistName: false,
        queryBox: '',
        currentPage: 0,
        currentQuery: '',
        results: 20,
        tracks: [],
        selectedTracks: [],
        isLoading: false,
        showResults: false,
        savingOrSaved: false,
    },
    created: function(){
        this.clientId = spotifyClientId;

        var params = this.extractParamsFromURIFragment();

        // Removes accessToken from url.
        history.replaceState(null, 'Playlistify', window.location.pathname);

        if(params['access_token'] != null) {
            this.accessToken = params['access_token'];

            axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.accessToken;
            axios.defaults.baseURL = this.spotifyEndpoint;

            axios.get('me').then(function(response){
                app.userId = response.data.id;
            }).catch(function(error){
                alert('Error, please try again.');
            });
        }

        console.log(this.accessToken);
    },
    methods: {
        search: function() {

            if (this.queryBox == '') {
                alert('Please type in something to search.');
                this.showResults = false;
                return;
            } else {
                this.showResults = true;
                this.isLoading = true;
            }

            if (this.currentQuery === this.queryBox) {
                this.currentPage++;
            } else {
                this.currentQuery = this.queryBox;
                this.currentPage = 0;
            }

            axios.get('search' + '?q=' + this.queryBox + '&type=track&offset=' + this.currentPage * this.results).then(function(response){
                if (app.currentPage > 0) {
                    for (var i = 0; i < response.data.tracks.items.length; i++) {
                        app.tracks.push(response.data.tracks.items[i]);
                    }
                } else {
                    app.tracks = response.data.tracks.items;
                }
                app.isLoading = false;
            }).catch(function(error){
                alert('Error, please try again.');
            });

        },
        add: function(index) {
            var track = this.tracks[index];
            this.tracks.splice(index, 1);
            this.selectedTracks.push(track);
        },
        remove: function(index) {
            this.selectedTracks.splice(index, 1);
        },
        playTrackPreview: function(index) {
            var track = this.tracks[index];

            console.log(track.preview_url);
        },
        checkout: function() {
            if (this.playlistName.length > 0) {
                this.savingOrSaved = true;
                this.savePlaylistButtonLabel = 'Saving...';
                this.createPlaylist();
            } else {
                alert('You must give a name to your playlist.')
            }
        },
        extractParamsFromURIFragment: function () {
            var fragmentParams = {};
            var e,
            a = /\+/g,  // Regex for replacing addition symbol with a space
            r = /([^&;=]+)=?([^&;]*)/g,
            d = function (s) { return decodeURIComponent(s.replace(a, " ")); },
            q = window.location.hash.substring(1);

            while (e = r.exec(q)) {
                fragmentParams[d(e[1])] = d(e[2]);
            }
            return fragmentParams;
        },
        createPlaylist: function () {
            axios.post('users/' + this.userId + '/playlists', {
                name: this.playlistName
            }).then(function(response){
                app.playlistId = response.data.id;
                app.addSongsToPlaylist();
            }).catch(function(error){
                alert('Error, please try again.');
            });
        },
        addSongsToPlaylist: function () {
            var uris = [];

            for (var i = 0; i < this.selectedTracks.length; i++) {
                uris.push(this.selectedTracks[i].uri);
            }

            if (uris.length > 0) {
                axios.post('users/' + this.userId + '/playlists/' + this.playlistId + '/tracks', {
                    uris: uris
                }).then(function(response){
                    console.log(response);
                    // success
                    app.saved(response.data);
                }).catch(function(error){
                    console.log(error);
                });
            } else {
                alert('Not enough songs.');
            }
        },
        saved: function(data) {
            this.savePlaylistButtonLabel = 'Saved!';
            this.playlistUrl = 'https://open.spotify.com/user/' + this.userId + '/playlist/' + this.playlistId;
        },
        authUrl: function() {
            var authUrl = 'https://accounts.spotify.com/authorize';
            var responseType = 'token';
            var redirectUri = window.location.protocol + '//' + window.location.host + window.location.pathname;
            var scopes = 'playlist-read-private%20playlist-modify-public%20playlist-modify-private';

            console.log(redirectUri);

            return authUrl
            + '?client_id=' + this.clientId
            + '&response_type=' + responseType
            + '&redirect_uri=' + redirectUri
            + '&scope=' + scopes;
        }
    }
});
