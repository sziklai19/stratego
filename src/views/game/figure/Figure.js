import './figure.css';
import React from 'react';
import { useSelector/*, useDispatch*/ } from 'react-redux';
//import { selectFigure } from '../../../state/board/actions';


export function Figure({ id, tile }) {
    const figures = useSelector(state => state.player[0].figures);

    function drag(ev) {
        ev.dataTransfer.setData("figure-id", id);
    }

    //const dispatch = useDispatch();

    //const items = useSelector(state => state.board.items);
    //const selected = useSelector(state => state.board.selected);

    //const select = (tileId) => dispatch(selectFigure(tileId));

    //document.documentElement.style.setProperty('--board-size', size);

    return (
        <div tile={tile} draggable onDragStart={drag} className='figure-container'>
            <div tile={tile} className="figure">
                <div tile={tile}>{id+': '+figures.find(item => item.id === parseInt(id)+1).type}</div>
            </div>
        </div>
    );
}