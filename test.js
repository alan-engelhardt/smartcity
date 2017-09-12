window.addEventListener('load', function(){
    let tl = new TimelineMax();
    tl.timeScale(2);
    tl.staggerFrom('.tree', 3, 
        {
            y: -800,
            rotation: function(){
                return Math.random()*180
            }
        }, 0.05
    ).staggerFrom('.house:nth-child(even)', 3, 
        {
            x: -800,
            ease: Elastic.easeOut.config(1, 0.3)
        }, 0.1
    ).staggerFrom('.house:nth-child(odd)', 1.5, 
        {
            y:-800,
            ease: Power4.easeOut
        }, 0.1, "-=2.5")
})