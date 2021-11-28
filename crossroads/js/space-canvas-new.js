let container, canvas, ctx, lines = [], linesCount = 10, stars = [], starsCount = 100

const minWidth = 10,
  maxWidth = 30,
  minHeight = 1,
  maxHeight = 150,
  starMinSize = 1,
  starMaxSize = 3,
  minTTL = 500,
  maxTTL = 2000,
  backgroundColor = '#000000'


function init() {
  setCanvas()
  resizeReset()
  animationLoop()
}

window.addEventListener("DOMContentLoaded", init)
window.addEventListener("resize", resizeReset)

function setCanvas() {
  container = document.querySelector("#space")
  canvas = {
    a: document.createElement("canvas"),
    b: document.createElement("canvas")
  }
  ctx = {
    a: canvas.a.getContext("2d"),
    b: canvas.b.getContext("2d")
  }
  canvas.b.style = "position: fixed; top:0; left:0; width:100%; height:100%"
  container.appendChild(canvas.b)
  // console.log("a width", canvas.a.width)
  // console.log("a height", canvas.a.height)
  // console.log("b width", canvas.b.width)
  // console.log("b height", canvas.b.height)
}


function resizeReset() {
  canvas.a.width = window.innerWidth
  canvas.a.width = window.innerHeight
  ctx.a.drawImage(canvas.b, 0, 0)

  canvas.b.width = window.innerWidth
  canvas.b.width = window.innerHeight
  ctx.b.drawImage(canvas.a, 0, 0)

  for (let i = 0; i < linesCount; i++) {
    lines.push(new Line())
  }

  for (let j = 0; j < starsCount; j++) {
    stars.push(new Star())
    console.log("star width", stars[j].width)
    console.log("star height", stars[j].height)
  }
}

function animationLoop() {
  ctx.a.clearRect(0, 0, canvas.a.width, canvas.a.height)
  ctx.b.fillStyle = backgroundColor
  ctx.b.fillRect(0, 0, canvas.b.width, canvas.b.height)
  for (let i = 0; i < lines.length; i++) {
    lines[i].update()
		lines[i].draw()
  }
  for (let j = 0; j < stars.length; j++) {
    stars[j].update()
		stars[j].draw()
  }
  ctx.b.save()
  ctx.b.filter = 'blur(10px)'
  ctx.b.globalCompositeOperation = "lighter"
  ctx.b.drawImage(canvas.a, 0, 0)
  ctx.b.restore()

  requestAnimationFrame(animationLoop)
}

function fadeInOut(t, m){
	let hm = 0.5 * m
  return Math.abs((t + hm) % m - hm) / hm
}

function getRandomInt(min, max) {
  return Math.round(Math.random() * (max - min)) + min
}

class Line {
  constructor() {
    this.x = getRandomInt(0, canvas.a.width)
    this.y = canvas.a.height 
    this.width = getRandomInt(minWidth, maxWidth)
    this.height = getRandomInt(minHeight, maxHeight)
    this.hue = getRandomInt(120, 180)
    this.ttl = getRandomInt(minTTL, maxTTL)
    this.life = 0
  }
  draw() {
    let gradient
    gradient = ctx.a.createLinearGradient(this.x, this.y - this.height, this.x, this.y)
    gradient.addColorStop(0, `hsla(${this.hue}, 100%, 65%, 0)`)
    gradient.addColorStop(0.9, `hsla(${this.hue}, 100%, 65%, ${fadeInOut(this.life, this.ttl)})`)
    gradient.addColorStop(1, `hsla(${this.hue}, 100%, 65%, 0)`)

    ctx.a.save()
    ctx.a.beginPath()
    ctx.a.strokeStyle = gradient
    ctx.a.lineWidth = this.width
    ctx.a.moveTo(this.x, canvas.a.height - this.height)
    ctx.a.lineTo(this.x, canvas.a.height + 20)
    ctx.a.stroke()
    ctx.a.closePath()
    ctx.a.restore()
  }
  update() {
		this.life++
    if(this.life > this.ttl){
    	this.life = 0
      this.x = getRandomInt(0, canvas.a.width)
      this.width = getRandomInt(minWidth, maxWidth)
    }
  }
}

class Star {
  constructor() {
    this.x = getRandomInt(0, canvas.a.width)
    this.y = getRandomInt(0, canvas.a.width)
    this.size = getRandomInt(starMinSize, starMaxSize)
    this.width = this.size
    this.height = this.size
    this.hue = getRandomInt(120, 180)
    this.ttl = getRandomInt(minTTL, maxTTL)
    this.life = 0
  }
  draw() {
    ctx.a.save()
    ctx.a.fillStyle = '#fff';
    ctx.a.fillRect(this.x, this.y, this.width, this.height)
    ctx.a.restore()
  }
  update() {
		this.life++
    if(this.life > this.ttl){
    	this.life = 0
      this.x = getRandomInt(0, canvas.a.width)
      this.y = getRandomInt(0, canvas.a.height)
      this.width = getRandomInt(starMinSize, starMaxSize)
      this.height = getRandomInt(starMinSize, starMaxSize)
    }
  }
}
