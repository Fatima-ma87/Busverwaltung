import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { BusverwaltungService } from 'src/app/busverwaltung.service';
@Component({
  selector: 'app-addbus',
  templateUrl: './addbus.component.html',
  styleUrls: ['./addbus.component.css']
})
export class AddbusComponent implements OnInit {
  addbus:any;
  constructor(private fb:FormBuilder, private routes:Router, 
    private BusverwaltungService:BusverwaltungService) 
    { 
      this.addbus = fb.group(
        {
          Busnummer:['', Validators.required],
          Startpunkt:['', Validators.required],
          Endpunkt:['', Validators.required],
          Fahrzeit:['', Validators.required],
        }
      )

    }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.addbus.Validators);
    this.BusverwaltungService.addbus(this.addbus.value).subscribe((data:any)=>{
      console.log(data);
      this.routes.navigate(['/ueubersicht']);
    })
  }

}
