import React, {Component} from 'react';
import { connect } from 'react-redux'; //menjembatani redux store/storage dg component
import {selectSong} from '../actions';

class SongList extends Component{

    renderList = () => { // fn renderList berfungsi merubah object menjadi bentuk list

        return this.props.songs.map ((song) => { // song akan diisi objects: title, artist, duration yang berasal dari songs (di file index.js/reducers) 
            return (
                    <div className="d-flex justify-content-between pt-4 mb-1" key={song.title}>
                        <div>{song.title}</div>
                        <button className="btn btn-outline-primary my-2" onClick ={()=>(this.props.selectSong(song))}
                                >Select
                        </button>
                    </div>
            )
        })
    } // selectSong dari index.js/action

    render(){ // setelah object berbentuk list, kita tampilkan disini.
        return(
            <div>
                {this.renderList()}
            </div>
        )
    }
}

// Apa yang direturn/dihasilkan oleh fn ini akan disimpan di this.props
const mapsStateToProps = (state) => { 
    //parameter 'state' bebas, bisa apa aja. fungsi parameter state adalah menyimpan data dari state redux (data awal).
    return {songs: state.songs} 
    // redux mengirimkan semua form (songs dan selectedSong), sementara di SongList kita hanya membutuhkan songs saja, jadi kita extract dengan state(data dr redux).songs.

}

export default connect(mapsStateToProps, {selectSong})(SongList);

// fn mapStateToProps berfungsi utk mengambil data dari property song di component oleh redux. kemudian data yang diambil disimpan dalam variable state.
// mapStateToProps: nama convention.
// cara bacanya export default adalah:
// tolong hubungkan redux dengan component SongList dengan mapsStateToProps, dan hubungkan component ke redux dengan fn selectSong



// fn selectSong berfungsi utk send data dari component ke redux store
