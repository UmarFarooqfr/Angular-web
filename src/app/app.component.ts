import { Component, OnInit } from '@angular/core';
import { MenuItem, Message, MessageService, PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  items: MenuItem[] = [];
  messages: Message[]=[];
  // companyProfiles:any = [];
    columns: any[] = [
        {
            name: "Sector",
            field: "sector",
        },
        {
            name: "Company",
            field: "name",
        },
        {
            name: "This Year Sales",
            field: "thisYearSales",
        },
        {
            name: "Last Year Sales",
            field: "lastYearSales",
        },
    ];
  // data: any;
    constructor(private primengConfig: PrimeNGConfig) {}
  ngOnInit(): void {
    // this.primengConfig.ripple = true;
    this.messages = [
      {detail:'👋 Hello! Welcome to Freya! Before start please complete your profile to know you better'},
    ];

    this.items = [
      {
        label: 'Privacy',
        icon: 'pi pi-fw pi-lock mr-2',
      },
      {
        label: 'Setting',
        icon: 'pi pi-fw pi-cog mr-2',
      },
      {
        label: 'Logout',
        icon: 'pi pi-fw pi-sign-out mr-2',
      },
    ];
  }
  title = 'Prime_ng';
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
companyProfiles = [
  {
      name: "Apple",
      sector: "Technology",
      thisYearSales: "$ 2,000,000,000",
      lastYearSales: "$ 1,700,000,000",
      thisYearGrowth: "21%",
      lastYearGrowth: "15%",
  },
  {
      name: "Mac Donalds",
      sector: "Food",
      thisYearSales: "$ 1,100,000,000",
      lastYearSales: "$ 800,000,000",
      thisYearGrowth: "18%",
      lastYearGrowth: "15%",
  },
  {
      name: "Google",
      sector: "Technology",
      thisYearSales: "$ 1,800,000,000",
      lastYearSales: "$ 1,500,000,000",
      thisYearGrowth: "15%",
      lastYearGrowth: "13%",
  },
  {
      name: "Domino's",
      sector: "Food",
      thisYearSales: "$ 1,000,000,000",
      lastYearSales: "$ 800,000,000",
      thisYearGrowth: "13%",
      lastYearGrowth: "14%",
  },
  {
      name: "Meta",
      sector: "Technology",
      thisYearSales: "$ 1,100,000,000",
      lastYearSales: "$ 1,200,000,000",
      thisYearGrowth: "11%",
      lastYearGrowth: "12%",
  },
  {
      name: "Snapchat",
      sector: "Technology",
      thisYearSales: "$ 1,500,000,000",
      lastYearSales: "$ 1,200,000,000",
      thisYearGrowth: "16%",
      lastYearGrowth: "14%",
  },
  {
      name: "Tesla",
      sector: "AutoMobile",
      thisYearSales: "$ 1,300,000,000",
      lastYearSales: "$ 900,000,000",
      thisYearGrowth: "23%",
      lastYearGrowth: "16%",
  },
  {
      name: "Ford",
      sector: "AutoMobile",
      thisYearSales: "$ 700,000,000",
      lastYearSales: "$ 750,000,000",
      thisYearGrowth: "14%",
      lastYearGrowth: "15%",
  },
  {
      name: "Twitter",
      sector: "Technology",
      thisYearSales: "$ 1,200,000,000",
      lastYearSales: "$ 1,200,000,000",
      thisYearGrowth: "19%",
      lastYearGrowth: "18%",
  },
  {
      name: "Reliance Jio",
      sector: "Telecom",
      thisYearSales: "$ 800,000,000",
      lastYearSales: "$ 800,000,000",
      thisYearGrowth: "13%",
      lastYearGrowth: "13%",
  },
  {
      name: "H&M",
      sector: "Clothing",
      thisYearSales: "$ 1,600,000,000",
      lastYearSales: "$ 1,400,000,000",
      thisYearGrowth: "17%",
      lastYearGrowth: "16%",
  },
  {
      name: "Nike",
      sector: "Sports",
      thisYearSales: "$ 2,200,000,000",
      lastYearSales: "$ 2,400,000,000",
      thisYearGrowth: "18%",
      lastYearGrowth: "22%",
  },
  {
      name: "Adidas",
      sector: "Sports",
      thisYearSales: "$ 2,300,000,000",
      lastYearSales: "$ 2,100,000,000",
      thisYearGrowth: "24%",
      lastYearGrowth: "21%",
  },
  {
      name: "Red Chief",
      sector: "Clothing",
      thisYearSales: "$ 800,000,000",
      lastYearSales: "$ 600,000,000",
      thisYearGrowth: "19%",
      lastYearGrowth: "15%",
  },
]
}
