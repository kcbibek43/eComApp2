let Razorpay: any;
let dataId: string;
let totalCost: number = 0;
interface dataModel {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

interface cartdataModel {
  id: number;
  title: string;
  image: string;
  price: number;
  quantity: number;
}

let allData: Array<dataModel> = [];
let carted: Array<cartdataModel> = [];
let sortedContent : Array<dataModel> = [];

try {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((json) => {
      json.forEach(
        (element: {
          id: number;
          title: string;
          price: number;
          description: string;
          category: string;
          image: string;
          rating: {
            rate: number;
            count: number;
          };
        }) => {
          let data: dataModel = {
            id: element.id,
            title: element.title,
            price: element.price,
            description: element.description,
            category: element.category,
            image: element.image,
            rating: {
              rate: element.rating.rate,
              count: element.rating.count,
            },
          };
          allData.push(data);
        }
      );

    
    sortedContent = allData;


    function showallProduct(category: string) {



        const allCategories = ["all", "mens", "womens", "electronics", "jewelery"];
        allCategories.forEach((e) => {
          document.getElementById(e)!.style.backgroundColor = "whitesmoke";
        });
        document.getElementById(category)!.style.backgroundColor = "#FF426E";
        if (category === "mens") category = "men's clothing";
        if (category === "womens") category = "women's clothing";
      
        var content = document.getElementsByClassName("content")[0];
        content.innerHTML = "";

        sortedContent.forEach((element) => {


          if (category === "all" || element.category === category) { 
            
            
            //creation of items div content
            var primaryContent = document.createElement("div");
            primaryContent.setAttribute("id", "box");
            primaryContent.setAttribute("class", "card");
            primaryContent.style.margin = "1.3vw";
            primaryContent.style.width = "15rem";
            var imgdiv = document.createElement("div");
            var img = document.createElement("img");
            img.setAttribute("class", "img-fluid");
            img.setAttribute("src", element.image);
            primaryContent.appendChild(img);
            var secondaryContent = document.createElement("div");
            secondaryContent.setAttribute("class", "card-title");
            var title = document.createElement("h5");
            title.setAttribute("class", "card-title");
            title.style.width = "100%";
            title.style.height = "40px";
            title.innerHTML = element.title;
            var list = document.createElement("ul");
            list.setAttribute("class", "list-group");
            var price = document.createElement("li");
            price.setAttribute("class", "list-group-item");
            price.style.fontWeight = "500";
            price.innerHTML = "$" + element.price;
            var addtocart = document.createElement("li");
            addtocart.setAttribute("class", "list-group-item");
            price.innerHTML = "$ " + element.price;
            var addtocartButton = document.createElement("button");
            addtocartButton.innerHTML = "Buy Now!";
            addtocartButton.setAttribute("class", "btn btn-primary");
            addtocartButton.style.width = "100%";
            addtocartButton.style.height = "100%";
            addtocart.appendChild(addtocartButton);
            list.appendChild(price);
            list.appendChild(addtocart);
            secondaryContent.appendChild(list);
            imgdiv.appendChild(img);
            primaryContent.appendChild(imgdiv);
            primaryContent.appendChild(title);
            primaryContent.appendChild(secondaryContent);
      
            primaryContent.addEventListener("click", () => {
              content.innerHTML = "";
              var div1 = document.createElement("div");
              var div2 = document.createElement("div");
              var img = document.createElement("img");
              img.setAttribute("src", element.image);
              img.style.width = "100%";
              img.style.height = "100%";
              div1.appendChild(img);
              div1.style.backgroundColor = "whitesmoke";
              div2.style.backgroundColor = "whitesmoke";
              div2.setAttribute("class", "container-fluid");
              div1.style.width = "40%";
              div2.style.width = "40%";
              div2.style.padding = "2vw";
              var heading = document.createElement("h5");
              heading.innerHTML = element.title;
              div2.appendChild(heading);
      
              var categorydesc = document.createElement("p");
              categorydesc.innerHTML = element.category;
              categorydesc.style.fontStyle = "italic";
              div2.appendChild(categorydesc);
      
              div2.appendChild(document.createElement("hr"));
      
              var price = document.createElement("h6");
              price.innerHTML = "Price : $ " + element.price + " only!";
              div2.appendChild(price);
              var rating = document.createElement("h6");
              var cnt = Math.round(element.rating.rate);
              var str: string = "";
              for (var i = 0; i < 5; i++) {
                if (i < cnt) {
                  str += "⭐ ";
                } else {
                  str += `<span class="fa fa-star"></span>` + " ";
                }
              }
              rating.innerHTML = "Rating: " + str;
              div2.appendChild(rating);
              var desc = document.createElement("h6");
              desc.innerHTML = element.description;
              div2.appendChild(desc);
      
              var button = document.createElement("button");
              button.innerHTML = "Add to the Cart";
              button.setAttribute("id", "addcart");
              button.setAttribute("class", "btn btn-primary");
              button.style.alignSelf = "center";
              var reviews = document.createElement("h6");
              reviews.innerHTML = element.rating.count + " Reviews";
              div2.appendChild(reviews);


              button.addEventListener("click", () => {
                window.alert("Item Added to the Cart");
                let idx = carted.findIndex((cart) => element.id === cart.id);
                if (idx === -1) {
                  let newcartItme: cartdataModel = {
                    id: element.id,
                    title: element.title,
                    image: element.image,
                    quantity: 1,
                    price: element.price,
                  };
                  carted.push(newcartItme);
                } else {
                  carted[idx].quantity += 1;
                }
              });
              div2.appendChild(button);
              content.appendChild(div1);
              content.appendChild(div2);
            });
            content.appendChild(primaryContent);
          }
        });
      }
      

      function cartItems() {
        const allCategories = ["all", "mens", "womens", "electronics", "jewelery"];
        allCategories.forEach((e) => {
          document.getElementById(e)!.style.backgroundColor = "whitesmoke";
        });
      
        var main = document.getElementsByClassName("content")[0];
        main.innerHTML = "";
        var buttonContinue = document.createElement("button");
        buttonContinue.setAttribute("class", "btn btn-secondary");
        buttonContinue.innerHTML = "Continue to shopping";
        buttonContinue.addEventListener("click", () => showallProduct("all"));
        main.appendChild(buttonContinue);
      
        //carted Items traversal
        if (carted.length === 0) {
          var sorry = document.createElement("p");
          sorry.innerHTML =
            "No Items in the cart! Continue shopping to add items in the cart.";
          main.appendChild(sorry);
          totalCost = 0;
        } else {
          //carted items in tabular form
          totalCost = 0;
          var table = document.createElement("table");
          table.setAttribute("class", "table");
          var tbody = document.createElement("tbody");
          carted.forEach((element) => {
            var trow = document.createElement("tr");
            var td1 = document.createElement("td");
            td1.innerHTML = "";
            var td2 = document.createElement("td");
            td2.innerHTML = element.title;
            var td3 = document.createElement("td");
            var td4 = document.createElement("td");
            var divx = document.createElement("div");
            divx.setAttribute("class", "btn-group btn-group-sm");
            divx.setAttribute("role", "group");
            divx.setAttribute("aria-label", "Small button group");
            var button1 = document.createElement("button");
            button1.setAttribute("type", "button");
            button1.setAttribute("class", "btn btn-outline-primary");
            button1.innerHTML = "-";
            var button2 = document.createElement("button");
            button2.setAttribute("type", "button");
            button2.setAttribute("class", "btn btn-outline-primary");
            button2.innerHTML = "" + element.quantity;
            var button3 = document.createElement("button");
            button3.setAttribute("type", "button");
            button3.setAttribute("class", "btn btn-outline-primary");
            button3.innerHTML = "+";
            divx.appendChild(button1);
            divx.appendChild(button2);
            divx.appendChild(button3);
            td4.appendChild(divx);
      
            //event listner for increase quantity of a item
            button1.addEventListener("click", () => {
              if(element.quantity===1){
                removeEle(element);
              }
              else if (element.quantity > 1) {
                element.quantity = element.quantity - 1;
                button2.innerHTML = "" + element.quantity;
                totalCost -= element.price;
                totalCost = Math.round(totalCost);
                document.getElementById("total")!.innerHTML =
                  "Total Amount " + totalCost;
              }
            });
      
            //event listner for decrease quantity of a item

            button3.addEventListener("click", () => {
              element.quantity = element.quantity + 1;
              button2.innerHTML = "" + element.quantity;
              totalCost += element.price;
              totalCost = Math.round(totalCost);
              document.getElementById("total")!.innerHTML =
                "Total Amount " + totalCost;
            });
      
            var image = document.createElement("img");
            image.setAttribute("src", element.image);
            image.style.width = "60px";
            image.style.height = "60px";
            td1.appendChild(image);
            totalCost += element.price;
            td3.innerHTML = "$ " + element.price;
            var td5 = document.createElement("td");
            var removeElement = document.createElement("button");
            removeElement.setAttribute("class", "btn");
            removeElement.setAttribute("type", "button");
            removeElement.innerHTML = "Remove Item";
            removeElement.addEventListener("click", () => removeEle(element));
            td5.appendChild(removeElement);
            trow.appendChild(td1);
            trow.appendChild(td2);
            trow.appendChild(td3);
            trow.appendChild(td4);
            trow.appendChild(td5);
            tbody.appendChild(trow);
          });
      
          table.appendChild(tbody);
          main.appendChild(table);
          var button = document.createElement("button");
          button.innerHTML = "Checkout";
          button.addEventListener("click", () => modelDialog(totalCost));
          button.setAttribute("class", "btn btn-primary");
          button.style.height = "8vh";
          button.style.borderRadius = "7px";
          var subtotal = document.createElement("h3");
          subtotal.setAttribute("id", "total");
          subtotal.style.display = "flex";
          subtotal.style.justifyContent = "space-between";
          var span1 = document.createElement("span");
          var span2 = document.createElement("span");
          span1.innerHTML = "Total Amount ";
          span2.innerHTML = "" + Math.round(totalCost);
          subtotal.appendChild(span1);
          subtotal.appendChild(span2);
          subtotal.style.gap = "2vw";
          main.appendChild(document.createElement("hr"));
          main.appendChild(subtotal);
          main.appendChild(document.createElement("hr"));
          main.appendChild(button);
        }
      }
      //razorpay request
      async function razorpayRequest() {
        let headersList = {
          Accept: "*/*",
          "Content-Type": "application/json",
          Authorization:
            "Basic cnpwX3Rlc3RfRXRuNmRzSkVadWh1dXA6ZkliS2RsQTZJaHRrM2Q1djRYUUUwMXNs",
        };
      
        let bodyContent = JSON.stringify({
          amount: 500,
          currency: "INR",
          receipt: "qwsaq1",
        });
      
        let response = await fetch("https://api.razorpay.com/v1/orders", {
          method: "POST",
          body: bodyContent,
          headers: headersList,
        });
      
        let data = await response.json();
        dataId = data.id;
      }
      
      //razorpay payment gateway payload
      
      async function razorpayResponse(total: number) {
        var options = {
          key: "rzp_test_Etn6dsJEZuhuup", // Enter the Key ID generated from the Dashboard
          amount: total * 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
          currency: "INR",
          name: "Acme Corp", //your business name
          description: "Test Transaction",
          image: "https://example.com/your_logo",
          order_id: dataId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
          handler: function (response: { razorpay_payment_id: any }) {
            alert(response.razorpay_payment_id);
            carted.splice(0, carted.length);
            totalCost = 0;
            cartItems();
          },
          prefill: {
            //We recommend using the prefill parameter to auto-fill customer's contact information, especially their phone number
            name: "Gaurav Kumar", //your customer's name
            email: "gaurav.kumar@example.com",
            contact: "9000090000", //Provide the customer's phone number for better conversion rates
          },
          notes: {
            address: "Razorpay Corporate Office",
          },
          theme: {
            color: "#3399cc",
          },
        };
        var rzp1 = new Razorpay(options);
        rzp1.on(
          "payment.failed",
          function (response: {
            error: {
              code: any;
              description: any;
              source: any;
              step: any;
              reason: any;
              metadata: { order_id: any; payment_id: any };
            };
          }) {
            alert(response.error.code);
            alert(response.error.description);
            alert(response.error.source);
            alert(response.error.step);
            alert(response.error.reason);
            alert(response.error.metadata.order_id);
            alert(response.error.metadata.payment_id);
          }
        );
        try {
          rzp1.open();
        } catch (err) {
          console.log(err);
        }
      }
      
      // model dialog for payment conformtion
      function modelDialog(totalCost: number) {
        var modalbar = document.createElement("div");
        modalbar.setAttribute("class", "modal-dialog modal-dialog-centered");
        var modalContent = document.createElement("div");
        modalContent.setAttribute("class", "modal-content");
        var modalHeader = document.createElement("div");
        modalHeader.setAttribute("class", "modal-header");
        var heading = document.createElement("h1");
        heading.setAttribute("class", "modal-title fs-5");
        heading.setAttribute("id", "exampleModalCenterTitle");
        heading.innerHTML = "Payment Window";
        modalHeader.appendChild(heading);
        modalContent.appendChild(modalHeader);
        var modalBody = document.createElement("div");
        modalBody.setAttribute("class", "modal-body");
        var p = document.createElement("p");
        p.innerHTML = "Do you want to continue payment";
        modalBody.appendChild(p);
        modalContent.appendChild(modalBody);
      
        var modalFooter = document.createElement("div");
        modalFooter.setAttribute("class", "modal-footer");
      
        var cancleButton1 = document.createElement("button");
        cancleButton1.setAttribute("type", "button");
        cancleButton1.setAttribute("class", "btn btn-secondary");
        cancleButton1.setAttribute("data-bs-dismiss", "modal");
        cancleButton1.innerHTML = "Close";
        cancleButton1.addEventListener("click", () => {
          clearTheDialog();
        });
        modalFooter.appendChild(cancleButton1);
        var acceptButton = document.createElement("button");
        acceptButton.setAttribute("type", "button");
        acceptButton.setAttribute("class", "btn btn-primary");
        acceptButton.innerHTML = "Proceed to Pay";
        acceptButton.addEventListener("click", () => {
          razorpayResponse(totalCost);
        });
        modalFooter.appendChild(acceptButton);
      
        modalContent.appendChild(modalFooter);
        var modalDiv = document.createElement("div");
        modalDiv.setAttribute("class", "modal fade show");
        modalDiv.setAttribute("id", "exampleModalCenter");
        modalDiv.setAttribute("tabindex", "-1");
        modalDiv.setAttribute("aria-labelledby", "exampleModalCenterTitle");
        modalDiv.style.display = "block";
        modalDiv.style.paddingLeft = "0px";
        modalDiv.setAttribute("aria-modal", "true");
        modalDiv.setAttribute("role", "dialog");
        var x = document.getElementsByClassName("content")[0];
        modalbar.appendChild(modalContent);
        modalDiv.appendChild(modalbar);
        x.appendChild(modalDiv);
      
        razorpayRequest();
      }
      //clear the dialog
      function clearTheDialog() {
        var dialog = document.getElementsByClassName("modal fade show")[0];
        dialog.innerHTML = "";
        cartItems();
      }
      
      //remove element from cart
      function removeEle(item: cartdataModel) {
        totalCost -= item.quantity * item.price;
        carted = carted.filter((element) => element != item);
        cartItems();
      }


      //Sort by functions 
      function sortInOrder(condition : string){
        if(condition==="high"){
          sortedContent.sort((a: dataModel, b: dataModel) => b.price - a.price);

        }
        else if (condition === "low"){
          sortedContent.sort((a: dataModel, b: dataModel) => a.price - b.price);

        }
        else if(condition === "Popularity"){
          sortedContent.sort((a: dataModel, b: dataModel) => b.rating.count - a.rating.count);

        }
        else if(condition === "rating-high"){
          sortedContent.sort((a: dataModel, b: dataModel) => b.rating.rate - a.rating.rate);
        }
        else if (condition === "rating-low"){
          sortedContent.sort((a: dataModel, b: dataModel) => a.rating.rate - b.rating.rate);
        }
          showallProduct("all");
      }

      //filter Items on rating 

      function filterInOrder(condition : string){
        sortedContent = allData;
        if(condition==="rating-4"){

          let filtered = sortedContent.filter((item) => item.rating.rate > 4.0);
          sortedContent = filtered;
        }
        else if (condition === "rating-3"){
          let filtered = sortedContent.filter((item) => item.rating.rate >= 3.0 && item.rating.rate < 4.0);
          sortedContent = filtered;
        }
        else if(condition === "rating-2"){
          let filtered = sortedContent.filter((item) => item.rating.rate >= 2.0 && item.rating.rate < 3.0);
          sortedContent = filtered;
        }
        else if(condition === "rating-1"){
          let filtered = sortedContent.filter((item) => item.rating.rate >= 1.0 && item.rating.rate < 2.0);
          sortedContent = filtered;
        }
          showallProduct("all");
      }

      //all event listners
      document
        .getElementById("all")!
        .addEventListener("click", () => showallProduct("all"));
      document
        .getElementById("mens")!
        .addEventListener("click", () => showallProduct("mens"));
      document
        .getElementById("womens")!
        .addEventListener("click", () => showallProduct("womens"));
      document
        .getElementById("electronics")!
        .addEventListener("click", () => showallProduct("electronics"));
      document
        .getElementById("jewelery")!
        .addEventListener("click", () => showallProduct("jewelery"));
      document
        .getElementById("logo")!
        .addEventListener("click", () => showallProduct("all"));
      document
        .getElementsByClassName("btn btn-primary position-relative")[0]
        .addEventListener("click", () => cartItems());
      document
      .getElementById("logo")!
        .addEventListener("click", () => showallProduct("all"));
      document
        .getElementById("high")!
        .addEventListener("click", () => sortInOrder("high"));
      document
        .getElementById("low")!
        .addEventListener("click", () => sortInOrder("low"));
      document
        .getElementById("Popularity")!
        .addEventListener("click", () => sortInOrder("Popularity"));
      document
        .getElementById("rating-high")!
        .addEventListener("click", () => sortInOrder("rating-high"));
      document
        .getElementById("rating-low")!
        .addEventListener("click", () => sortInOrder("rating-low"));     
      document
        .getElementById("reset")!
        .addEventListener("click", () => filterInOrder("reset"));
      document
        .getElementById("rating-4")!
        .addEventListener("click", () => filterInOrder("rating-4"));
      document
        .getElementById("rating-3")!
        .addEventListener("click", () => filterInOrder("rating-3"));
      document
        .getElementById("rating-2")!
        .addEventListener("click", () => filterInOrder("rating-2"));
      document
        .getElementById("rating-1")!
        .addEventListener("click", () => filterInOrder("rating-1"));

      showallProduct("all");
      
    });
} catch (e) {
  console.log(e);
}


