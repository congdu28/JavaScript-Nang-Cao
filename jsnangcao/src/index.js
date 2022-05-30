import Navigo from '../node_modules/navigo';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Home from './pages/Home.js';
import About from './pages/About.js';
import News from './pages/News';
import Student from './pages/Student';

// import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';


// Khởi tạo đối tượng router
const router = new Navigo('/', {
    linksSelector: 'a'
});
const render = async(content) => {
    document.querySelector('#header').innerHTML = Header.render();
    document.querySelector('#content').innerHTML = await content;
    document.querySelector('#footer').innerHTML = Footer.render();
}

// function render(content) {
//     // document.querySelector('#header').innerHTML = '<button class="btn btn-primary">Bấm vào đây</button>';
//     document.querySelector('#header').innerHTML = Header.render();
//     document.querySelector('#content').innerHTML = content;
//     document.querySelector('#footer').innerHTML = Footer.render();
// }
router.on({
    '/': () => render(Home.render()),
    '/about': () => render(About.render()),
    '/news': () => render(News.render()),
    '/students': () => render(Student.render()),
});
router.resolve();

// arrow function: const ten_ham =() =>{};
const arrowRender = () => {
    document.querySelector('#header').innerHTML = '<div>Header</div>';
    document.querySelector('#content').innerHTML = '<div>Content</div>';
    document.querySelector('#footer').innerHTML = '<div>Footer</div>';
};

// const s = () => 2 + 3;

// function sum(a, b) {
//     return a + b;
// }; // cú pháp thông thường

// const sum1 = (a, b) => {
//     return a + b
// }; // arrow function có return

// const sum2 = (a, b) => a + b; // nếu chỉ có return

// const display = a => console.log(a); // nếu chỉ có 1 tham số
// const display1 = a => alert(a);
// // render();

// // callback: hàm đc truyền vào dưới dạng 1 đối số, và thực thi trong 1 hàm
// const abc = (print) => {
//     const result = sum(2, 3);
//     // có nhiều cách hiển thị khác nhau và phải nhận kq hiển thị từ result
//     print(result);
//     // display(result);
//     // display1(result);
// };
// abc(display1);

const loadScript = (src, callback) => {
    const scriptE = document.createElement('script');
    scriptE.src = src;
    scriptE.onload = () => callback();
};
const khoitaosv = () => {
    var sinhVien = {};
}

loadScript('moment.min.js', khoitaosv);

// đếm sô số chữ cái trong thông tin users
const countString = (string, callback) => {
    setTimeout(() => {
        console.log(string);
        callback();
    }, 500);
};
const countString2 = (string) => console.log(string);
const receiveUser = (user, callback, callback2) => {
    // Lấy ra tên 
    const username = user.name;
    // nhận tham số truyền vào là 1 trong 2 cách hiển thị tên
    callback(username, callback2);
    // countString(username);

};
// receiveUser({ name: 'CONGDU' }, countString, countString2);
// receiveUser({ name: 'CONGDU2' }, countString2);


// PROMISE
// let a = [];
// setTimeout(() => {
//     a = [1, 2, 3];
// }, 1000);
// console.log(a);

// Promise là đối tượng xử lý bất đồng bộ ở es6
// resolve thực thi khi đúng, và gtrị truyền vào resolve sẽ trả ở then
// reject thực thi khi sai, và giá trị truyền vào reject sẽ trả ở catch
const setValueA = () => new Promise((resolve, reject) => {
    let status = true;
    setTimeout(() => {
        if (status) {
            resolve([1, 2, 3]);
        } else {
            reject('Bị lỗi');
        }
    }, 2000);
});
setValueA()
    .then((data) => { data.push(4); return data })
    .then((data) => console.log(data))
    .catch((error) => console.log(error));;
// async / await
// - async: định nghĩa 1 hàm có thể xử lý vấn đề bất đồng bộ
// - await: định nghĩa 1 câu lệnh cần phải được chờ thực thi rồi mới thực thi câu lệnh tiếp theo
// -- await phải nằm trong 1 hàm async thì mới dùng được
// -- await phải là 1 hàm trả về đối tượng Promise

const printA = async() => {
    // gọi hàm setValueA để chờ nhận kết quả [1, 2, 3]
    const result = await setValueA(); // giá trị được truyền vào trong resolve()
    // chờ setValueA thực thi xong và trả về kq [1,2,3];
    // thì mới chạy dòng tiếp theo là console.log
    console.log('chờ result nhận kết quả rồi mới ra log này', result);
    result.push(4);
    console.log('sau khi thực hiện push ra kq này:', result);
};

printA();