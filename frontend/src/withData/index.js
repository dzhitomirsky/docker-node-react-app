import {useState, useEffect} from 'react';


function withData(render, loadData) {
  return function DataLoader() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [loaded, setLoaded] = useState(false);
  
    useEffect(() => {
      if(!loaded && !isLoading) {
        setIsLoading(true);
  
        loadData()
        .then(data => {
          setData(data);
          setLoaded(true);
          setIsLoading(false);
        })
      }
    }, [loaded, isLoading, data])
  
   return render(data, isLoading, loaded);
  }
}

export default withData;