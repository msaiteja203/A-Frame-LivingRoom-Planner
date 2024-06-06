AFRAME.registerComponent("textgenerator", {
    init:function(){
        let box=this.el
 
        box.addEventListener('click', function(){
            console.log("Box Clicked");
 
            let scene = document.querySelector('#scene');
            console.log(scene);
 
            let newText = document.createElement('a-text');
            console.log(newText);
            newText.setAttribute('color',"yellow");
 
 
            newText.setAttribute('value', "Hello, World!");
           
 
            let boxPosition = box.getAttribute('position');
            let textPosition = {
                x: boxPosition.x,
                y: boxPosition.y + 2,
                // adjust the Y-coordinate to position the text above the box
                z: boxPosition.z
            };
 
            newText.setAttribute('position', textPosition);
 
            scene.appendChild(newText);
 
        })
    }
})