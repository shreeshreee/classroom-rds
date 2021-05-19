import { style } from '@angular/animations';
import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-parallax-space',
  templateUrl: './parallax-space.component.html',
  styleUrls: ['./parallax-space.component.scss']
})
export class ParallaxSpaceComponent implements OnInit {
  //@ViewChild('#parallax') elem;
  elem;
  constructor() {
    // Add event listener

  }

  ngOnInit(): void {
    this.elem = document.querySelector('#parallax')
  }
  // Magic happens here
  @HostListener("window:mousemove", ["$event"])
  onMouseMove(event) {
    let _w = window.innerWidth / 2;
    let _h = window.innerHeight / 2;
    let _mouseX = event.clientX;
    let _mouseY = event.clientY;
    let _depth1 = `${50 - (_mouseX - _w) * 0.0005}% ${50 - (_mouseY - _h) * 0.005}%`;
    let _depth2 = `${50 - (_mouseX - _w) * 0.001}% ${50 - (_mouseY - _h) * 0.01}%`;
    let _depth3 = `${50 - (_mouseX - _w) * 0.002}% ${50 - (_mouseY - _h) * 0.02}%`;
    let _depth4 = `${50 - (_mouseX - _w) * 0.003}% ${50 - (_mouseY - _h) * 0.03}%`;
    let _depth5 = `${50 - (_mouseX - _w) * 0.0065}% ${50 - (_mouseY - _h) * 0.065}%`;
    let _depth6 = `${50 - (_mouseX - _w) * 0.007}% ${50 - (_mouseY - _h) * 0.07}%`;
    let x = `${_depth6}, ${_depth5},${_depth4}, ${_depth3}, ${_depth2}, ${_depth1}`;
    //console.log(x);
    this.elem.style.backgroundPosition = x;
  }
}
