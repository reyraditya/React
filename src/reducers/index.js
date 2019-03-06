import { combineReducers } from 'redux';

// songsReducer and selectedSongReducer adalah departemen dari analogi asuransi

// songsReducer bertugas utk memberikan nilai awal
const songsReducer = () => {
    return [
        {title: 'Forever Young', artist: 'BLACKPINK', duration: '4:05'},
        {title: 'Lucid Dream', artist: 'Monogram', duration: '3:09'},
        {title: 'Got Paid', artist: 'Sigala, Ella Eyre, Meghan Trainor', duration: '4:20'},
        {title: 'Save Me', artist: 'BTS', duration: '2:12'},
        {title: 'Blood, Sweat, Tears', artist: 'BTS', duration: '5:15'},
    ]
}

// Pada aplikasi berjalan pertama kali, semua reducers(departemen) akan dijalankan,
// saat itu var selectedSong bernilai undefined. Sementara itu,
// Reducers tidak boleh mereturn / menghasilkan nilai undefined (rule dr redux), 
// jadi var selectedSong kita isi null.
const selectedSongReducer = (selectedSong = null, action) => {
   if(action.type === 'SONG_SELECTED'){
       return action.payload; 
   } 
   // Ingat disini payload adalah detail dari lagu (lihat folder action). 
   // Maka maksud dari fn ini adalah, jika lagu dipilih, maka hasilkan detail lagunya.

   return selectedSong;
}


// songs dan selectedSong merupakan storage data dari analogi asuransi/lacinya reducers(departemen).
// kedua laci tsb dijadikan satu dengan dimasukkan ke dalam satu fn bernama combineReducers kemudian di export.
// state akhir
export default combineReducers ({
    //key: reducer
    songs: songsReducer,
    selectedSong: selectedSongReducer
})

// Data di function songsReducer disimpan pada variable songs dalam bentuk array of object.
// Detail lagu yang dipilih disimpan dalam variable selectedSong.