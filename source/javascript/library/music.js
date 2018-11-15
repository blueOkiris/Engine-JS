class SoundPlayer {
	constructor() {
		this.LoopList = [];
		this.SoundList = [];
	}

	Play(name) {
		let music = this.LoopList.find((loop) => loop.Name == name);
		let sound = this.SoundList.find((sound) => sound.Name == name);

		if(music != undefined)
			music.Play();
		else
			sound.Play();
	}

	Stop(name) {
		let music = this.LoopList.find((loop) => loop.Name == name);
		let sound = this.SoundList.find((sound) => sound.Name == name);

		if(music != undefined)
			music.Stop();
		else
			sound.Stop();
	}

	StopAll() {
		this.LoopList.forEach((e) => e.Stop());
		this.SoundList.forEach((e) => e.Stop());
	}

	UpdateLoops() {
		this.LoopList.forEach((loop) => {
			if(loop.IsPlaying && !loop.Sound.playing)
				loop.Play();
		});
	}
}
var soundPlayer = new SoundPlayer();

class SoundResource {
	constructor(call_name, src_file, does_loop) {
		this.Name = call_name;
		this.Sound = new Audio(src_file);

		this.Sound.pause();
		this.Sound.currentTime = 0;

		if(does_loop)
			soundPlayer.LoopList.push(this);
		else
			soundPlayer.SoundList.push(this);
		
		this.IsPlaying = false;
	}

	Play() {
		this.IsPlaying = true;

		this.Sound.currentTime = 0;
		this.Sound.play();
	}

	Stop() {
		this.IsPlaying = false;
		this.Sound.pause();
		this.Sound.currentTime = 0;
	}
}

