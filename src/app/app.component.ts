import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'EMI_Calculator';
  principal: number = 100000;

  amount: any;
  Principal(evdataent: any) {
    this.principal = evdataent;
    this.amount = evdataent / 10000000;
    if (this.principal >= 10000000) {
      return this.amount + 'Cr';
    } else {
      return this.principal + 'L';
    }
  }

  Annual_Rate_of_Interest: number = 14;
  Annual(valu: any) {
    this.Annual_Rate_of_Interest = valu;
    return valu + '%';
  }


  Loan_Tenure: number = 3;
  Loan(data: any) {
    this.Loan_Tenure = data;

    return `${data}Y`;
  }

  EMI_Calculated: any;
  Interes: any;

  get emi() {
    let p = this.principal;
    let r = (this.Annual_Rate_of_Interest / 12 / 100);
    let n = this.Loan_Tenure * 12;
    this.EMI_Calculated = Math.round(
      (p * r * (1 + r) ** n) / ((1 + r) ** n - 1)
    );
  // this.table
    return Math.round((p * r * (1 + r) ** n) / ((1 + r) ** n - 1));
  }

get Interest(){
  let p = this.principal;
  let n = this.Loan_Tenure * 12;
 let total= this.EMI_Calculated*n
 let intr=Math.round(total-p)
 return intr
}

data:any;
 get table(){
 let  tb:any=[]
  let n = this.Loan_Tenure * 12;
  let total= this.EMI_Calculated*n
  let r = (this.Annual_Rate_of_Interest / 12 / 100);

  for(let i=1;i<=n;i++ ){
    total= total-this.EMI_Calculated
    let intr=Math.round(total*r)
let data={
  Emi:this.EMI_Calculated,
  Months:i,
  amount:total,
  intrest:intr
}
    tb.push(data)
  }
  // console.log(tb);
  this.data=tb
  // console.log(this.data);
  return n
}

Show(){

  this.table
}

  ngOnInit(): void {
    // console.log(this.tble);
    // this.table
  }
  ngAfterViewInit(){
    this.table

  }
}
