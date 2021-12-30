//kilometerToMeter
function kilometerToMeter(digit){
        
    var meter=digit*1000;
    return meter

}

var commilla=kilometerToMeter(1258)
console.log(commilla)
var dhaka=kilometerToMeter(4568)
console.log(dhaka)




//budgetCalculatror
function budget(watch,phone,laptop){
    var product1=watch*50;
    var product2=phone*100;
    var product3=laptop*500;
    var cost =product1+product2+product3;
    return cost;

}
var result=budget(1,2,1)
console.log(result)
var result1=budget(2,2,2)
console.log(result1)





//hotelCost

function hotelBill(days){
    var hotelCost=0;
    
    if(days<10){
        hotelCost=days*100;
    }
    else if(days<=20){
        var cost1=10*100;
        var remaining=days-10;
        var cost2=remaining*80;
        var hotelCost=cost1+cost2
    }
    else{
        var cost1=10*100;
        var cost2=10*80;
        var remaining=days-20;
        var cost3=remaining*50;
        var hotelCost=cost1+cost2+cost3;
        
    }
    return hotelCost
    
    }
    
    var result= hotelBill(13)
    console.log(result)



    
  //megaFriend  
    
    var friend=['munna','nafisa','sanzana','warisha','adiba'];
var max=0;
var longest;
for(var i= 0;i<friend.length;i++){
    if(friend[i].length>max){
       var max=friend[i].length;
        longest=friend[i]
    }

}
console.log(longest)
