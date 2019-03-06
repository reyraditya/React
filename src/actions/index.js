// Action merupakan form dari client di analogi asuransi.

// Pada app, masing2 lagu memiliki button, dimana setiap button memegang object(detail lagu tersebut). Saat diclick, button tersebut menjalankan fn selectSong dan disimpan dalam parameter song.
export const selectSong = (song) => { //selectSong adalah action creator
    return{
        type: 'SONG_SELECTED', //type dan payload adalah actionnya.
        payload: song // payload artinya isi detail lagunya.
    }
}
