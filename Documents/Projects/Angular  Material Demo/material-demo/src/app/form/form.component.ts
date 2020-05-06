import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  public languages = [
    {value: 'rts-0', viewValue: 'Angular'},
    {value: 'rpg-1', viewValue: 'Node Js'},
    {value: 'fps-2', viewValue: 'React'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
