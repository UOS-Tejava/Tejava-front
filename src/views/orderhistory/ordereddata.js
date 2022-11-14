import axios from "axios";

let ordereddata = {
  메뉴 : "",
  스타일 : "",
  옵션 : "",
  상태 : "",
  시간 : ''
}

axios.get('/order/history')
.then((res)=>{
  res=res.data;
  ordereddata.메뉴 = res.menu_nm;
  ordereddata.스타일 = res.style.style_nm;
  ordereddata.옵션 = res.options.option_nm;
  
})