// Sound effects
new SoundResource("Jump", "src/sounds/270337__littlerobotsoundfactory__pickup-00.wav", false);
new SoundResource("Punch", "src/sounds/270327__littlerobotsoundfactory__hit-00.wav", false);
new SoundResource("Pound", "src/sounds/270310__littlerobotsoundfactory__explosion-04.wav", false);
new SoundResource("Die", "src/sounds/270328__littlerobotsoundfactory__hero-death-00.wav", false);

// Background music
new SoundResource("Chunks Intro", "src/sounds/Chunks-Intro-Level.wav", true);
new SoundResource("Chunks Title", "src/sounds/Chunks-Title.wave", true);
new SoundResource("Groovin", "src/sounds/Groovin.wav", true);

// Inputs
new Input("Jump", " ");
new Input("MoveLeft", "ArrowLeft");
new Input("MoveRight", "ArrowRight");

// Sprites
new Sprite("spr_grass", "spr_block_1_16x16.png", 64, 64,
                0, 0, 64, 64,
                1, 1, 1,
                0, 0, 0, 0,
                1);
new Sprite("spr_dirt", "spr_block_1_16x16.png", 64, 64,
                0, 0, 64, 64,
                1, 1, 1,
                0, 0, 0, 64,
                1);
new Sprite("spr_derp", "source/images/derp.png", 64, 64,
                0, 0, 64, 64,
                1, 1, 1,
                0, 0, 0, 0,
                1);
new Sprite("spr_player_walk_r", "source/images/spr_chunks.png", 64, 64,
                0, 0, 64, 64,
                4, 1, 4,
                8, 0, 4, 4,
                1);