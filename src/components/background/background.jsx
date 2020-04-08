import React, { Component } from "react";
import Sketch from "react-p5";
import {withRouter} from 'react-router-dom'

let particles = [];
const particleColor1 = 'rgba(0,0,255,0.5)';
const particleColor2 = 'rgba(0,255,0,0.5)';
const particleColor3 = 'rgba(255,0,0,0.5)';
const colors = [particleColor1, particleColor2, particleColor3]

let particalLength;
class Particle {

  constructor(p5) {
    this.pos = p5.createVector(p5.random(window.innerWidth - 10), p5.random(window.innerHeight - 10));
    this.size = 10;
    this.vel = p5.createVector(p5.random(-2, 2), p5.random(-2, 2))
    this.move = true;
    this.color = colors[Number(Math.floor(p5.random(colors.length)))];
  }

  update(p5) {
    this.pos.add(this.vel);
    this.edges(p5);

  }

  draw(p5) {
    p5.noStroke();

    p5.fill(this.color);
    p5.circle(this.pos.x, this.pos.y, this.size);
  }

  edges(p5) {
    if (!this.move) {
      return
    }
    else {
      if (this.pos.x < 0 || this.pos.x > p5.width) {
        this.vel.x *= -1;
      }
      if (this.pos.y < 0 || this.pos.y > p5.height) {
        this.vel.y *= -1;
      }
    }

  }
  stop(p5) {
    if (this.move) {
      this.vel -= this.vel;
    }
    else {
      this.color = colors[Number(Math.floor(p5.random(colors.length)))];
      this.vel = p5.createVector(p5.random(-2, 2), p5.random(-2, 2))
    }
    this.move = !this.move;

  }
  

  checkParticles(p5, particles) {
    particles.forEach((particle) => {
      const d = p5.dist(this.pos.x, this.pos.y, particle.pos.x, particle.pos.y)
      if (d < particalLength) {

        p5.stroke(this.color)
        p5.line(this.pos.x, this.pos.y, particle.pos.x, particle.pos.y)
      }
    })
  }
}

class Background extends Component {

  setup = (p5, canvasParentRef) => {
    p5.disableFriendlyErrors = true;
    p5.createCanvas(window.innerWidth - 10, window.innerHeight - 10);
    particalLength = Math.min(Math.floor(window.innerWidth / 10), 120)
    particles = [];
    for (let i = 0; i < particalLength; i++) {
      particles.push(new Particle(p5));
    }


  };
  draw = p5 => {
    p5.background('#fff')
    particles.forEach((particle, index) => {
      particle.draw(p5);
      particle.update(p5);
      particle.checkParticles(p5, particles.slice(index))
    })
  };

  mouseClicked = p5 => {
    particles.forEach(particle => {
      particle.stop(p5);
    })
  }

 

  windowResized = p5 => {
    this.setup(p5)
  };

  deviceTurned = p5 => {
    this.setup(p5)
  };
  render() {
    return (
      <React.Fragment>
        <Sketch setup={this.setup}  mouseClicked={this.mouseClicked} deviceTurned={this.deviceTurned} draw={this.draw} windowResized={this.windowResized} />
      </React.Fragment>
    );

  }
}

export default withRouter(Background)