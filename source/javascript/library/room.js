class Room {
    constructor(create_obj) {
        this.Start = create_obj; // Give it the instantiations

        this.RoomStart = true;
        gameObjects.forEach((obj) => obj.Restart());
        this.Start();
    }

    Restart() {
        this.RoomStart = true;
        gameObjects.forEach((obj) => obj.Restart());
        this.Start();
    }

    Update() {
        if(this.RoomStart) {
            gameObjects.forEach((obj) => { obj.Instantiations.forEach((inst) => inst.Start()); });
            this.RoomStart = false;
        } else
            gameObjects.forEach((obj) => obj.Update());
    }

    Render() {
            gameObjects.forEach((obj) => obj.Draw());
    }
}