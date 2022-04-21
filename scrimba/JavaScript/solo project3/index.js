const services = document.querySelectorAll(".service") //用class定位三个button获取三种服务
const list = document.querySelector(".invoice-items") //定义一个list 用class定位并放置用于显示用户选的service
const displayTotal = document.getElementById("display-total")//显示的总金额
const sendInvoice = document.getElementById("send-invoice")//最后的提交/清零button

let invoiceItems = []; //定义一个数列存储所有的服务item和price

function charge(event) { //主函数 提交项目进InvoiceItems[]
    const type = event.target.getAttribute("'data-type") //event.target.getAttribute() 定义服务的项目类型
    const price = event.target.getAttribute("data-price") //定义服务的项目费用
    const alreadyCharged = invoiceItems.some((invoiceItem) => { //检查InvoiceItems[]里是否已经有某个InvoiceItem，返回一个布尔值true
        return type === invoiceItem.type  //返回type和某个InvoiceItem的服务项目类型严格相等
    })

    if (alreadyCharged) { //条件：若已经存在为true
        return false //返回false
    }

    invoiceItems.push({ type, price }) //主函数 push button带来的参数{type，price}进InvoiceItems[]
    showList() //主函数 显示用户选择的service和price
    showTotalAmount() //主函数 显示price之和
    updateDisabled() //？？？这个是啥！
}

function showList() { //封装 
    let listHTML = ""

    invoiceItems.forEach((invoiceItem, index) => {
        listHTML +=`
            <div class="invoice-item">
                <div class="item">
                    <h3>${invoiceItem.type}</h3>
                    <span data-index="${index}">Remove</span>
                </div>
                <span class="price"><em>$</em>${invoiceItem.price}</span>
            </div>
        `
    })
    list.innerHTML = listHTML
}

function showTotalAmount() { //封装
    let totalAmount = 0

    invoiceItems.forEach((invoiceItem) => {
        totalAmount += parseInt(invoiceItem.price)
    })

    displayTotal.innerHTML = `$${totalAmount}`
}

function updateDisabled() {  //虽然看不懂这个但是封装
    [...services].forEach((service) => {
        const alreadyCharged = invoiceItems.some((invoiceItem) => {
            return service.getAttribute("data-type") === invoiceItem.type
        })
        service.disabled = alreadyCharged
    })
}

[...services].forEach((service) => { 
    service.addEventListener("click", charge)
})

sendInvoice.addEventListener("click",() => {
    invoiceItems = []
    showList()
    showTotalAmount()
    updateDisabled()
})

list.addEventListener("click", (event) => { 
    const index = event.target.getAttribute("data-type")

    if (index === null) {
        return false
    }

    invoiceItems.splice(parseInt(index), 1)
    showList()
    showTotalAmount()
    updateDisabled()
})