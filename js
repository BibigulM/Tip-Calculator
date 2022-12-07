import { LightningElement, track } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class TipCalculator extends LightningElement {




    
    
    isVisible = false
    bill = null;
    percent 
    selectedvalue
    persons = null;

    

    
    
    


    get options() {
        return [
            { label: 'Excellent (20%)', value: 'excellent' },
            { label: 'Good (15%)', value: 'good' },
            { label: 'Bad (10%)', value: 'bad' },
        ];
    }

    onchangeBillHandle(event){
     this.bill =  event.target.value  
        
    }


    onchangePercentHandle(event) {
        this.percent =  event.detail.value
        this.selectedvalue = event.target.value
    }

    onchangeNumberPersonHandle(event){
        this.persons = event.target.value

    }

    get splitTip(){
        let num 
        if(this.selectedvalue === 'good'){
            this.num = 0.15
        }else if(this.selectedvalue === 'excellent'){
            this.num = 0.20
        }else if(this.selectedvalue === 'bad'){
            this.num = 0.10
        }

        let tip = parseInt(this.bill)*this.num/this.persons
        return parseFloat(tip).toFixed(2)  
    }



    // get totalTip(){
    //     let num2 
    //     if(this.selectedvalue === 'good'){
    //         this.num2 = 0.15
    //     }else if(this.selectedvalue === 'excellent'){
    //         this.num2 = 0.20
    //     }else if(this.selectedvalue === 'bad'){
    //         this.num2 = 0.10
    //     }

    //     let tip2 = parseInt(this.bill)*this.num2/this.persons
    //     let sum = tip2 * this.persons
    //     return  parseFloat(sum).toFixed(2)
    // }


    

    calculateHandle(){
        let userinput = this.template.querySelector('.DOB').value;  
        
        if(userinput==null || userinput=='') {  


            const event = new ShowToastEvent({
                title: 'Error',
                message: 'Please, enter the amount bill and persons as well!',
                variant: 'Error',
                mode: 'dismissable'
            });
            this.dispatchEvent(event);



        }
        
        
        else { 
            this.isVisible = true
        } 
          
        
          



      



    }
      
     
    clearHandle(){
       
        this.template.querySelectorAll('lightning-input').forEach(element => {
            if(element.name === "service"){
              element.value = null ;
            }else{
              element.value = null;
            }      
          });


          this.isVisible = !this.isVisible



       
       

    }
}
