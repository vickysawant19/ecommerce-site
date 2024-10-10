const products = [
  {
    imgSrc:
      'https://cdn.pixabay.com/photo/2016/06/07/17/34/shoes-1447399_960_720.jpg',
    title: 'Running Shoes',
    price: '120.00',
    newPrice: '99.00',
    rating: 4.5,
    category: 'shoes',
    color: 'red'
  },
  {
    imgSrc:
      'https://cdn.pixabay.com/photo/2016/10/04/12/25/feet-1719161_960_720.jpg',
    title: 'Casual Sneakers',
    price: '85.00',
    newPrice: '75.00',
    rating: 4.0,
    category: 'shoes',
    color: 'blue'
  },
  {
    imgSrc:
      'https://cdn.pixabay.com/photo/2016/06/10/21/29/jeans-1446948_960_720.jpg',
    title: 'Slim Fit Jeans',
    price: '50.00',
    newPrice: '45.00',
    rating: 4.7,
    category: 'jeans',
    color: 'black'
  },
  {
    imgSrc:
      'https://cdn.pixabay.com/photo/2017/10/25/16/22/jeans-2896864_960_720.jpg',
    title: 'Classic Straight Jeans',
    price: '60.00',
    newPrice: '55.00',
    rating: 4.2,
    category: 'jeans',
    color: 'blue'
  },
  {
    imgSrc:
      'https://cdn.pixabay.com/photo/2017/10/16/06/11/t-shirt-2854031_960_720.jpg',
    title: 'Graphic T-Shirt',
    price: '20.00',
    newPrice: '15.00',
    rating: 4.8,
    category: 'tshirt',
    color: 'green'
  },
  {
    imgSrc:
      'https://cdn.pixabay.com/photo/2017/08/30/03/39/t-shirt-2691195_960_720.jpg',
    title: 'Plain White T-Shirt',
    price: '18.00',
    newPrice: '14.00',
    rating: 4.3,
    category: 'tshirt',
    color: 'white'
  },
  {
    imgSrc:
      'https://cdn.pixabay.com/photo/2018/09/28/07/56/sunglasses-3700389_960_720.jpg',
    title: 'Sunglasses',
    price: '40.00',
    newPrice: '35.00',
    rating: 4.6,
    category: 'glasses',
    color: 'yellow'
  },
  {
    imgSrc:
      'https://cdn.pixabay.com/photo/2017/08/30/02/51/glasses-2691136_960_720.jpg',
    title: 'Fashion Glasses',
    price: '55.00',
    newPrice: '50.00',
    rating: 4.4,
    category: 'glasses',
    color: 'blue'
  },

  {
    imgSrc:
      'https://cdn.pixabay.com/photo/2016/06/07/17/34/shoes-1447399_960_720.jpg',
    title: 'Running Shoes',
    price: '120.00',
    newPrice: '99.00',
    rating: 4.5,
    category: 'shoes',
    color: 'red'
  },
  {
    imgSrc:
      'https://cdn.pixabay.com/photo/2016/10/04/12/25/feet-1719161_960_720.jpg',
    title: 'Casual Sneakers',
    price: '85.00',
    newPrice: '75.00',
    rating: 4.0,
    category: 'shoes',
    color: 'blue'
  },
  {
    imgSrc:
      'https://cdn.pixabay.com/photo/2016/06/10/21/29/jeans-1446948_960_720.jpg',
    title: 'Slim Fit Jeans',
    price: '50.00',
    newPrice: '45.00',
    rating: 4.7,
    category: 'jeans',
    color: 'black'
  },
  {
    imgSrc:
      'https://cdn.pixabay.com/photo/2017/10/25/16/22/jeans-2896864_960_720.jpg',
    title: 'Classic Straight Jeans',
    price: '60.00',
    newPrice: '55.00',
    rating: 4.2,
    category: 'jeans',
    color: 'blue'
  },
  {
    imgSrc:
      'https://cdn.pixabay.com/photo/2017/10/16/06/11/t-shirt-2854031_960_720.jpg',
    title: 'Graphic T-Shirt',
    price: '20.00',
    newPrice: '15.00',
    rating: 4.8,
    category: 'tshirt',
    color: 'green'
  },
  {
    imgSrc:
      'https://cdn.pixabay.com/photo/2017/08/30/03/39/t-shirt-2691195_960_720.jpg',
    title: 'Plain White T-Shirt',
    price: '18.00',
    newPrice: '14.00',
    rating: 4.3,
    category: 'tshirt',
    color: 'white'
  },
  {
    imgSrc:
      'https://cdn.pixabay.com/photo/2018/09/28/07/56/sunglasses-3700389_960_720.jpg',
    title: 'Sunglasses',
    price: '40.00',
    newPrice: '35.00',
    rating: 4.6,
    category: 'glasses',
    color: 'yellow'
  },
  {
    imgSrc:
      'https://cdn.pixabay.com/photo/2017/08/30/02/51/glasses-2691136_960_720.jpg',
    title: 'Fashion Glasses',
    price: '55.00',
    newPrice: '50.00',
    rating: 4.4,
    category: 'glasses',
    color: 'blue'
  },
  {
    imgSrc:
      'https://cdn.pixabay.com/photo/2016/11/30/16/24/sports-shoes-1871887_960_720.jpg',
    title: 'Sports Shoes',
    price: '135.00',
    newPrice: '109.00',
    rating: 4.8,
    category: 'shoes',
    color: 'green'
  },
  {
    imgSrc:
      'https://cdn.pixabay.com/photo/2015/09/18/19/25/tshirt-942230_960_720.jpg',
    title: 'V-Neck T-Shirt',
    price: '22.00',
    newPrice: '18.00',
    rating: 4.2,
    category: 'tshirt',
    color: 'blue'
  },
  {
    imgSrc:
      'https://cdn.pixabay.com/photo/2018/10/24/12/18/shoes-3764330_960_720.jpg',
    title: 'Leather Boots',
    price: '180.00',
    newPrice: '155.00',
    rating: 4.6,
    category: 'shoes',
    color: 'brown'
  },
  {
    imgSrc:
      'https://cdn.pixabay.com/photo/2018/06/07/17/53/jeans-3455289_960_720.jpg',
    title: 'Ripped Jeans',
    price: '65.00',
    newPrice: '58.00',
    rating: 4.4,
    category: 'jeans',
    color: 'blue'
  },
  {
    imgSrc:
      'https://cdn.pixabay.com/photo/2018/05/16/08/29/t-shirt-3406334_960_720.jpg',
    title: 'Graphic Tee',
    price: '25.00',
    newPrice: '22.00',
    rating: 4.5,
    category: 'tshirt',
    color: 'yellow'
  },
  {
    imgSrc:
      'https://cdn.pixabay.com/photo/2017/09/26/05/16/glasses-2787927_960_720.jpg',
    title: 'Round Glasses',
    price: '50.00',
    newPrice: '45.00',
    rating: 4.7,
    category: 'glasses',
    color: 'green'
  },
  {
    imgSrc:
      'https://cdn.pixabay.com/photo/2018/10/25/18/22/sunglasses-3775560_960_720.jpg',
    title: 'Stylish Sunglasses',
    price: '65.00',
    newPrice: '55.00',
    rating: 4.3,
    category: 'glasses',
    color: 'black'
  },
  {
    imgSrc:
      'https://cdn.pixabay.com/photo/2016/06/07/17/34/shoes-1447399_960_720.jpg',
    title: 'Running Shoes',
    price: '120.00',
    newPrice: '99.00',
    rating: 4.5,
    category: 'shoes',
    color: 'red'
  },
  {
    imgSrc:
      'https://cdn.pixabay.com/photo/2016/10/04/12/25/feet-1719161_960_720.jpg',
    title: 'Casual Sneakers',
    price: '85.00',
    newPrice: '75.00',
    rating: 4.0,
    category: 'shoes',
    color: 'blue'
  },
  {
    imgSrc:
      'https://cdn.pixabay.com/photo/2016/06/10/21/29/jeans-1446948_960_720.jpg',
    title: 'Slim Fit Jeans',
    price: '50.00',
    newPrice: '45.00',
    rating: 4.7,
    category: 'jeans',
    color: 'black'
  },
  {
    imgSrc:
      'https://cdn.pixabay.com/photo/2017/10/25/16/22/jeans-2896864_960_720.jpg',
    title: 'Classic Straight Jeans',
    price: '60.00',
    newPrice: '55.00',
    rating: 4.2,
    category: 'jeans',
    color: 'blue'
  },
  {
    imgSrc:
      'https://cdn.pixabay.com/photo/2017/10/16/06/11/t-shirt-2854031_960_720.jpg',
    title: 'Graphic T-Shirt',
    price: '20.00',
    newPrice: '15.00',
    rating: 4.8,
    category: 'tshirt',
    color: 'green'
  },
  {
    imgSrc:
      'https://cdn.pixabay.com/photo/2017/08/30/03/39/t-shirt-2691195_960_720.jpg',
    title: 'Plain White T-Shirt',
    price: '18.00',
    newPrice: '14.00',
    rating: 4.3,
    category: 'tshirt',
    color: 'white'
  },
  {
    imgSrc:
      'https://cdn.pixabay.com/photo/2018/09/28/07/56/sunglasses-3700389_960_720.jpg',
    title: 'Sunglasses',
    price: '40.00',
    newPrice: '35.00',
    rating: 4.6,
    category: 'glasses',
    color: 'yellow'
  },
  {
    imgSrc:
      'https://cdn.pixabay.com/photo/2017/08/30/02/51/glasses-2691136_960_720.jpg',
    title: 'Fashion Glasses',
    price: '55.00',
    newPrice: '50.00',
    rating: 4.4,
    category: 'glasses',
    color: 'blue'
  },
  {
    imgSrc:
      'https://cdn.pixabay.com/photo/2016/11/30/16/24/sports-shoes-1871887_960_720.jpg',
    title: 'Sports Shoes',
    price: '135.00',
    newPrice: '109.00',
    rating: 4.8,
    category: 'shoes',
    color: 'green'
  },
  {
    imgSrc:
      'https://cdn.pixabay.com/photo/2015/09/18/19/25/tshirt-942230_960_720.jpg',
    title: 'V-Neck T-Shirt',
    price: '22.00',
    newPrice: '18.00',
    rating: 4.2,
    category: 'tshirt',
    color: 'blue'
  },
  {
    imgSrc:
      'https://cdn.pixabay.com/photo/2018/10/24/12/18/shoes-3764330_960_720.jpg',
    title: 'Leather Boots',
    price: '180.00',
    newPrice: '155.00',
    rating: 4.6,
    category: 'shoes',
    color: 'brown'
  },
  {
    imgSrc:
      'https://cdn.pixabay.com/photo/2018/06/07/17/53/jeans-3455289_960_720.jpg',
    title: 'Ripped Jeans',
    price: '65.00',
    newPrice: '58.00',
    rating: 4.4,
    category: 'jeans',
    color: 'blue'
  },
  {
    imgSrc:
      'https://cdn.pixabay.com/photo/2018/05/16/08/29/t-shirt-3406334_960_720.jpg',
    title: 'Graphic Tee',
    price: '25.00',
    newPrice: '22.00',
    rating: 4.5,
    category: 'tshirt',
    color: 'yellow'
  },
  {
    imgSrc:
      'https://cdn.pixabay.com/photo/2017/09/26/05/16/glasses-2787927_960_720.jpg',
    title: 'Round Glasses',
    price: '50.00',
    newPrice: '45.00',
    rating: 4.7,
    category: 'glasses',
    color: 'green'
  },
  {
    imgSrc:
      'https://cdn.pixabay.com/photo/2018/10/25/18/22/sunglasses-3775560_960_720.jpg',
    title: 'Stylish Sunglasses',
    price: '65.00',
    newPrice: '55.00',
    rating: 4.3,
    category: 'glasses',
    color: 'black'
  },
  {
    imgSrc:
      'https://cdn.pixabay.com/photo/2018/11/20/12/40/shoes-3822219_960_720.jpg',
    title: 'Leather Sneakers',
    price: '200.00',
    newPrice: '180.00',
    rating: 4.9,
    category: 'shoes',
    color: 'brown'
  },
  {
    imgSrc:
      'https://cdn.pixabay.com/photo/2018/12/12/21/35/shoes-3866704_960_720.jpg',
    title: 'Sporty Sneakers',
    price: '90.00',
    newPrice: '80.00',
    rating: 4.3,
    category: 'shoes',
    color: 'black'
  },
  {
    imgSrc:
      'https://cdn.pixabay.com/photo/2019/04/08/16/34/t-shirt-4112809_960_720.jpg',
    title: 'Casual Graphic T-Shirt',
    price: '30.00',
    newPrice: '25.00',
    rating: 4.6,
    category: 'tshirt',
    color: 'orange'
  },
  {
    imgSrc:
      'https://cdn.pixabay.com/photo/2019/03/30/18/22/jeans-4099814_960_720.jpg',
    title: 'Distressed Jeans',
    price: '70.00',
    newPrice: '65.00',
    rating: 4.2,
    category: 'jeans',
    color: 'blue'
  },
  {
    imgSrc:
      'https://cdn.pixabay.com/photo/2017/10/11/11/53/shoes-2841352_960_720.jpg',
    title: 'High-Top Sneakers',
    price: '110.00',
    newPrice: '95.00',
    rating: 4.7,
    category: 'shoes',
    color: 'white'
  },
  {
    imgSrc:
      'https://cdn.pixabay.com/photo/2018/05/30/16/14/sunglasses-3442622_960_720.jpg',
    title: 'Polarized Sunglasses',
    price: '45.00',
    newPrice: '40.00',
    rating: 4.8,
    category: 'glasses',
    color: 'brown'
  }
]

export default products
