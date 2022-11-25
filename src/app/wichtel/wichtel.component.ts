import { Component, Input } from '@angular/core';
///@ts-ignore
import confetti from 'canvas-confetti';

enum State {
  INIT,
  REVEAL,
}

@Component({
  selector: 'wichtel',
  templateUrl: './wichtel.component.html',
  styleUrls: ['./wichtel.component.css'],
})
export class WichtelComponent {
  names = ['Silva', 'Noame', 'Leon', 'Lukas', 'Chris', 'Anni'];
  wichtel = JSON.parse(
    atob(
      'W1siU2lsdmEiLCJOb2FtZSJdLFsiTm9hbWUiLCJDaHJpcyJdLFsiTGVvbiIsIkFubmkiXSxbIkx1a2FzIiwiU2lsdmEiXSxbIkNocmlzIiwiTHVrYXMiXSxbIkFubmkiLCJMZW9uIl1d'
    )
  );
  @Input() wichtelId = 0;
  state = State.INIT;
  State = State;

  onReveal() {
    confetti({
      angle: this.randomInRange(55, 125),
      spread: this.randomInRange(50, 70),
      particleCount: this.randomInRange(50, 100),
      origin: { y: 0.6 },
    });
    this.state = State.REVEAL;
  }

  private randomInRange(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }
}
