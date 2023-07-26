import React from 'react';
import './Grandpa.css';
import Father from '../Father/Father.js';
import Uncle from '../Uncle/Uncle.js';
import Aunty from '../Aunty/Aunty.js';

const Grandpa = () => {
    const house = 7;
    return (
        <section className='grandpa' >
            <h3>Grand pa</h3>
            <div style={{ display: 'flex' }}>

                <Father house={house}></Father>
                <Uncle house={house}></Uncle>
                <Aunty house={house}></Aunty>
            </div>

        </section>
    );
};

export default Grandpa;