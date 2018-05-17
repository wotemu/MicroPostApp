class EasyHTTP{
  //make an http GET Request async await
  async get(url){
    const response = await fetch(url);
    const resData = await response.json();
    return resData;  
  }

  //make an http POST Request
  async post(url, data){
    const response = await fetch(url, {
        method: 'POST',
        headers:{
          'Content-type' : 'application/json'
        },
        body: JSON.stringify(data)
    });
    const resData = await response.json();
    return resData;
  }

  //make  http PUT Request
  async put(url, data){
    
    const response = await  fetch(url, {
        method: 'PUT',
        headers:{
          'Content-type' : 'application/json'
        },
        body: JSON.stringify(data)          
    });
      const resData = await response.json();
      return resData;
  }

  //make  http delete Request
  async delete(url){
    
     const response = await fetch(url, {
        method: 'DELETE',
        headers:{
          'Content-type' : 'application/json'
        }
      });
      const resData = await 'Resurce deleted...';
      return resData;

        
  }
  
}

export const http = new EasyHTTP();