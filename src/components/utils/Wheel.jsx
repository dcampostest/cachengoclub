import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import WheelComponent from './WheelComponent'

function uno_a_tres() {
    // sea n100 un número del 1 al 100 y n3 el resultado de tu función
    var n100 = Math.floor(Math.random()*1000+1);
    console.log(n100)
    var win = ''
    if(n100<=1) {
        win = '1xBirrita';
    } else if (n100<=2) {
        win = '1xFernecito';  
    }else if (n100<=20) {
        win = '1xHappy Birrita';  
    } else if (n100<=30) {
        win = '1xHappy Gin';  
    } else {
        win = 'Seguí Particip.';
    }
    return win;
  }

export default function Wheel() {
    const segments = [
        'Seguí Particip.',
        '1xHappy Birrita',
        '1xHappy Gin',
        'Seguí Particip.',
        '1xBirrita',
        '1xFernecito',
        'Seguí Particip.',
        '1xHappy Birrita',
        '1xHappy Gin',
        'Seguí Particip.',
        '1xBirrita',

    ]
    const segColors = [
        '#EE4040',
        '#F0CF50',
        '#815CD1',
        '#3DA5E0',
        '#34A24F',
        '#F9AA1F',
        '#EC3F3F',
        '#FF9000',
        '#EE4040',
        '#F0CF50',
        '#815CD1'
    ]
    const onFinished = (winner) => {
        console.log(winner)
    }
    return (

        <WheelComponent
        segments={segments}
        segColors={segColors}
        onFinished={(winner) => onFinished(winner)}
        winningSegment={uno_a_tres()}
        primaryColor='#4F3F34'
        contrastColor='white'
        buttonText='Juega'
        isOnlyOnce={true}
        size={155}
        upDuration={1000}
        downDuration={100000}
        fontFamily='Arial'
        />
    )
}