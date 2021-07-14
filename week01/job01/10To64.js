function to64(number){
   
    var flag = number.toString().indexOf(".") !=-1 ? true : false;

    var nums = (number).toString().split('.');
    var integer = parseInt(nums[0]);
    var decimals = parseFloat("0."+nums[1]);
    var integerStr = "";
    var decimalsStr = "";
    var decimalsIndex = 1;
    //整数部分 
    if(integer<64){
        integerStr +=getAscii(integer);
    }
    else{
        while(integer>=64){
            integerStr += getAscii(integer % 64);
            integer = Math.floor(integer / 64);
            if(integer<64){
                integerStr += getAscii(integer);
            }
        }
    }
    if(decimals!=0&&flag)
    {
        //小数部分 乘以64 整数部分取 小数部分为0 或者 位数达到52位
        while(decimalsIndex<=52&&decimals!=0){
            var numbers = (decimals*64).toString().split('.');
            var tempInteger = parseInt(numbers[0]);
            decimals = decimals*64 - tempInteger;
            
            decimalsStr+= getAscii(tempInteger);
            decimalsIndex++;
        }
    }
   
    integerStr = integerStr.split('').reverse().join("");
   
    if(flag)
        return integerStr+"."+decimalsStr;
    else
        return integerStr;
}

function to10(number){
    
    var flag = number.toString().indexOf(".")!=-1?true:false;

    if(flag){       
        var nums = number.toString().split('.');
        var integerStr = nums[0].toString();
        var decimalsStr = nums[1].toString();
        var intLen = integerStr.length;
        var index = intLen;
    
        var decLen = decimalsStr.length;
        var dindex = 0;
    
        var integer = 0;
        var decimals = parseFloat(0);
        while(index>0){
            var value = integerStr.substr(intLen-index,1);
            integer += (getIndex(value) * Math.pow(64,index-1) )  ;
            index --;
        }

        while(dindex<decLen){
            var value = decimalsStr.substr(dindex,1);
            decimals += parseFloat(getIndex(value) * Math.pow(64,-dindex-1));
            dindex++;
        }
        return integer+decimals;

    }
    else{
        integerStr = number.toString();
        var intLen = integerStr.length;
        var index = intLen;
        var integer = 0;
        while(index>0){
            var value = integerStr.substr(intLen-index,1);
            integer += (getIndex(value) * Math.pow(64,index-1) )  ;
            index --;
        }

        return integer;
    }
    
}

function getAscii(index){
    var i = index + 63;
    var result = String.fromCharCode(i);
    //console.log(index + ":" + result);
    return result;
}

function getIndex(str){
    var result =  str.charCodeAt() - 63;
    //console.log(str + ":" + result);
    return result;
}

//console.log(to64(651));
//console.log(to10("IJ"));
