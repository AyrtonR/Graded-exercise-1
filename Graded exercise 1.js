      const ClothesData = [
        {
          model: "Nike Pro Training Shorts",
          image: "https://www.xxl.fi/filespin/eb316d4956de4f718989c771e370b81e?resize=544,544&quality=90&bgcolor=efefef",
          price: "34.90",
          page: "nike pro short.html",
          description: [
            'Fit:Tight',
            'Material: Polyester 89 %, Spandex 11 %',
            'Breathable and elastic Dry-FIT fabric for comfort',
            'Flat seams and elastic waistband' ]
          
        },
        {
          model: "New Balance Jacket",
          image: "https://www.xxl.fi/filespin/09546743369b4517a37b5b5a883d9f8c?resize=544,544&quality=90&bgcolor=efefef",
          price: "59.90",
          page: "New balance jacket.html",
          description: [
            'Fit:Regular',
            'Material: Polyester 100 %',
            'Water and wind repellent',
            'Breathable fabric' ]
        },
        {
          model: "Nike Dri-Fit Trousers",
          image: "https://www.xxl.fi/filespin/5fa6ab8c4d234b89ae049c3f9b2c8bd1?resize=544,544&quality=90&bgcolor=efefef",
          price: "49.90",
          page: "nike dri fit.html",
          description: [
            'Fit:Slim Fit',
            'Material: Polyester 75 %, Rayon 25 %',
            'Nike Dri-Fit technology',
            'Breathable fabric', ]
        },
        {
         model: "Arsenal Football Club",
         image: "https://www.xxl.fi/filespin/924f2a51fd4847c0b6d767b7d4373937?resize=544,544&quality=90&bgcolor=efefef",
         price: "69.90",
         page: "arsenal football.html",
         description: [
           'Fit:Regular',
           'Material: Polyester 51 %, Recycled Polyester 49 %',
           'Adidas climalite technology',
           'Official Arsenal FC Product' ]
        },
        {
         model: "Under Armour Shirt",
         image: "https://www.xxl.fi/filespin/717d2dc95b314584ac0f0a18e37607fd?resize=544,544&quality=90&bgcolor=efefef",
         price: "24.90",
         page: "ua heatgear shirt.html",
         description: [
           'Fit:Tight',
           'Material: Polyester 100 %',
           'Under Armour heatgear technology',
           '4 way stretch mesh panel on back' ]
        },
        {
         model: "Nike Running Shirt",
         image: "https://www.xxl.fi/filespin/c5dca88805d140609d140b0977e41195?resize=544,544&quality=90&bgcolor=efefef",
         price: "37.90",
         page: "nike running shirt.html",
         description: [
           'Fit:Regular',
           'Material: Polyester 100 %',
           'Nike Dri-fit technology',
           'Breathable material' ]
        },
        {
         model: "McKenzie Camoflage Jacket",
         image: "https://www.xxl.fi/filespin/c8119e95f3534f9d83498332e132b711?resize=544,544&quality=90&bgcolor=efefef",
         price: "99.90",
         page: "mckenzie jacket.html",
         description: [
           'Fit:Regular',
           'Material: Polyester 100 %',
           'Water and wind repellent',
           'Camoflage for better immersion' ]
        },
        {
         model: "Puma Winter Jacket",
         image: "https://www.xxl.fi/filespin/da19f1efb526439ba3d99f159a2e3e3d?resize=544,544&quality=90&bgcolor=efefef",
         price: "149.90",
         page: "puma winter jacket.html",
         description: [
           'Fit:Regular',
           'Material: Polyester 100 %',
           'Wind repellent',
           'Big Puma logo in the back' ]
        },
        {
         model: "Adidas Trousers",
         image: "https://www.xxl.fi/filespin/98a14f6ca44747c3a577da55eff389e4?resize=544,544&quality=90&bgcolor=efefef",
         price: "34.90",
         page: "adidas trousers.html",
         description: [
           'Fit:Tapered fit',
           'Material: Polyester 100 %',
           'Adidas climacool technology',
           'Suitable for sports training' ]
        },
      ];
      
      var cartArray = [] ;
    
        function AddItemToCart(index) {
        if (JSON.parse(sessionStorage.getItem("cartArray")) != null) {
          cartArray = JSON.parse(sessionStorage.getItem("cartArray"));
        }
        cartArray.push(ClothesData[index]);
        sessionStorage.setItem("cartArray", JSON.stringify(cartArray));
        console.log(cartArray);  }
    
   
    function GenCart(index) {
      let ItemInCart = document.createElement('div');
      ItemInCart.id = "Product";
      let _2 = document.createElement('div');
      _2.id = "ProductPic";
      let _6 = document.createElement('a')
      _6.href = cartArray[index].page;
      let _5 = document.createElement('img');
      _5.src = cartArray[index].image;
      _5.width = "180";
      _5.height = "180";
      let _3 = document.createElement('div');
      _3.id = "details";
      let _4 = document.createElement('div');
      _4.id = "price";
      let _7 = document.createElement('p');
      _7.append(document.createTextNode(cartArray[index].model));
      let _8 = document.createElement('p');
      _8.append(document.createTextNode(cartArray[index].price + "€"));
      ItemInCart.append(_2);
      _2.append(_6);
      _2.append(_5);
      ItemInCart.append(_3);
      _3.append(_7);
      ItemInCart.append(_4);
      _4.append(_8);
      document.getElementById('rekt').append(ItemInCart);
    }

    function CartPutter () {
      let totalprice = 0.0;
      cartArray = JSON.parse(sessionStorage.getItem("cartArray"));
      for (let i = 0; i < cartArray.length; i++) {
        GenCart(i); 
        totalprice = totalprice + parseFloat(cartArray[i].price);
      }
      document.getElementById('totalprice').textContent = totalprice + "€";
    }
    

