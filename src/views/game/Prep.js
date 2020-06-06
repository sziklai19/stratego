//import './board.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector/*, useDispatch*/ } from 'react-redux';
import { Board } from './board/Board';
import { Figure } from './figure/Figure';

export function Prep() {
    //const dispatch = useDispatch();
    //const items = useSelector(state => state.board.tiles);
    const figures = useSelector(state => state.player[0].figures);
    //console.log(useSelector(state => state.board.count));

    //const createTile = (tileId) => dispatch(addTile(tileId));
    //const removeTile = (tileId) => dispatch(removeTile(tileId));
    //const markTile = (tileId) => dispatch(selectTile(tileId));

    return (
        <>
            <div className="container-fluid p-5 m-0">
                <div className="row">
                    <h1 className="col bg-primary text-light p-3">Előkészítő oldal</h1>
                </div>
                <div className="row">
                    <div className="col col-sm-12 col-md-6 col-lg-6 col-xl-5">
                        <Board prep={true} />
                    </div>
                    <div className="col col-sm-12 col-md-6 col-lg-6 col-xl-7">
                        {figures.map((item, key) => {
                            if (item.added === true) {
                                return null;
                            } else {
                                return (
                                    <div key={'div' + key} style={{ width: "100px", margin: 5, padding: 5, border: "1px solid gray", float: "left" }}>
                                        <Figure id={key} key={'figure' + key} />
                                    </div>
                                )
                            }
                        })}
                    </div>
                </div>
                <div className="row m-2">
                    <Link to="/game" className="btn btn-outline-primary">Játék indítása</Link>
                </div>
            </div>
        </>
    )
}
