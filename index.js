// const form = document.getElementById("form");
// // console.log(form);
// const text = `
// 【您的订单已经生成】
// -------------------------
// 奶茶口味：${form.type.value}
//         数量：${form.num.value}
//         杯型：${form.bottle.value}
//         甜度：${form.sugar.value}
//         免费小料：${form["freeSnack"] ? form["freeSnack"] : "-"}
//         加价小料：${form["unfreeSnack"] ? form["unfreeSnack"] : "-"}
//         是否加冰：${form.ofIce.value}
//         是否去茶底：${form["ofTea"]}
//         地址：${form.address}
//         手机号：${form.phone}
//         期待送达时间：${form.time}
//         备注：${form.note}
//         支付方式：${form["pay"]}`

// //为按钮添加鼠标事件
// const sub = document.getElementById('submit')
// sub.addEventListener('click', function () {
//         alert(text);
// });
// //     console.log(form.type);
// function getValue(params) {

// }
// const date = document.getElementById("tasty")
// // console.log(date);
// let array = [...date]
// console.log(array);

// let str = new Array(3);

// for (var i = 0; i < date.length; i++) {
//         if (date[i].checked == true) { str[i] = date[i].value; }
// };
// for (var j in str) { console.log(str[j]); }   







    
// const orderForm = document.querySelector("#form");
// const scrollToTopBtn = document.querySelector(".to-top");

// const getOrderText = (formVal) => {
//     const text = `
//         【您的订单已经生成】
//         ------------------------
//         奶茶口味：${formVal.type}
//         数量：${formVal.num}
//         杯型：${formVal.bottle}
//         甜度：${formVal.sugar}
//         免费小料：${formVal["freeSnack"] ? formVal["freeSnack"] : "-"}
//         加价小料：${formVal["unfreeSnack"] ? formVal["unfreeSnack"] : "-"}
//         是否加冰：${formVal.ofIce}
//         是否去茶底：${formVal["ofTea"]}
//         地址：${formVal.address}
//         手机号：${formVal.phone}
//         期待送达时间：${formVal.time}
//         备注：${formVal.note}
//         支付方式：${formVal["pay"]}
//     `;
//     return text;
// }

// const onSubmit = (e) => {
//     e.preventDefault();
//     const formData = new FormData(orderForm);
//     const formVals = {};
//     for (var pair of formData.entries()) {
//         const propName = pair[0];
//         const propVal = pair[1];

//         if (formVals[propName]) {
//             formVals[propName] = [propVal].concat(formVals[propName]);
//         } else {
//             formVals[propName] = propVal;
//         }
//     }
//     console.log(formVals);
//     alert(getOrderText(formVals));
// }

// orderForm.addEventListener("submit", onSubmit);

// scrollToTopBtn.addEventListener("click", () => {
//     document.documentElement.scrollTop = 0;
// })





// const form = document.getElementById("form");
// const submitBtn = document.getElementById("submit")
// const {tasty,num,bottle,sugar,freeSnack,unfreeSnack,ofIce,ofTea,address,time,note,pay} = form
// const text = `【您的订单已经生成】
//  -------------------------
// 奶茶口味：${tasty}
//          数量：${num}
//          杯型：${bottle}
//          甜度：${sugar}
//         `
        
// // console.log(submitBtn);
// submitBtn.addEventListener("click",function(){
//     alert(text)
// })





// const form = document.querySelector('form')
// form.addEventListener('submit', (event) => {
//     event.preventDefault()
//     const formData = new FormData(form)
//     // console.log(formData);
//     // console.log(formData.get('count'));
    // alert(`【您的订单已经生成】
    // ------------------------ 
    // 奶茶口味: ${formData.get('type')}
    // 几杯: ${formData.get('num')}
    // 杯型: ${formData.get('bottle')}
    // 甜度: ${formData.get('sugar')}
    // 免费小料: ${formData.getAll('freeSnack')}
    // 加价小料: ${formData.getAll('unfreeSnack')}
    // 是否加冰: ${formData.get('ofIce')}
    // 是否去茶底: ${formData.get('ofTea')}
    // 你的地址: ${formData.get('address')}
    // 你的手机号: ${formData.get('phone')}
    // 期待送达时间: ${formData.get('time')}
    // 备注: ${formData.get('note')}
    // 支付方式: ${formData.get('pay')}`)
// })











const form = document.querySelector("form")
// console.log(form);
form.addEventListener("submit",(e)=>{
    e.preventDefault;
    const formData = new FormData(form)
    alert(`【您的订单已经生成】
    ------------------------ 
    奶茶口味: ${formData.get('type')}
    几杯: ${formData.get('num')}
    杯型: ${formData.get('bottle')}
    甜度: ${formData.get('sugar')}
    免费小料: ${formData.getAll('freeSnack')}
    加价小料: ${formData.getAll('unfreeSnack')}
    是否加冰: ${formData.get('ofIce')}
    是否去茶底: ${formData.get('ofTea')}
    你的地址: ${formData.get('address')}
    你的手机号: ${formData.get('phone')}
    期待送达时间: ${formData.get('time')}
    备注: ${formData.get('note')}
    支付方式: ${formData.get('pay')}`
        
    )
})

// const btn= document.getElementsByClassName('to-top')
// console.log();
// console.log(btn);
// btn.addEventListener('click', console.log(document.documentElement.scrollTop))
// const topBtn = document.querySelector('.to-top')
// topBtn.addEventListener('click', () => {
//     // console.log(document.documentElement.scrollTop);
//     document.documentElement.scrollTop = 0
//     document.body.scrollTop = 0
// })
const tbtn = document.querySelector('.to-top')
// console.log(btn);

tbtn.addEventListener(
    'click',()=>{
       document.documentElement.scrollTop=0
    }
)
window.addEventListener('scroll', () => {
    const btn = document.querySelector('.to-top')
    // console.log(btn);
    if (document.documentElement.scrollTop > 0 || document.body.scrollTop > 0) {
        btn.classList.remove('hidden')
    } else {
        btn.classList.add('hidden')
    }
})
// console.log("classList");