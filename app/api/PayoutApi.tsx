// initiate payment

const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      'X-API-KEY': 'a01376b838e356fd8d8494a95ebc54427ee96ce55111ed94219c26d4f1f3fa16'
    }
  };
  
  fetch('https://api.chimoney.io/v0.2/payment/initiate', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));

//verify payment
const options2 = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      'X-API-KEY': 'a01376b838e356fd8d8494a95ebc54427ee96ce55111ed94219c26d4f1f3fa16'
    }
  };
  
  fetch('https://api.chimoney.io/v0.2/payment/verify', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));


    //simulate card
    const option3 = {
        method: 'POST',
        headers: {
          accept: 'application/json',
          'content-type': 'application/json',
          'X-API-KEY': 'a01376b838e356fd8d8494a95ebc54427ee96ce55111ed94219c26d4f1f3fa16'
        }
      };
      
      fetch('https://api.chimoney.io/v0.2/payment/simulate', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));


        //payout via email or phone number
        const options4 = {
            method: 'POST',
            headers: {
              accept: 'application/json',
              'content-type': 'application/json',
              'X-API-KEY': 'a01376b838e356fd8d8494a95ebc54427ee96ce55111ed94219c26d4f1f3fa16'
            }
          };
          
          fetch('https://api.chimoney.io/v0.2/payment/simulate', options)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));