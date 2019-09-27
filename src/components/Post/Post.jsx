import React from 'react';
import post from './Post.module.css';

const Post = () => {

    return (
        <div className={post.post}>
            <img src='https://www.marinamirage.com.au/wp-content/uploads/logo_australia-post.png'/>
            <div className={post.user}>
                <h4>UserName</h4>
                <h4>UserLastName</h4>
            </div>
            <p>Me y les doy un respiro de mí.
                Por algo será que subo cada 3 o 4 días fotos mías, casi siempre primeros planos de mi cara sonriente.
                Pero me parece en realidad poco interesante eso, me parecen más profundas mis contradicciones, mis
                miedos, mis verdades que no muestro. Escapo por un momento de mi foto y me zambullo en estos paisajes
                llenos de vida y de calma. Seguramente la naturaleza sea lo más parecido a la paz. Fotos que me
                inspiran, me conectan con lo básico y con la vida.
                Generalmente me muestro linda y hasta me olvido de contar o conectarme con lo que verdaderamente me hace
                feliz que es Actuar.
            </p>
        </div>

    );

}

export default Post;