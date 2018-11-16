// Sound effects
new SoundResource("Jump", "source/sounds/270337__littlerobotsoundfactory__pickup-00.wav", false);
new SoundResource("Punch", "source/sounds/270327__littlerobotsoundfactory__hit-00.wav", false);
new SoundResource("Pound", "source/sounds/270310__littlerobotsoundfactory__explosion-04.wav", false);
new SoundResource("Die", "source/sounds/270328__littlerobotsoundfactory__hero-death-00.wav", false);

// Background music
new SoundResource("Chunks Intro", "source/sounds/Chunks-Intro-Level.wav", true);
new SoundResource("Chunks Title", "source/sounds/Chunks-Title.wav", true);
new SoundResource("Groovin", "source/sounds/Groovin.wav", true);

// Inputs
new Input("Jump", " ");
new Input("MoveLeft", "ArrowLeft");
new Input("MoveRight", "ArrowRight");

// Sprites
new Sprite("spr_grass", "source/images/spr_block_1_16x16.png", 64, 64,
                0, 0, 64, 64,
                1, 1, 1,
                0, 0, 0, 0);
new Sprite("spr_dirt", "source/images/spr_block_1_16x16.png", 64, 64,
                0, 0, 64, 64,
                1, 1, 1,
                0, 0, 0, 64);
new Sprite("spr_derp", "source/images/derp.png", 64, 64,
                0, 0, 64, 64,
                1, 1, 1,
                0, 0, 0, 0);
new Sprite("spr_player_walk_r", "source/images/spr_chunks.png", 64, 64,
                0, 0, 64, 64,
                4, 1, 4,
                8, 0, 4, 4);

// Game objects
var player = new GameObject("spr_player_walk_r",
() => {
    this.moveSpeed = 0;
},
() => {
    if(inputControl.IsPressed("MoveRight"))
        this.X += moveSpeed;
    if(inputControl.IsPressed("MoveLeft"))
        this.X -= moveSpeed;
});
