var gameObjects = [];
class Instantiation {
    constructor(x, y, start_func, update_func) {
        this.X = x;
        this.Y = y;

        this.Start = start_func;
        this.Update = update_func;
    }

    Start() {
        this.Start();

        this.ImageIndex++;
        if(this.ImageIndex >= this.Sprite.ImageNumber)
            this.ImageIndex = 0;
    }

    Update() {
        this.Update();
    }
}
class GameObject {
    constructor(def_spr, start_func, update_func) {
        this.Sprite = def_spr;
        this.ImageSpeed = 1;
        this.ImageIndex = 0;

        this.Instantiations = [];
        this.InstStart = start_func;
        this.InstUpdate = update_func

        gameObjects.push(this);
    }

    Restart() {
        this.Instantiations = [];
    }

    Instantiate(x, y) {
        this.Instantiations.push(new Instantiation(x, y, this.InstStart, this.InstUpdate));
    }

    Draw() {
        this.Instantiations.forEach((inst) => spriteController.Draw(this.Sprite, inst.X, inst.Y, this.ImageIndex));
    }

    Update() {
        this.Instantiations.forEach((inst) => inst.Update());
    }

    Render() {
        this.Instantiations.forEach((inst) => inst.Render());
    }
}