(() => {
  function getMsg<K, V>(value1: K, value2: V): [K, V] {
    return [value1, value2];
  }
  const arr = getMsg<string,number>('abc',21.121)
 
  console.log(arr[0].split(''),arr[1].toFixed(1))
})();
