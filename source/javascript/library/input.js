class InputControl {
    constructor() {
        this.InputList = [];
    }

    IsPressed(name) {
        let input = this.InputList.find((inp) => inp.Name = name);
        return input.IsPressed;
    }
}
var inputControl = new InputControl();
class Input {
    constructor(name, key) {
        this.Name = name;
        this.Key = key;

        this.IsPressed = false;

        inputControl.InputList.push(this);
    }
}
document.addEventListener('keydown', 
    function(event) {
        let input = inputControl.InputList.find((inp) => inp.Key == event.Key);
        input.IsPressed = true;
    }
);
document.addEventListener('keyup', 
    function(event) {
        let input = inputControl.InputList.find((inp) => inp.Key == event.Key);
        input.IsPressed = false;
    }
);

class MouseControl {
    constructor() {
        this.X = 0;
        this.Y = 0;
        this.IsPressed = false;
    }
}
var mouseControl = MouseControl();
document.addEventListener('mousedown', 
    function(e) {
        mouseControl.IsPressed = true;

        mouse.X = e.clientX;
        mouse.Y = e.clientY;
    }   
);
document.addEventListener('mouseup', 
    function(e) {
        mouseControl.IsPressed = false;

        mouseControl.X = e.clientX;
        mouseControl.Y = e.clientY;
    }   
);
