import { Component } from '@angular/core';

@Component({
  selector: 'app-p-chart',
  templateUrl: './p-chart.component.html',
  styleUrls: ['./p-chart.component.scss']
})
export class PChartComponent {
  data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'My First dataset',
            backgroundColor: '#42A5F5',
            borderColor: '#1E88E5',
            data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
            label: 'My Second dataset',
            backgroundColor: '#9CCC65',
            borderColor: '#7CB342',
            data: [38, 58, 30, 29, 96, 20, 50]
        },
        {
            label: 'My Third dataset',
            backgroundColor: '#606162',
            borderColor: '#919293',
            data: [28, 48, 40, 19, 86, 27, 90]
        }
    ],

}
}
