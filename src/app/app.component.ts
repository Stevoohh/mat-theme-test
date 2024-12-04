import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ThemeService } from './core/services/theme.service';
import { Router, RouterModule } from '@angular/router';
import {MatDividerModule} from '@angular/material/divider';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, RouterModule, MatButtonModule, MatDividerModule],
  templateUrl: 'app.component.html',
  styleUrl: 'app.component.scss'
})
export class AppComponent {
  themeService = inject(ThemeService);
}
