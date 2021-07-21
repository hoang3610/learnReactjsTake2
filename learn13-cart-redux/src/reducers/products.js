var initialState = [
    {
        id: 1,
        name: 'Iphone 11',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYt6GABmCRSglmwAu0Q0uh5ZXesuHWWqwCiKmxlPqtStkU7VE2DH9lTfyuVt1rBjILyiB-8CpG&usqp=CAc',
        description: 'Sản phẩm do nhà táo sản xuất',
        price: 500,
        inventory: 15,
        rating: 4
    },
    {
        id: 2,
        name: 'Iphone 12',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDCmPf4hWAhyUEIJ1HTIPo6Gw5n7op6l3JnJJOEVyxzUnQctPXkV6rFWE7qQ&usqp=CAc',
        description: 'Sản phẩm do nhà táo sản xuất',
        price: 900,
        inventory: 10,
        rating: 3
    }
];

const products = (state = initialState, action) => {
     switch (action.type) {
         default:
            return [...state];
     }
}

export default products;