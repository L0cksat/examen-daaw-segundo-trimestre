import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeriesService } from '../../services/series.service';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomeComponent {
  series: any[] = []

  constructor(private seriesService: SeriesService){
    this.seriesService.getAll().subscribe(data => this.series = data)
  }

}
