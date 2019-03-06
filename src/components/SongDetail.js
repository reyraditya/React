import React, {Component} from 'react';
import {connect} from 'react-redux';

class SongDetail extends Component{
    render(){
        if(this.props.yangDiSelect == null){
            return <div><h1 className="border-top pt-3">Select Song</h1></div>
        }
        return(
            <div className="border-top pt-3">
                <h1 className="mb-4">Detail Song</h1>
                <p>Title    : {this.props.yangDiSelect.title}</p>
                <p>Artist   : {this.props.yangDiSelect.artist}</p>
                <p>Duration : {this.props.yangDiSelect.duration}</p>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {yangDiSelect: state.selectedSong} // lihat penjelasan ttg mapStateToProps di songlist
}

export default connect(mapStateToProps)(SongDetail);