import { Component } from '@angular/core';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent {
  data: any;
  options: any;

    ngOnInit() {

        this.data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'Second Dataset',
                    data: [28, 48, 40, 19, 86, 27, 90],
                    fill: true,
                    // borderColor: documentStyle.getPropertyValue('--pink-500'),
                    tension: 0.4
                }
            ]
        };

        this.options = {
            maintainAspectRatio: true,
            aspectRatio: 0.6,
            plugins: {
                legend: {
                    labels: {
                        // color: textColor
                    }
                }
            },
            scales: {
              x : [ {
                gridLines : {
                    display : false,
                    scaleShowVerticalLines: false
                }
            } ],
            y : [ {
              gridLines : {
                  display : false,
                  scaleShowVerticalLines: false
              }
          } ]
            }
        };
    }
  }
