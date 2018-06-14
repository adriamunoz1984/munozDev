import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start-select',
  templateUrl: './start-select.component.html',
  styleUrls: ['./start-select.component.css']
})

export class StartSelectComponent implements OnInit
{
  sSpanish: string = "Espanol";
  sEnglish: string = "Ingles";
  spanish: string = "Spanish";
  english: string = "English";

  start: string = "START"
  select: string = "SELECT";
  varStart = this.start;
  varSelect = this.select;

  butDis: boolean = false;

  selection: boolean = false;
  a: number = 0;


  language: string = this.english;

  constructor( ){}

  onSelectClick()
  {

      this.selection = !this.selection;
      if(this.selection === true)
      {
        this.varStart = this.spanish;
        this.varSelect = this.english;
        this.onLangSelect();
      }
      else if(this.selection === false)
      {
        this.varStart = this.start;
        this.varSelect = this.select;
      }

      this.butDis = !this.butDis;
      console.log("selection " + this.selection, ", disable = " + this.butDis);
  }

  onSpanish()
  {
    this.language = this.english;
    this.varStart = this.sSpanish;
    this.varSelect = this.sEnglish;
  }

  onEnglish()
  {
    this.language = this.spanish;
    this.varStart = this.spanish;
    this.varSelect = this.english;
  }

  onLangSelect()
  {
        if(this.language === this.english)
        {
            this.language = this.spanish;
            this.varStart = this.spanish;
            this.varSelect = this.english;
        }

        else if(this.language === this.spanish)
        {
          this.language = this.english;
          this.varStart = this.sSpanish;
          this.varSelect = this.sEnglish;
        }
  }

  ngOnInit() {
  }

}
