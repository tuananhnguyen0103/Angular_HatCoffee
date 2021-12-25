import { Component, OnInit } from '@angular/core';
// import { AppService } from './app.service';
// import { CountryStatus, Country } from './models';
import { tap } from 'rxjs/operators';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {
  // selectedCountry: string;
  countryCasesChartOptions: any;
  // cases: CountryStatus[] = [];

  // countries$ = this.appService.getCountries$.pipe(tap(countries => {
  //   // this.selectedCountry = countries[0].Slug;
  //   this.setOptions();
  // }));


  // constructor(private appService: AppService) {

  // }


  // onChangeCountry() {
  //   this.appService.getCasesByCountry(this.selectedCountry).subscribe(cases => {
  //     this.cases = cases;
  //     this.setOptions();
  //   });
  // }

  setOptions() {
    this.countryCasesChartOptions = {

      title: {
        text: 'COVID-19 STATUS CHART',
      },
      legend: {
        data: ['Confirmed', 'Recovered', 'Deaths']
      },
      tooltip: {

      },
      xAxis: {
        data: [200,300,400,500],
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        name: 'Confirmed',
        type: 'line',
        data: [100,200,300,400],
      },
      {
        name: 'Recovered',
        type: 'line',
        data: [100,200,300,400],
      },
      {
        name: 'Deaths',
        type: 'line',
        data: [100,200,300,800],
      },

      ]
    };

  }

}
