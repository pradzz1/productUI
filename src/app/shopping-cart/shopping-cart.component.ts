import { Component, OnInit } from '@angular/core';
import { exit } from 'process';
import data from '../../assets/data/productList.json';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent  {
  
    /* An empty array that is responsible to add a division */
        public items = []; 
        public amountQuantity = []; 
        public data = data.Products;
        public dataTypes = data.Types;
        public productTypeSelected = "";
        public products = this.data;
       /* A two-way binding performed which 
          pushes text on division */
       public newTask; 
       public alert = false; 
       public name; 
       public quantity;
    warning: boolean = false;
     
     
       /* When input is empty, it will 
          not create a new division */
          public removeTag(){
              this.alert = false;
          }
       public addToList(newTask,quantity,productTypeSelected ) { 
           let kart = [];
           for(let val in this.items){
               if(this.items[val] == newTask){
                   this.alert = true;
                  
                   this.name = "";
                    this.productTypeSelected = "default";
                    this.products = this.data;
                   return;
               }
           }
            if(newTask == undefined || quantity == undefined || productTypeSelected == "")
            {
                alert("please select value");
                return ;
            }else{

                for(let qut in this.products){

                    if(this.products[qut].name == newTask && this.products[qut].quantity == ""){
    
                        this.products[qut].quantity =  quantity
                    }
               }
            }
           this.name = "";
           this.productTypeSelected = "default";
           this.products = this.data;
           this.quantity = null;
           if (this.newTask == '') { 
           } 
           else { 
               this.items.push(this.newTask); 
               this.newTask = ''; 
           } 
       } 
       
       onOptionsSelected(value:string){
        this.productTypeSelected = value;
        if(value == "default"){
            this.products = this.data;
        }else{
                let filteredval = this.data.filter(function(el) { return el.type == value; });
                this.products = filteredval;
          }
        };
        modelChanged($event){
         
        }
        ngOnInit() {
            this.productTypeSelected = "default";
          }
      

}
