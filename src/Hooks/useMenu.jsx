import { useEffect, useState } from "react";


//custom hooks
const useMenu = () =>{


    const [menu, setMenu] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        fetch('http://localhost:5000/getMenuData')
            .then(res => res.json())
            .then(data => {
                setLoading(false);
                setMenu(data);
            })
    }, [])

    return [menu,loading]

}

export default useMenu;