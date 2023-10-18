var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var Razorpay;
var dataId;
var totalCost = 0;
var allData = [];
var carted = [];
var sortedContent = [];
try {
    fetch("https://fakestoreapi.com/products")
        .then(function (res) { return res.json(); })
        .then(function (json) {
        json.forEach(function (element) {
            var data = {
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
        });
        sortedContent = allData;
        function showallProduct(category) {
            var allCategories = ["all", "mens", "womens", "electronics", "jewelery"];
            allCategories.forEach(function (e) {
                document.getElementById(e).style.backgroundColor = "whitesmoke";
            });
            document.getElementById(category).style.backgroundColor = "#FF426E";
            if (category === "mens")
                category = "men's clothing";
            if (category === "womens")
                category = "women's clothing";
            var content = document.getElementsByClassName("content")[0];
            content.innerHTML = "";
            sortedContent.forEach(function (element) {
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
                    primaryContent.addEventListener("click", function () {
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
                        var str = "";
                        for (var i = 0; i < 5; i++) {
                            if (i < cnt) {
                                str += "⭐ ";
                            }
                            else {
                                str += "<span class=\"fa fa-star\"></span>" + " ";
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
                        button.addEventListener("click", function () {
                            window.alert("Item Added to the Cart");
                            var idx = carted.findIndex(function (cart) { return element.id === cart.id; });
                            if (idx === -1) {
                                var newcartItme = {
                                    id: element.id,
                                    title: element.title,
                                    image: element.image,
                                    quantity: 1,
                                    price: element.price,
                                };
                                carted.push(newcartItme);
                            }
                            else {
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
            var allCategories = ["all", "mens", "womens", "electronics", "jewelery"];
            allCategories.forEach(function (e) {
                document.getElementById(e).style.backgroundColor = "whitesmoke";
            });
            var main = document.getElementsByClassName("content")[0];
            main.innerHTML = "";
            var buttonContinue = document.createElement("button");
            buttonContinue.setAttribute("class", "btn btn-secondary");
            buttonContinue.innerHTML = "Continue to shopping";
            buttonContinue.addEventListener("click", function () { return showallProduct("all"); });
            main.appendChild(buttonContinue);
            //carted Items traversal
            if (carted.length === 0) {
                var sorry = document.createElement("p");
                sorry.innerHTML =
                    "No Items in the cart! Continue shopping to add items in the cart.";
                main.appendChild(sorry);
                totalCost = 0;
            }
            else {
                //carted items in tabular form
                totalCost = 0;
                var table = document.createElement("table");
                table.setAttribute("class", "table");
                var tbody = document.createElement("tbody");
                carted.forEach(function (element) {
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
                    button1.addEventListener("click", function () {
                        if (element.quantity === 1) {
                            removeEle(element);
                        }
                        else if (element.quantity > 1) {
                            element.quantity = element.quantity - 1;
                            button2.innerHTML = "" + element.quantity;
                            totalCost -= element.price;
                            totalCost = Math.round(totalCost);
                            document.getElementById("total").innerHTML =
                                "Total Amount " + totalCost;
                        }
                    });
                    //event listner for decrease quantity of a item
                    button3.addEventListener("click", function () {
                        element.quantity = element.quantity + 1;
                        button2.innerHTML = "" + element.quantity;
                        totalCost += element.price;
                        totalCost = Math.round(totalCost);
                        document.getElementById("total").innerHTML =
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
                    removeElement.addEventListener("click", function () { return removeEle(element); });
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
                button.addEventListener("click", function () { return modelDialog(totalCost); });
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
        function razorpayRequest() {
            return __awaiter(this, void 0, void 0, function () {
                var headersList, bodyContent, response, data;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            headersList = {
                                Accept: "*/*",
                                "Content-Type": "application/json",
                                Authorization: "Basic cnpwX3Rlc3RfRXRuNmRzSkVadWh1dXA6ZkliS2RsQTZJaHRrM2Q1djRYUUUwMXNs",
                            };
                            bodyContent = JSON.stringify({
                                amount: 500,
                                currency: "INR",
                                receipt: "qwsaq1",
                            });
                            return [4 /*yield*/, fetch("https://api.razorpay.com/v1/orders", {
                                    method: "POST",
                                    body: bodyContent,
                                    headers: headersList,
                                })];
                        case 1:
                            response = _a.sent();
                            return [4 /*yield*/, response.json()];
                        case 2:
                            data = _a.sent();
                            dataId = data.id;
                            return [2 /*return*/];
                    }
                });
            });
        }
        //razorpay payment gateway payload
        function razorpayResponse(total) {
            return __awaiter(this, void 0, void 0, function () {
                var options, rzp1;
                return __generator(this, function (_a) {
                    options = {
                        key: "rzp_test_Etn6dsJEZuhuup",
                        amount: total * 100,
                        currency: "INR",
                        name: "Acme Corp",
                        description: "Test Transaction",
                        image: "https://example.com/your_logo",
                        order_id: dataId,
                        handler: function (response) {
                            alert(response.razorpay_payment_id);
                            carted.splice(0, carted.length);
                            totalCost = 0;
                            cartItems();
                        },
                        prefill: {
                            //We recommend using the prefill parameter to auto-fill customer's contact information, especially their phone number
                            name: "Gaurav Kumar",
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
                    rzp1 = new Razorpay(options);
                    rzp1.on("payment.failed", function (response) {
                        alert(response.error.code);
                        alert(response.error.description);
                        alert(response.error.source);
                        alert(response.error.step);
                        alert(response.error.reason);
                        alert(response.error.metadata.order_id);
                        alert(response.error.metadata.payment_id);
                    });
                    try {
                        rzp1.open();
                    }
                    catch (err) {
                        console.log(err);
                    }
                    return [2 /*return*/];
                });
            });
        }
        // model dialog for payment conformtion
        function modelDialog(totalCost) {
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
            cancleButton1.addEventListener("click", function () {
                clearTheDialog();
            });
            modalFooter.appendChild(cancleButton1);
            var acceptButton = document.createElement("button");
            acceptButton.setAttribute("type", "button");
            acceptButton.setAttribute("class", "btn btn-primary");
            acceptButton.innerHTML = "Proceed to Pay";
            acceptButton.addEventListener("click", function () {
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
        function removeEle(item) {
            totalCost -= item.quantity * item.price;
            carted = carted.filter(function (element) { return element != item; });
            cartItems();
        }
        //Sort by functions 
        function sortInOrder(condition) {
            if (condition === "high") {
                sortedContent.sort(function (a, b) { return b.price - a.price; });
            }
            else if (condition === "low") {
                sortedContent.sort(function (a, b) { return a.price - b.price; });
            }
            else if (condition === "Popularity") {
                sortedContent.sort(function (a, b) { return b.rating.count - a.rating.count; });
            }
            else if (condition === "rating-high") {
                sortedContent.sort(function (a, b) { return b.rating.rate - a.rating.rate; });
            }
            else if (condition === "rating-low") {
                sortedContent.sort(function (a, b) { return a.rating.rate - b.rating.rate; });
            }
            showallProduct("all");
        }
        //filter Items on rating 
        function filterInOrder(condition) {
            sortedContent = allData;
            if (condition === "rating-4") {
                var filtered = sortedContent.filter(function (item) { return item.rating.rate > 4.0; });
                sortedContent = filtered;
            }
            else if (condition === "rating-3") {
                var filtered = sortedContent.filter(function (item) { return item.rating.rate >= 3.0 && item.rating.rate < 4.0; });
                sortedContent = filtered;
            }
            else if (condition === "rating-2") {
                var filtered = sortedContent.filter(function (item) { return item.rating.rate >= 2.0 && item.rating.rate < 3.0; });
                sortedContent = filtered;
            }
            else if (condition === "rating-1") {
                var filtered = sortedContent.filter(function (item) { return item.rating.rate >= 1.0 && item.rating.rate < 2.0; });
                sortedContent = filtered;
            }
            showallProduct("all");
        }
        //all event listners
        document
            .getElementById("all")
            .addEventListener("click", function () { return showallProduct("all"); });
        document
            .getElementById("mens")
            .addEventListener("click", function () { return showallProduct("mens"); });
        document
            .getElementById("womens")
            .addEventListener("click", function () { return showallProduct("womens"); });
        document
            .getElementById("electronics")
            .addEventListener("click", function () { return showallProduct("electronics"); });
        document
            .getElementById("jewelery")
            .addEventListener("click", function () { return showallProduct("jewelery"); });
        document
            .getElementById("logo")
            .addEventListener("click", function () { return showallProduct("all"); });
        document
            .getElementsByClassName("btn btn-primary position-relative")[0]
            .addEventListener("click", function () { return cartItems(); });
        document
            .getElementById("logo")
            .addEventListener("click", function () { return showallProduct("all"); });
        document
            .getElementById("high")
            .addEventListener("click", function () { return sortInOrder("high"); });
        document
            .getElementById("low")
            .addEventListener("click", function () { return sortInOrder("low"); });
        document
            .getElementById("Popularity")
            .addEventListener("click", function () { return sortInOrder("Popularity"); });
        document
            .getElementById("rating-high")
            .addEventListener("click", function () { return sortInOrder("rating-high"); });
        document
            .getElementById("rating-low")
            .addEventListener("click", function () { return sortInOrder("rating-low"); });
        document
            .getElementById("reset")
            .addEventListener("click", function () { return filterInOrder("reset"); });
        document
            .getElementById("rating-4")
            .addEventListener("click", function () { return filterInOrder("rating-4"); });
        document
            .getElementById("rating-3")
            .addEventListener("click", function () { return filterInOrder("rating-3"); });
        document
            .getElementById("rating-2")
            .addEventListener("click", function () { return filterInOrder("rating-2"); });
        document
            .getElementById("rating-1")
            .addEventListener("click", function () { return filterInOrder("rating-1"); });
        showallProduct("all");
    });
}
catch (e) {
    console.log(e);
}
