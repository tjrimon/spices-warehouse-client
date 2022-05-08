import { useEffect, useState } from "react";

const useViewSingleInventory = itemId => {
    const [item, setItem] = useState({});

    useEffect(() => {
        const url = `https://thawing-mountain-91486.herokuapp.com/service/${itemId}`;
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data));

    }, [setItem]);
    return [item]
}

export default useViewSingleInventory;