AFRAME.registerComponent("spheregenerator",{
    init:function(){
        let button = this.el
        button.addEventListener('click',function(){
            let scene = document.querySelector("#scene");
            let newbox = document.createElement('a-sphere');
            newbox.setAttribute('color',"yellow");
            newbox.setAttribute("scale","0.3 0.3 0.3");
            let newX = Math.random() * 2 -1;
            newbox.setAttribute("position",`${newX} 2 -3`);
            newbox.setAttribute("dynamic-body","shape:sphere")
            scene.appendChild(newbox);
        });
    },
});

/* AFRAME.registerComponent('spheregenerator', {
    init: function () {
        let button = this.el;
        button.addEventListener('click', function () {
            let scene = document.querySelector('#scene');
            let newbox = document.createElement('a-sphere');
 
            newbox.setAttribute('color', 'green');
            newbox.setAttribute('scale', '0.3 0.3 0.3');
 
            let newX = Math.random() * 2 - 1;
            newbox.setAttribute('position', `${newX} 2 3`);
            newbox.setAttribute('dynamic-body', 'shape:sphere');
            scene.appendChild(newbox);
        })
    }
}) */