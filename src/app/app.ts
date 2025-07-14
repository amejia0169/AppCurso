import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: '../index.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('AppCurso');
}
