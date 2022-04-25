const getCountries = () => {
    const xhr =new XMLHttpRequest();
    xhr.open("GET","https://restcountries.com/v3.1/all");
    xhr.send();
    xhr.responseType="json";
    
    xhr.onload=()=>{
        const countries=xhr.response;
        for(let names of countries){
            console.log(names.name);
            console.log(names.population);
            console.log(names.region);
            console.log(names.subregion);
        
        }
    };
    };
    getCountries();
    