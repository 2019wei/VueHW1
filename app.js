// 產品資料格式

const products = [
    {
        category: "甜甜圈",
        content: "尺寸：14x14cm",
        description: "濃郁的草莓風味，中心填入滑順不膩口的卡士達內餡，帶來滿滿幸福感！",
        id: "-L9tH8jxVb2Ka_DYPwng",
        is_enabled: 1,
        origin_price: 150,
        price: 99,
        title: "草莓莓果夾心圈",
        unit: "個",
        num: 10,
        imageUrl: "https://images.unsplash.com/photo-1583182332473-b31ba08929c8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzR8fGRvbnV0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
        imagesUrl: [
            "https://images.unsplash.com/photo-1626094309830-abbb0c99da4a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2832&q=80",
            "https://images.unsplash.com/photo-1559656914-a30970c1affd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTY0fHxkb251dHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60"
        ]
    },
    {
        category: "蛋糕",
        content: "尺寸：6寸",
        description: "蜜蜂蜜蛋糕，夾層夾上酸酸甜甜的檸檬餡，清爽可口的滋味讓人口水直流！",
        id: "-McJ-VvcwfN1_Ye_NtVA",
        is_enabled: 16,
        origin_price: 1000,
        price: 900,
        title: "蜂蜜檸檬蛋糕",
        unit: "個",
        num: 1,
        imageUrl: "https://images.unsplash.com/photo-1627834377411-8da5f4f09de8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1001&q=80",
        imagesUrl: [
            "https://images.unsplash.com/photo-1618888007540-2bdead974bbb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=987&q=80",
        ]
    },
    {
        category: "蛋糕",
        content: "尺寸：6寸",
        description: "法式煎薄餅加上濃郁可可醬，呈現經典的美味及口感。",
        id: "-McJ-VyqaFlLzUMmpPpm",
        is_enabled: 1,
        origin_price: 700,
        price: 600,
        title: "暗黑千層",
        unit: "個",
        num: 15,
        imageUrl: "https://images.unsplash.com/photo-1505253149613-112d21d9f6a9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDZ8fGNha2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
        imagesUrl: [
            "https://images.unsplash.com/flagged/photo-1557234985-425e10c9d7f1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA5fHxjYWtlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
            "https://images.unsplash.com/photo-1540337706094-da10342c93d8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fGNha2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60"
        ]
    }
]

let productDetail = {};

const app = document.querySelector('#app tbody');
const total = document.querySelector('#total');
const detail = document.querySelector('#detail');


function handleDetail(idx) {
    productDetail = {};
    productDetail = { ...products[idx] };
    render();
}



function render() {
    let template = ``;
    products.forEach((item, idx) => {
        console.log(item, idx)
        template = template + `
        <tr>
                    <td width="150">${item.title}</td>
                    <td width="120">
                      ${item.origin_price}
                    </td>
                    <td width="120">
                    ${item.price}
                    </td>
                    <td width="150">
                    ${item.is_enabled ? '<span class="text-success">啟用</span>' : '<span>未啟用</span>'}
                    </td>
                    <td width="120">
                      <button type="button" class="btn btn-primary detailBtn" data-id="${idx}">查看細節</button>
                    </td>
                  </tr>
        
        `

    });
    app.innerHTML = template;
    total.innerHTML = products.length;

    const detailBtn = document.querySelectorAll('.detailBtn');
    detailBtn.forEach(btn => {
        btn.addEventListener('click', function (e) {
            console.log(e.target.dataset.id);
            const id = Number.parseInt(e.target.dataset.id);
            handleDetail(id);
        });
    });

    let detailTemplate = `<h2>單一產品細節</h2>`;
    let imagesUrlTemplate = ``;
    if (productDetail.id) {
        detailTemplate += `
        <div class="card mb-3">
          <img src="${productDetail.imageUrl}" class="card-img-top primary-image" alt="主圖">
          <div class="card-body">
            <h5 class="card-title">
              ${productDetail.title}
              <span class="badge bg-primary ms-2">${productDetail.category}</span>
            </h5>
            <p class="card-text">商品描述：${productDetail.description}</p>
            <p class="card-text">商品內容：${productDetail.content}</p>
            <div class="d-flex">
              <p class="card-text me-2">${productDetail.price}</p>
              <p class="card-text text-secondary"><del>${productDetail.origin_price}</del></p>
              ${productDetail.unit} / 元
            </div>
          </div>
        </div>
          <img src="" alt="" class="images m-2">
        `;

        productDetail.imagesUrl.forEach(item => {
            imagesUrlTemplate += `<img src="${item}" alt="" class="images m-2">`
        });

        detailTemplate = detailTemplate + imagesUrlTemplate;

    } else {
        detailTemplate += '<p class="text-secondary">請選擇一個商品查看</p>';
    }

    detail.innerHTML = detailTemplate;

}

function init() {
    render()
}

init();
