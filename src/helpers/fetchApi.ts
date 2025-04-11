export const fetchApi = <T=any>(url:string) => {
    return new Promise<T>((resolve,reject)=>{
        fetch(url)
        .then(async (response) => {
          const data = await response.json();
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
}
