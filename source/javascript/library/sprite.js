var imagesToLoad = 0;

class SpriteController {
	constructor() {
		this.SpriteList = [];
	}

	Draw(name, x, y, index) {
		let spr = this.SpriteList.find((spr) => spr.Name = name);
		spr.Draw(x, y, index);
	}
}
var spriteController = new SpriteController();

class Sprite {
	constructor(name, source, 
				width, height,
				mask_x, mask_y, mask_w, mask_h,
				image_number,
				row_number, col_number, row_spacing, col_spacing, row_offset, col_offset) {
		imagesToLoad++;

		this.Name = name;
		
		this.Width = width;
		this.Height = height;

		this.MaskX = mask_x;
		this.MaskY = mask_y;
		this.MaskW = mask_w;
		this.MaskH = mask_h;

		this.SourceImage = new Image();
		this.SourceImage.src = source;
		this.SourceImage.onload = () => {
			imagesToLoad--;
		};

		this.ImageNumber = image_number;
		
		this.Images = [];
		for(let y = 0; y < row_number; y++) {
			for(let x = 0; x < col_number; x++)
				this.Images.push([col_offset + (x * col_spacing), row_offset + (y * row_spacing)]);
		}

		spriteController.SpriteList.push(this);
	}

	Draw(x, y, index) {
		ctx.drawImage(this.SourceImage, 
			this.Images[index][0], this.Images[index][1], this.Width, this.Height,
			x, y, this.Width, this.Height);
	}
}

