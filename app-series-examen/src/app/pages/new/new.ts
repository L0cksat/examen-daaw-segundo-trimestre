import { Component } from '@angular/core';
import { RouterLink, ActivatedRoute, Router } from '@angular/router';
import { SeriesService } from '../../services/series.service';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-new',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './new.html',
  styleUrl: './new.css',
})
export class NewComponent {

  form = new FormGroup({
    title: new FormControl("", [Validators.required, Validators.minLength(3)]),
    channel: new FormControl("", [Validators.required]),
    rating: new FormControl(0, [Validators.required, Validators.min(0), Validators.max(10)])
  })

  constructor(
    private seriesService: SeriesService,
    private router: Router
  ){}

  save(){
    if(this.form.valid)  {
      this.seriesService.createSerie(this.form.value).subscribe((res: any) => {
        alert(`Serie creado correctamente, Id ${ res.id }`)

        this.router.navigate(['/home'])
        
      })
    } else{
      alert('Formulario inválido')
    }
  }
}
