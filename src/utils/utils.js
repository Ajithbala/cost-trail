
export const getDistinctValues = (arrData, key)=>{
    let distincValues =[];
     arrData.filter((data)=>{
        if(!distincValues.includes(data[key])){
            distincValues.push(data[key]);
        }
    })
    return distincValues;
}

export const getCumulativeTypePrice = (typesArr,expenseData)=>{
    let chartData = [];
    const TYPE = 'type';
    const PRICE = 'price';
    typesArr.map((type,index)=>{
expenseData.filter((data)=>{
    if(data[TYPE] === type){
        chartData[index] = chartData[index] ? parseFloat(chartData[index])+parseFloat(data[PRICE]) : parseFloat(data[PRICE]) ;
    }
})
    })
    console.log(chartData);
    console.log(typesArr);
    return chartData;
}

