

export const fadeIn=(direction,delay)=>{
    return {
        hidden:{
            y:direction === "up" ? 40 :direction === "down" ? -40:0,
            x:direction === "left" ? 40 :direction === "right" ? -40:0,
            Opacity:0
        },
        show:{
            x:0,
            y:0,
            Opacity:1,
            transition:{
                type:"tween" ,
                duration:1.2,
                delay:delay,
                ease:[0.25,0.25,0.25,0.75],
            }

        }
    }
}